import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import InfoBanner from "@/components/InfoBanner";

export const metadata: Metadata = {
  title: "Parks by Area | Lowcountry Parks",
  description:
    "Find parks and green spaces in every Charleston neighborhood — from Downtown to Folly Beach, West Ashley to Daniel Island.",
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
        title="Parks by Area"
        description="Charleston's neighborhoods each have their own character — and their own parks. Browse by area to find green spaces, playgrounds, and trails near where you live or are visiting."
        accent="blue"
      />

      <Section
        title="Charleston Neighborhoods"
        subtitle="Each area has parks and green spaces worth exploring"
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

      <div className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="See All Parks on the Map"
            description="View every park across all Charleston neighborhoods on our interactive map."
            buttonLabel="Open Interactive Map"
            buttonHref="/maps"
            variant="sand"
          />
        </div>
      </div>
    </>
  );
}
