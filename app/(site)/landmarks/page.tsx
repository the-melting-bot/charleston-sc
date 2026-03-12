import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import InfoBanner from "@/components/InfoBanner";

export const metadata: Metadata = {
  title: "Landmarks | Lowcountry Parks",
  description:
    "Explore Charleston's most iconic landmarks — from Rainbow Row and the Angel Oak Tree to Waterfront Park and the Ravenel Bridge.",
};

const landmarks = [
  {
    title: "Rainbow Row",
    description:
      "A row of thirteen colorful Georgian houses on East Bay Street dating to the 1740s. One of the most photographed spots in Charleston and a symbol of the city's pastel charm.",
    accentColor: "bg-coastal-200",
    tag: "Architecture",
  },
  {
    title: "Angel Oak Tree",
    description:
      "Estimated to be over 400 years old, this magnificent Southern live oak on Johns Island spans 17,200 square feet of shade. Its twisted limbs are a must-see natural wonder.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Natural Wonder",
  },
  {
    title: "Arthur Ravenel Jr. Bridge",
    description:
      "A modern cable-stayed bridge spanning the Cooper River with a 2.5-mile pedestrian and bike path offering spectacular views of the harbor and skyline.",
    accentColor: "bg-coastal-sand-light",
    tag: "Engineering",
  },
  {
    title: "The Battery & White Point Garden",
    description:
      "A landmark promenade and park at the tip of the Charleston peninsula, featuring antebellum mansions, Civil War-era cannons, and sweeping harbor views.",
    accentColor: "bg-coastal-200",
    tag: "Historic",
  },
  {
    title: "Pineapple Fountain",
    description:
      "The beloved centerpiece of Waterfront Park — this whimsical fountain shaped like a pineapple (the symbol of Southern hospitality) is a Charleston icon.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Icon",
  },
  {
    title: "St. Michael's Church",
    description:
      "Charleston's oldest church, built in 1761. Its towering 186-foot steeple is visible across the city and has served as a navigation landmark for centuries.",
    accentColor: "bg-coastal-sand-light",
    tag: "Architecture",
  },
];

const hiddenGems = [
  {
    title: "Unitarian Church Graveyard",
    description:
      "A hauntingly beautiful cemetery behind the oldest Unitarian church in the South, draped in wisteria and moss — especially magical in spring.",
    accentColor: "bg-coastal-200",
    tag: "Hidden Gem",
  },
  {
    title: "Drayton Hall",
    description:
      "The only plantation house on the Ashley River to survive the Revolutionary and Civil Wars intact. An architectural masterpiece of Palladian design, preserved unrestored since 1738.",
    accentColor: "bg-coastal-sand-light",
    tag: "Hidden Gem",
  },
  {
    title: "Circular Congregational Church",
    description:
      "One of the oldest congregations in the South, with a Romanesque Revival building and one of Charleston's most atmospheric graveyards dating to 1681.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Hidden Gem",
  },
];

export default function LandmarksPage() {
  return (
    <>
      <PageHero
        title="Landmarks"
        description="From colorful row houses to ancient live oaks, Charleston's landmarks are woven into the fabric of the city. These are the places that define its timeless character."
        accent="blue"
      />

      <Section
        title="Iconic Landmarks"
        subtitle="The must-see sights that put Charleston on the map"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {landmarks.map((l) => (
            <Card
              key={l.title}
              title={l.title}
              description={l.description}
              accentColor={l.accentColor}
              tag={l.tag}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Hidden Gems"
        subtitle="Off-the-beaten-path landmarks worth seeking out"
        className="bg-slate-50"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hiddenGems.map((g) => (
            <Card
              key={g.title}
              title={g.title}
              description={g.description}
              accentColor={g.accentColor}
              tag={g.tag}
            />
          ))}
        </div>
      </Section>

      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="Find These Landmarks"
            description="All landmarks are pinned on our interactive map with their exact locations."
            buttonLabel="Open Interactive Map"
            buttonHref="/maps"
            variant="blue"
          />
        </div>
      </div>
    </>
  );
}
