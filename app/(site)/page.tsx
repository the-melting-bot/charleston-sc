import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Charleston SC Explorer | Discover the Lowcountry",
  description:
    "Explore Charleston, South Carolina — discover neighborhoods, parks, historical sites, landmarks, and more in the Lowcountry.",
};

const featured = [
  {
    title: "Neighborhoods & Areas",
    description:
      "From the cobblestone streets of Downtown to the laid-back vibes of Folly Beach — explore Charleston's diverse neighborhoods.",
    href: "/neighborhoods",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Parks & Outdoor",
    description:
      "Discover lush parks, waterfront trails, and outdoor recreation across the Lowcountry.",
    href: "/parks-outdoor",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "Historical & Cultural Sites",
    description:
      "Step back in time at Charleston's world-renowned historical landmarks and cultural institutions.",
    href: "/historical-cultural",
    color: "bg-coastal-sand-light",
  },
  {
    title: "Landmarks",
    description:
      "Iconic landmarks from Rainbow Row to the Angel Oak Tree that define Charleston's timeless charm.",
    href: "/landmarks",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Interactive Map",
    description:
      "Explore an interactive map of Charleston with markers for parks, landmarks, and historical sites.",
    href: "/maps",
    color: "bg-coastal-seafoam-light",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-coastal-blue to-sky-700 px-4 py-24 text-center text-white sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Discover Charleston &amp; the Lowcountry
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-sky-100 sm:text-xl">
            Your comprehensive guide to the Holy City&apos;s best
            neighborhoods, parks, historical sites, and iconic landmarks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/neighborhoods">
              <Button variant="secondary" size="lg">
                Explore Neighborhoods
              </Button>
            </Link>
            <Link href="/maps">
              <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                View Map
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured sections */}
      <Section
        title="Explore Charleston"
        subtitle="Everything you need to discover the charm of the Lowcountry"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              color={item.color}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-coastal-seafoam-light px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Ready to Explore?
          </h2>
          <p className="mt-3 text-slate-600">
            Start with our interactive map to get an overview of everything
            Charleston has to offer.
          </p>
          <div className="mt-6">
            <Link href="/maps">
              <Button size="lg">Open Interactive Map</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
