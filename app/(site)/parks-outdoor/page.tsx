import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";

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
    color: "bg-coastal-blue-light",
  },
  {
    title: "Hampton Park",
    description:
      "Charleston's largest park at 60 acres, featuring beautiful gardens, walking paths, and a peaceful bandstand — a local favorite for picnics.",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "James Island County Park",
    description:
      "A 643-acre park offering a splash zone, climbing wall, fishing and crabbing docks, dog park, camping, and the famous Holiday Festival of Lights.",
    color: "bg-coastal-sand-light",
  },
  {
    title: "Folly Beach County Park",
    description:
      "A family-friendly beach park at the west end of Folly Island with lifeguards, picnic areas, a snack bar, and beautiful Atlantic Ocean views.",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Palmetto Islands County Park",
    description:
      "A 943-acre nature park in Mount Pleasant with trails, a playground, the Splash Island waterpark, and opportunities for kayaking and bird watching.",
    color: "bg-coastal-seafoam-light",
  },
];

export default function ParksOutdoorPage() {
  return (
    <Section
      title="Parks & Outdoor"
      subtitle="Experience the natural beauty of the Lowcountry"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {parks.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            description={p.description}
            color={p.color}
          />
        ))}
      </div>
    </Section>
  );
}
