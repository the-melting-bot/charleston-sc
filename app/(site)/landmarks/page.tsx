import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Charleston Landmarks | Charleston SC Explorer",
  description:
    "Explore Charleston's most iconic landmarks — from Rainbow Row to the Angel Oak Tree.",
};

const landmarks = [
  {
    title: "Rainbow Row",
    description:
      "A row of thirteen colorful Georgian houses on East Bay Street, Rainbow Row is one of the most photographed spots in Charleston.",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Angel Oak Tree",
    description:
      "Estimated to be over 400 years old, this magnificent live oak on Johns Island spans 17,200 square feet of shade and is a must-see natural wonder.",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "Arthur Ravenel Jr. Bridge",
    description:
      "A modern cable-stayed bridge spanning the Cooper River, offering a 2.5-mile pedestrian and bike path with spectacular views of the harbor.",
    color: "bg-coastal-sand-light",
  },
  {
    title: "The Battery & White Point Garden",
    description:
      "A landmark promenade and park at the tip of the Charleston peninsula, featuring antebellum mansions, Civil War cannons, and sweeping harbor views.",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Pineapple Fountain",
    description:
      "The beloved centerpiece of Waterfront Park, this whimsical fountain shaped like a pineapple — the symbol of Southern hospitality — is a Charleston icon.",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "St. Michael's Church",
    description:
      "Charleston's oldest church, built in 1761, features a towering 186-foot steeple visible across the city and stunning Georgian architecture.",
    color: "bg-coastal-sand-light",
  },
];

export default function LandmarksPage() {
  return (
    <Section
      title="Landmarks"
      subtitle="Charleston's most iconic and beloved landmarks"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {landmarks.map((l) => (
          <Card
            key={l.title}
            title={l.title}
            description={l.description}
            color={l.color}
          />
        ))}
      </div>
    </Section>
  );
}
