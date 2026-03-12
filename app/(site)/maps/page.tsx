import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import MapsLayout from "@/components/MapsLayout";

export const metadata: Metadata = {
  title: "Interactive Park Map",
  description:
    "Explore 124 Charleston parks on an interactive map with satellite imagery, marker clustering, and detailed park information.",
};

/* ─── Curated parks that have real images and detail pages ─── */
const CURATED_SLUGS = new Set([
  "waterfront-park",
  "hampton-park",
  "james-island-county-park",
  "palmetto-islands-county-park",
  "white-point-garden",
  "brittlebank-park",
  "wannamaker-county-park",
  "mitchell-playground",
  "cannon-park",
  "colonial-lake",
  "marion-square",
  "hazel-parker-playground",
  "laurel-hill-county-park",
  "folly-beach-county-park",
  "mount-pleasant-waterfront-park",
  "magnolia-plantation",
  "middleton-place",
]);

export default function MapsPage() {
  const filePath = path.join(process.cwd(), "data", "parks.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw);

  // Map JSON parks to the Park type used by map components
  const allParks = data.parks
    .filter(
      (p: { latitude: number | null; longitude: number | null }) =>
        p.latitude && p.longitude
    )
    .map(
      (p: {
        slug: string;
        name: string;
        neighborhood: string | null;
        description: string;
        address: string | null;
        hours: string;
        amenities: string[];
        latitude: number;
        longitude: number;
      }) => ({
        id: p.slug,
        slug: p.slug,
        name: p.name,
        area: p.neighborhood || "Charleston",
        description: p.description || "",
        address: p.address || "",
        hours: p.hours || "Dawn to Dusk",
        amenities: p.amenities,
        latitude: p.latitude,
        longitude: p.longitude,
        images: CURATED_SLUGS.has(p.slug) ? ["1.jpg"] : [],
      })
    );

  return <MapsLayout parks={allParks} />;
}
