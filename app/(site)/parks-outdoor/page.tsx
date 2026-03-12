import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import InfoBanner from "@/components/InfoBanner";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ParksExplorer, { type JsonPark } from "@/components/ParksExplorer";

export const metadata: Metadata = {
  title: "Parks & Green Spaces",
  description:
    "Browse 124 parks and recreation facilities across the Charleston, SC area. Find playgrounds, trails, sports fields, and waterfront green spaces by neighborhood.",
};

/* ─── Park type (matches data/parks.json) ─── */
interface ParksData {
  _meta: { totalFeatures: number };
  parks: JsonPark[];
}

/* ─── Load parks data at build/request time (server component) ─── */
function getParksData(): ParksData {
  const filePath = path.join(process.cwd(), "data", "parks.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/* ─── Outdoor activities (manually curated) ─── */
const activities = [
  {
    title: "Kayaking & Paddleboarding",
    description:
      "Paddle through Shem Creek, the Ashley River, or the tidal creeks around Folly Beach. Rental outfitters available at most launch points.",
    accentColor: "bg-coastal-200",
    tag: "On the Water",
  },
  {
    title: "Biking the Ravenel Bridge",
    description:
      "The 2.5-mile pedestrian and bike lane across the Arthur Ravenel Jr. Bridge offers one of the best views in Charleston — especially at sunset.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Cycling",
  },
  {
    title: "Birding & Wildlife",
    description:
      "The Lowcountry is a birder's paradise. Visit the Center for Birds of Prey or explore the marshes at Caw Caw Interpretive Center for herons, egrets, and osprey.",
    accentColor: "bg-coastal-sand-light",
    tag: "Nature",
  },
];

export default function ParksOutdoorPage() {
  const data = getParksData();
  const allParks = data.parks;

  /* Stats */
  const totalParks = allParks.filter((p) => p.type === "park").length;
  const totalRec = allParks.filter((p) => p.type === "recreation").length;
  const totalAcres = Math.round(
    allParks.reduce((sum, p) => sum + (p.areaSqFt ?? 0), 0) / 43560
  );
  const neighborhoods = new Set(
    allParks.map((p) => p.neighborhood).filter(Boolean)
  );

  const facts = [
    { label: "Parks", value: String(totalParks) },
    { label: "Rec Centers", value: String(totalRec) },
    { label: "Total Acres", value: totalAcres.toLocaleString() },
    { label: "Neighborhoods", value: String(neighborhoods.size) },
  ];

  return (
    <>
      <PageHero
        title="Parks & Green Spaces"
        description="124 parks and recreation facilities across six Charleston neighborhoods. Find playgrounds, trails, sports fields, dog parks, and waterfront green spaces near you."
        accent="seafoam"
        backgroundImage="/images/parks/parks-hero.jpg"
        backgroundAlt="Families strolling through a Charleston park with live oaks, Spanish moss, and a fountain at golden hour"
      />

      <div className="-mt-6 relative z-10 mb-4">
        <QuickFacts facts={facts} />
      </div>

      {/* ─── Parks Explorer (client component with filters) ─── */}
      <Suspense fallback={<div className="py-16 text-center text-slate-400">Loading parks...</div>}>
        <ParksExplorer parks={allParks} />
      </Suspense>

      {/* ─── Outdoor Activities ─── */}
      <Section
        title="Things to Do Outdoors"
        subtitle="Popular activities around the Charleston area"
        className="bg-slate-50"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <Card
              key={a.title}
              title={a.title}
              description={a.description}
              accentColor={a.accentColor}
              tag={a.tag}
            />
          ))}
        </div>
      </Section>

      {/* ─── CTA ─── */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="Find Parks on the Map"
            description="See every park on our interactive map. Tap a marker for address, amenities, and hours."
            buttonLabel="Open Interactive Map"
            buttonHref="/maps"
            variant="seafoam"
          />
        </div>
      </div>
    </>
  );
}
