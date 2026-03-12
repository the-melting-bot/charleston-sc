import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Section from "@/components/Section";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import InfoBanner from "@/components/InfoBanner";

export const metadata: Metadata = {
  title: "Parks & Green Spaces | Lowcountry Parks",
  description:
    "Browse 124 parks and recreation facilities across the Charleston, SC area. Find playgrounds, trails, sports fields, and waterfront green spaces by neighborhood.",
};

/* ─── Park type (matches data/parks.json) ─── */
interface Park {
  id: number;
  name: string;
  slug: string;
  type: string;
  status: string | null;
  address: string | null;
  neighborhood: string | null;
  description: string | null;
  hours: string | null;
  amenities: string[];
  areaSqFt: number | null;
}

interface ParksData {
  _meta: { totalFeatures: number };
  parks: Park[];
}

/* ─── Load parks data at build/request time (server component) ─── */
function getParksData(): ParksData {
  const filePath = path.join(process.cwd(), "data", "parks.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/* ─── Neighborhood accent colors ─── */
const neighborhoodAccents: Record<string, string> = {
  Peninsula: "bg-coastal-200",
  "West Ashley": "bg-coastal-seafoam-200",
  "James Island": "bg-coastal-sand-light",
  "Johns Island": "bg-coastal-200",
  "Daniel Island": "bg-coastal-seafoam-200",
  Cainhoy: "bg-coastal-sand-light",
};

/* ─── Short fallback descriptions for parks without one ─── */
function getFallbackDescription(park: Park): string {
  const parts: string[] = [];
  if (park.type === "recreation") {
    parts.push("A community recreation facility");
  } else {
    parts.push("A public park");
  }
  if (park.neighborhood) {
    parts.push(`in the ${park.neighborhood} area of Charleston`);
  }
  if (park.amenities.length > 0) {
    const top = park.amenities.slice(0, 3).join(", ");
    parts.push(`featuring ${top}`);
  }
  if (park.hours) {
    parts.push(`— open ${park.hours.toLowerCase()}`);
  }
  return parts.join(" ") + ".";
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

  /* Group parks by neighborhood */
  const neighborhoods = Array.from(
    new Set(
      allParks
        .map((p) => p.neighborhood)
        .filter((n): n is string => n !== null)
    )
  ).sort();

  /* Stats */
  const totalParks = allParks.filter((p) => p.type === "park").length;
  const totalRec = allParks.filter((p) => p.type === "recreation").length;
  const totalAcres = Math.round(
    allParks.reduce((sum, p) => sum + (p.areaSqFt ?? 0), 0) / 43560
  );

  const facts = [
    { label: "Parks", value: String(totalParks) },
    { label: "Rec Centers", value: String(totalRec) },
    { label: "Total Acres", value: totalAcres.toLocaleString() },
    { label: "Neighborhoods", value: String(neighborhoods.length) },
  ];

  return (
    <>
      <PageHero
        title="Parks & Green Spaces"
        description="124 parks and recreation facilities across six Charleston neighborhoods. Find playgrounds, trails, sports fields, dog parks, and waterfront green spaces near you."
        accent="seafoam"
      />

      <div className="-mt-6 relative z-10 mb-4">
        <QuickFacts facts={facts} />
      </div>

      {/* ─── Parks by Neighborhood ─── */}
      {neighborhoods.map((hood) => {
        const parksInHood = allParks.filter((p) => p.neighborhood === hood);
        return (
          <Section
            key={hood}
            title={hood}
            subtitle={`${parksInHood.length} park${parksInHood.length !== 1 ? "s" : ""} & green spaces`}
          >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {parksInHood.map((park) => (
                <Card
                  key={park.id}
                  title={park.name}
                  description={
                    park.description ?? getFallbackDescription(park)
                  }
                  accentColor={
                    neighborhoodAccents[hood] ?? "bg-coastal-200"
                  }
                  tag={
                    park.type === "recreation" ? "Recreation" : "Park"
                  }
                  href={`/parks/${park.slug}`}
                />
              ))}
            </div>
          </Section>
        );
      })}

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
