import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";

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
    color: "bg-coastal-blue-light",
  },
  {
    title: "Mount Pleasant",
    description:
      "A thriving community across the Cooper River, known for Shem Creek, Patriot's Point, and stunning views of the Ravenel Bridge.",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "West Ashley",
    description:
      "Charleston's first suburb offers a mix of historic plantations, local eateries on Savannah Highway, and easy access to the Ashley River.",
    color: "bg-coastal-sand-light",
  },
  {
    title: "James Island",
    description:
      "A laid-back island community bridging Downtown and Folly Beach, home to James Island County Park and the beloved Folly Road corridor.",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Sullivan's Island",
    description:
      "A quiet, upscale barrier island with wide beaches, historic Fort Moultrie, and a charming village of restaurants and shops.",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "Folly Beach",
    description:
      "Charleston's 'Edge of America' — a funky, free-spirited beach town beloved for surfing, sunsets, and the iconic Folly Beach Pier.",
    color: "bg-coastal-sand-light",
  },
];

export default function NeighborhoodsPage() {
  return (
    <Section
      title="Neighborhoods & Areas"
      subtitle="Discover the distinct character of each Charleston neighborhood"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {neighborhoods.map((n) => (
          <Card
            key={n.title}
            title={n.title}
            description={n.description}
            color={n.color}
          />
        ))}
      </div>
    </Section>
  );
}
