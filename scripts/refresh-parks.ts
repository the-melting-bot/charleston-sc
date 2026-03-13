/**
 * Park Data Refresh Script
 *
 * Fetches fresh park data from the City of Charleston ArcGIS REST API,
 * merges with existing overrides in data/parks.json, and writes the updated file.
 *
 * Usage: npm run refresh-parks
 */

import fs from "fs";
import path from "path";

/* ─── Types ─── */

interface ArcGISGeometry {
  rings: number[][][];
}

interface ArcGISAttributes {
  OBJECTID: number;
  FACILITYSITEID: string;
  FACUSE: string;
  NAME: string;
  ALTNAME: string;
  ADDRESS: string;
  REGION: string;
  OWNEDBY: string;
  MAINTBY: string;
  DESC_: string;
  EAM_DESC: string;
}

interface ArcGISFeature {
  attributes: ArcGISAttributes;
  geometry: ArcGISGeometry;
}

interface ArcGISResponse {
  features: ArcGISFeature[];
}

interface ParkEntry {
  id: number;
  facilityId: string;
  name: string;
  slug: string;
  type: string;
  status: string;
  address: string;
  neighborhood: string;
  owner: string;
  maintainedBy: string;
  description: string;
  hours: string;
  url: string;
  latitude: number;
  longitude: number;
  amenities: string[];
  areaSqFt?: number;
  categoryImage?: string;
}

interface ParksData {
  _meta: {
    source: string;
    sourceUrl: string;
    license: string;
    fetchedAt: string;
    totalFeatures: number;
  };
  parks: ParkEntry[];
}

/* ─── Helpers ─── */

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function calculateCentroid(rings: number[][][]): { lat: number; lng: number } {
  let totalLat = 0;
  let totalLng = 0;
  let count = 0;

  for (const ring of rings) {
    for (const point of ring) {
      totalLng += point[0];
      totalLat += point[1];
      count++;
    }
  }

  return {
    lat: count > 0 ? totalLat / count : 0,
    lng: count > 0 ? totalLng / count : 0,
  };
}

/* ─── Main ─── */

async function main() {
  const ARCGIS_URL =
    "https://gis.charleston-sc.gov/arcgis2/rest/services/External/EAM_BASEMAP_WorldMercAuxSphere/MapServer/0/query";

  const params = new URLSearchParams({
    where: "1=1",
    outFields: "*",
    f: "json",
    returnGeometry: "true",
    outSR: "4326",
  });

  console.log("Fetching park data from ArcGIS REST API...");

  const response = await fetch(`${ARCGIS_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`ArcGIS API returned ${response.status}: ${response.statusText}`);
  }

  const data: ArcGISResponse = await response.json();
  const features = data.features;

  console.log(`Received ${features.length} features from API.`);

  /* Read existing parks.json */
  const parksJsonPath = path.join(process.cwd(), "data", "parks.json");
  let existing: ParksData = {
    _meta: {
      source: "City of Charleston Open Data – Parks",
      sourceUrl:
        "https://data-charleston-sc.opendata.arcgis.com/items/109c6c5688f040908a11a7dee3a04b29",
      license: "City of Charleston Open Data Policy (public, non-commercial use)",
      fetchedAt: "",
      totalFeatures: 0,
    },
    parks: [],
  };

  try {
    const raw = fs.readFileSync(parksJsonPath, "utf-8");
    existing = JSON.parse(raw) as ParksData;
  } catch {
    console.log("No existing parks.json found — starting fresh.");
  }

  /* Build lookups for existing parks */
  const byFacilityId = new Map<string, ParkEntry>();
  const bySlug = new Map<string, ParkEntry>();

  for (const park of existing.parks) {
    if (park.facilityId) byFacilityId.set(park.facilityId, park);
    if (park.slug) bySlug.set(park.slug, park);
  }

  /* Track which existing parks we've seen in the API */
  const seenSlugs = new Set<string>();

  let newCount = 0;
  let updatedCount = 0;

  const mergedParks: ParkEntry[] = [];

  for (const feature of features) {
    const attr = feature.attributes;
    const centroid = calculateCentroid(feature.geometry?.rings || []);
    const name = attr.NAME || attr.ALTNAME || "Unknown Park";
    const slug = slugify(name);
    const facilityId = attr.FACILITYSITEID || `OBJ-${attr.OBJECTID}`;

    /* Find existing park by facilityId first, then slug */
    const existingPark = byFacilityId.get(facilityId) || bySlug.get(slug);

    if (existingPark) {
      /* Merge — update API fields, keep curated overrides */
      seenSlugs.add(existingPark.slug);

      const merged: ParkEntry = {
        ...existingPark,
        /* Always update from API */
        name,
        slug: existingPark.slug, // keep existing slug for URL stability
        address: attr.ADDRESS || existingPark.address,
        neighborhood: attr.REGION || existingPark.neighborhood,
        owner: attr.OWNEDBY || existingPark.owner,
        maintainedBy: attr.MAINTBY || existingPark.maintainedBy,
        latitude: centroid.lat || existingPark.latitude,
        longitude: centroid.lng || existingPark.longitude,
        facilityId,
        status: "active",
      };

      /* Only fill description if existing is empty */
      if (!existingPark.description) {
        const apiDesc = attr.DESC_ || attr.EAM_DESC || "";
        if (apiDesc) merged.description = apiDesc;
      }

      mergedParks.push(merged);
      updatedCount++;
    } else {
      /* New park */
      seenSlugs.add(slug);

      const newPark: ParkEntry = {
        id: attr.OBJECTID,
        facilityId,
        name,
        slug,
        type: (attr.FACUSE || "park").toLowerCase(),
        status: "active",
        address: attr.ADDRESS || "",
        neighborhood: attr.REGION || "",
        owner: attr.OWNEDBY || "",
        maintainedBy: attr.MAINTBY || "",
        description: attr.DESC_ || attr.EAM_DESC || "",
        hours: "",
        url: "",
        latitude: centroid.lat,
        longitude: centroid.lng,
        amenities: [],
      };

      mergedParks.push(newPark);
      newCount++;
    }
  }

  /* Keep existing parks no longer in API — mark as removed */
  let removedCount = 0;
  for (const park of existing.parks) {
    if (!seenSlugs.has(park.slug)) {
      mergedParks.push({
        ...park,
        status: "removed",
      });
      removedCount++;
    }
  }

  /* Sort by name */
  mergedParks.sort((a, b) => a.name.localeCompare(b.name));

  /* Write updated parks.json */
  const output: ParksData = {
    _meta: {
      ...existing._meta,
      fetchedAt: new Date().toISOString(),
      totalFeatures: features.length,
    },
    parks: mergedParks,
  };

  fs.writeFileSync(parksJsonPath, JSON.stringify(output, null, 2) + "\n", "utf-8");

  /* Summary */
  console.log("\n── Refresh complete ──");
  console.log(`  Total parks: ${mergedParks.length}`);
  console.log(`  New parks added: ${newCount}`);
  console.log(`  Parks updated: ${updatedCount}`);
  console.log(`  Parks removed (kept with status 'removed'): ${removedCount}`);
  console.log(`  Written to: ${parksJsonPath}`);
}

main().catch((err) => {
  console.error("Failed to refresh parks:", err);
  process.exit(1);
});
