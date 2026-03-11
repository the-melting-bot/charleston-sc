import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import QuickFacts from "@/components/QuickFacts";
import InfoBanner from "@/components/InfoBanner";

export const metadata: Metadata = {
  title: "Parks & Outdoor Activities | Charleston SC Explorer",
  description:
    "Explore Charleston's beautiful parks and outdoor spaces — from Waterfront Park to James Island County Park.",
};

const parks = [
  {
    title: "Waterfront Park",
    description:
      "A stunning eight-acre park along the Charleston Harbor, famous for the iconic Pineapple Fountain and sweeping waterfront views.",
    accentColor: "bg-coastal-200",
    tag: "Downtown",
  },
  {
    title: "Hampton Park",
    description:
      "Charleston's largest park at 60 acres, featuring beautiful gardens, walking paths, and a peaceful bandstand — a local favorite for picnics.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Upper Peninsula",
  },
  {
    title: "James Island County Park",
    description:
      "A 643-acre park offering a splash zone, climbing wall, fishing and crabbing docks, dog park, camping, and the famous Holiday Festival of Lights.",
    accentColor: "bg-coastal-sand-light",
    tag: "James Island",
  },
  {
    title: "Folly Beach County Park",
    description:
      "A family-friendly beach park at the west end of Folly Island with lifeguards, picnic areas, a snack bar, and beautiful Atlantic Ocean views.",
    accentColor: "bg-coastal-200",
    tag: "Folly Beach",
  },
  {
    title: "Palmetto Islands County Park",
    description:
      "A 943-acre nature park in Mount Pleasant with trails, a playground, the Splash Island waterpark, and opportunities for kayaking and bird watching.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Mount Pleasant",
  },
  {
    title: "Charles Towne Landing",
    description:
      "The site of the original 1670 English settlement, featuring an Animal Forest, replica trading ship, and miles of trails through maritime forest.",
    accentColor: "bg-coastal-sand-light",
    tag: "West Ashley",
  },
];

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

const facts = [
  { label: "County Parks", value: "10" },
  { label: "Beach Miles", value: "30+" },
  { label: "Acres of Parkland", value: "2,700+" },
  { label: "Avg Sunny Days", value: "230" },
];

export default function ParksOutdoorPage() {
  return (
    <>
      <PageHero
        title="Parks & Outdoor"
        description="With over 230 sunny days a year and miles of coastline, Charleston is made for outdoor exploration. From urban green spaces to wild barrier islands, there's always somewhere to get outside."
        accent="seafoam"
      />

      <div className="-mt-6 relative z-10 mb-4">
        <QuickFacts facts={facts} />
      </div>

      <Section
        title="Parks & Green Spaces"
        subtitle="The Lowcountry's best parks for every kind of outing"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parks.map((p) => (
            <Card
              key={p.title}
              title={p.title}
              description={p.description}
              accentColor={p.accentColor}
              tag={p.tag}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Outdoor Activities"
        subtitle="Things to do beyond the parks"
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

      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="See It on the Map"
            description="View all parks and outdoor spots on our interactive map with directions and details."
            buttonLabel="Open Map"
            buttonHref="/maps"
            variant="seafoam"
          />
        </div>
      </div>
    </>
  );
}
