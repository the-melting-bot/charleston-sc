#!/usr/bin/env node

/**
 * fetch-parks.mjs
 *
 * Fetches the City of Charleston Parks dataset from the official
 * ArcGIS Open Data portal and outputs a clean data/parks.json file.
 *
 * Source: City of Charleston Open Data – Parks
 * https://data-charleston-sc.opendata.arcgis.com/items/109c6c5688f040908a11a7dee3a04b29
 *
 * This dataset is published under the City of Charleston's open data policy
 * for public, non-commercial use.
 *
 * Usage:
 *   node scripts/fetch-parks.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, "..", "data");
const PUBLIC_DIR = join(__dirname, "..", "public", "data");
const DATA_FILE = join(DATA_DIR, "parks.json");
const PUBLIC_FILE = join(PUBLIC_DIR, "parks.json");

// City of Charleston Parks – GeoJSON endpoint (public, no API key required)
const GEOJSON_URL =
  "https://opendata.arcgis.com/datasets/109c6c5688f040908a11a7dee3a04b29_0.geojson";

/**
 * Convert a park name to a URL-friendly slug.
 */
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Compute the centroid of a GeoJSON polygon (first ring only).
 * Good enough for marker placement on city-scale parks.
 */
function polygonCentroid(coordinates) {
  // Handle MultiPolygon – use the first polygon
  let ring = coordinates;

  // Drill into MultiPolygon → Polygon → ring
  if (Array.isArray(ring[0]) && Array.isArray(ring[0][0]) && Array.isArray(ring[0][0][0])) {
    // MultiPolygon
    ring = ring[0][0];
  } else if (Array.isArray(ring[0]) && Array.isArray(ring[0][0])) {
    // Polygon – take the outer ring
    ring = ring[0];
  }

  let sumLng = 0;
  let sumLat = 0;
  const n = ring.length;

  for (const [lng, lat] of ring) {
    sumLng += lng;
    sumLat += lat;
  }

  return {
    latitude: +(sumLat / n).toFixed(6),
    longitude: +(sumLng / n).toFixed(6),
  };
}

/**
 * Collect amenities from boolean-style fields.
 */
function collectAmenities(props) {
  const amenityFields = {
    RESTROOM: "Restrooms",
    BASEBALL: "Baseball",
    BASKETBALL: "Basketball",
    SOCCER: "Soccer",
    PICNICAREA: "Picnic Area",
    PLAYGROUND: "Playground",
    MULTIPURPOSEFIELD: "Multi-Purpose Field",
    BOATING: "Boating",
    DOGPARK: "Dog Park",
    FISHING: "Fishing",
    SKATE: "Skate Park",
    TENNIS: "Tennis",
    ULTIMATEGOLF: "Disc Golf",
    CYCLING: "Cycling",
  };

  const result = [];
  for (const [field, label] of Object.entries(amenityFields)) {
    const val = (props[field] || "").trim().toUpperCase();
    if (val === "YES") {
      result.push(label);
    }
  }
  return result;
}

/**
 * Clean up hours/days strings.
 */
function cleanHours(operDays, operHours) {
  const days = (operDays || "").trim();
  const hours = (operHours || "").trim();

  if (!days && !hours) return null;

  const parts = [];
  if (days) parts.push(days);
  if (hours) parts.push(hours);
  return parts.join(", ");
}

async function main() {
  console.log("Fetching City of Charleston Parks dataset...");
  console.log(`Source: ${GEOJSON_URL}\n`);

  const response = await fetch(GEOJSON_URL);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const geojson = await response.json();
  console.log(`Received ${geojson.features.length} features from the dataset.`);

  // Process features into clean park objects
  const parks = geojson.features
    .filter((f) => {
      const props = f.properties || {};
      const name = (props.NAME || "").trim();
      // Filter to actual park facilities (PARKFAC) with names
      // Include RECFAC too as they're recreation facilities at park sites
      return name.length > 0 && f.geometry;
    })
    .map((f, index) => {
      const props = f.properties;
      const name = props.NAME.trim();
      const centroid = polygonCentroid(f.geometry.coordinates);

      return {
        id: props.OBJECTID || index + 1,
        facilityId: props.FACILITYSITEID || null,
        name,
        slug: slugify(name),
        type: props.FACUSE === "PARKFAC" ? "park" : "recreation",
        status: (props.STATUS || "").trim() || null,
        address: (props.ADDRESS || "").trim() || null,
        neighborhood: (props.REGION || "").trim() || null,
        owner: (props.OWNEDBY || "").trim() || null,
        maintainedBy: (props.MAINTBY || "").trim() || null,
        description: (props.DESC_ || "").trim() || null,
        hours: cleanHours(props.OPERDAYS, props.OPERHOURS),
        url: (props.URL || "").trim() || null,
        latitude: centroid.latitude,
        longitude: centroid.longitude,
        amenities: collectAmenities(props),
        areaSqFt: props.Shape__Area ? Math.round(props.Shape__Area) : null,
      };
    })
    // Sort by name for consistent ordering
    .sort((a, b) => a.name.localeCompare(b.name));

  // Summary stats
  const parkCount = parks.filter((p) => p.type === "park").length;
  const recCount = parks.filter((p) => p.type === "recreation").length;
  const neighborhoods = [...new Set(parks.map((p) => p.neighborhood).filter(Boolean))].sort();

  console.log(`\nProcessed ${parks.length} facilities:`);
  console.log(`  - ${parkCount} parks`);
  console.log(`  - ${recCount} recreation facilities`);
  console.log(`  - ${neighborhoods.length} neighborhoods: ${neighborhoods.join(", ")}`);

  // Build output
  const output = {
    _meta: {
      source: "City of Charleston Open Data – Parks",
      sourceUrl: "https://data-charleston-sc.opendata.arcgis.com/items/109c6c5688f040908a11a7dee3a04b29",
      license: "City of Charleston Open Data Policy (public, non-commercial use)",
      fetchedAt: new Date().toISOString(),
      totalFeatures: parks.length,
    },
    parks,
  };

  // Write output to both data/ (for reference) and public/data/ (for serving)
  const jsonStr = JSON.stringify(output, null, 2);
  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(DATA_FILE, jsonStr, "utf-8");
  writeFileSync(PUBLIC_FILE, jsonStr, "utf-8");
  console.log(`\nWritten to ${DATA_FILE}`);
  console.log(`Written to ${PUBLIC_FILE}`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
