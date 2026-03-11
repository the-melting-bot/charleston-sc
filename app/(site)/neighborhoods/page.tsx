import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import InfoBanner from "@/components/InfoBanner";

export const metadata: Metadata = {
  title: "Charleston Neighborhoods & Areas | Charleston SC Explorer",
  description:
    "Explore Charleston's diverse neighborhoods — from historic Downtown to the beaches of Sullivan's Island and Folly Beach.",
};

const neighborhoods = [
  {
    title: "Downtown Charleston",
    description:
      "The heart of the Holy City — cobblestone streets, pastel row houses, world-class dining, and centuries of history at every turn.",
    accentColor: "bg-coastal-200",
    tag: "Historic District",
  },
  {
    title: "Mount Pleasant",
    description:
      "A thriving community across the Cooper River, known for Shem Creek, Patriot's Point, and stunning views of the Ravenel Bridge.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "East of Cooper",
  },
  {
    title: "West Ashley",
    description:
      "Charleston's first suburb offers historic plantations, local eateries on Savannah Highway, and easy access to the Ashley River.",
    accentColor: "bg-coastal-sand-light",
    tag: "West of Ashley",
  },
  {
    title: "James Island",
    description:
      "A laid-back island community bridging Downtown and Folly Beach, home to James Island County Park and the beloved Folly Road corridor.",
    accentColor: "bg-coastal-200",
    tag: "Island Life",
  },
  {
    title: "Sullivan's Island",
    description:
      "A quiet, upscale barrier island with wide beaches, historic Fort Moultrie, and a charming village of restaurants and shops.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Barrier Island",
  },
  {
    title: "Folly Beach",
    description:
      "Charleston's 'Edge of America' — a funky, free-spirited beach town beloved for surfing, sunsets, and the iconic Folly Beach Pier.",
    accentColor: "bg-coastal-sand-light",
    tag: "Beach Town",
  },
  {
    title: "North Charleston",
    description:
      "The region's cultural hub with the Charleston Area Convention Center, Riverfront Park, and a growing arts district around Park Circle.",
    accentColor: "bg-coastal-200",
    tag: "Arts & Culture",
  },
  {
    title: "Daniel Island",
    description:
      "A master-planned community with manicured parks, a town center, and the Credit One Stadium — home to pro tennis and concerts.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Planned Community",
  },
  {
    title: "Isle of Palms",
    description:
      "A family-friendly resort island with pristine beaches, Wild Dunes resort, and a relaxed vibe just minutes from Downtown.",
    accentColor: "bg-coastal-sand-light",
    tag: "Resort Island",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        title="Neighborhoods & Areas"
        description="Every corner of Charleston has its own personality. From the cobblestone charm of the historic district to the salt-sprayed shores of the barrier islands, discover the places that make the Lowcountry home."
        accent="blue"
      />

      <Section
        title="Where to Explore"
        subtitle="Click into any neighborhood to learn what makes it unique"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((n) => (
            <Card
              key={n.title}
              title={n.title}
              description={n.description}
              accentColor={n.accentColor}
              tag={n.tag}
            />
          ))}
        </div>
      </Section>

      {/* Placeholder: Getting around */}
      <div className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="Getting Around"
            description="Charleston is a walkable city at its core, but getting between neighborhoods is easy with CARTA buses, water taxis, and rideshare. Detailed transit info coming soon."
            variant="sand"
          />
        </div>
      </div>
    </>
  );
}
