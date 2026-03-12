import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import QuickFacts from "@/components/QuickFacts";
import InfoBanner from "@/components/InfoBanner";
import HeroVideo from "@/components/HeroVideo";

export const metadata: Metadata = {
  title: {
    absolute: "Lowcountry Parks | Charleston's Parks & Green Spaces",
  },
  description:
    "Find parks, trails, and green spaces across the Charleston, SC area. Browse 124+ parks by neighborhood, explore an interactive map, and plan your next outdoor day in the Lowcountry.",
  alternates: { canonical: "/" },
};

/* ─── Icons (inline SVG for zero dependencies) ─── */
const IconSearch = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const IconMap = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
);

const IconParks = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-3.6 3-3.6 6 0 1.2.6 2.4 1.2 3H6l3 4.5H7.5L12 21l4.5-4.5H15L18 12h-3.6c.6-.6 1.2-1.8 1.2-3 0-3-2.4-6-3.6-6z" />
  </svg>
);

const facts = [
  { label: "Parks Listed", value: "124" },
  { label: "Neighborhoods", value: "6" },
  { label: "Rec Facilities", value: "30+" },
  { label: "Miles of Coast", value: "90+" },
];

/* ─── "What you can do" feature cards ─── */
const features = [
  {
    title: "Browse Parks",
    description:
      "Explore 124 parks and green spaces organized by neighborhood — from pocket parks on the Peninsula to waterfront trails in West Ashley.",
    href: "/parks-outdoor",
    accentColor: "bg-coastal-seafoam-200",
    icon: <IconSearch />,
  },
  {
    title: "View the Map",
    description:
      "See every park on an interactive map. Zoom in, tap a marker, and get the address, amenities, and hours at a glance.",
    href: "/maps",
    accentColor: "bg-coastal-200",
    icon: <IconMap />,
  },
  {
    title: "Explore by Area",
    description:
      "Find parks near you by browsing Charleston's six main areas — Peninsula, West Ashley, James Island, Johns Island, Daniel Island, and Cainhoy.",
    href: "/neighborhoods",
    accentColor: "bg-coastal-sand-light",
    icon: <IconParks />,
  },
];

/* ─── "Why it's useful" value props ─── */
const valueProps = [
  {
    title: "Real Data, Not Guesswork",
    description:
      "Every park listing comes from the City of Charleston Open Data portal — the same source the city uses to manage its parks system.",
    accentColor: "bg-coastal-200",
    tag: "Reliable",
  },
  {
    title: "Made for Busy Schedules",
    description:
      "Need a playground for Saturday morning? A dog-friendly trail after work? Filter by amenities and find the right park in seconds.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Practical",
  },
  {
    title: "Locals and Visitors Welcome",
    description:
      "Whether you've lived here for years or you're visiting for the weekend, Lowcountry Parks helps you discover green spaces you might have missed.",
    accentColor: "bg-coastal-sand-light",
    tag: "For Everyone",
  },
];

/* ─── Structured data (JSON-LD) ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lowcountry Parks",
  url: "https://lowcountryparks.com",
  description:
    "Find parks, trails, and green spaces across the Charleston, SC area.",
  publisher: {
    "@type": "Organization",
    name: "Lowcountry Parks",
    url: "https://lowcountryparks.com",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ─── Hero: What Lowcountry Parks is ─── */}
      <div className="wave-divider relative h-[60vh] min-h-[420px] max-h-[720px] overflow-hidden sm:h-[65vh] lg:h-[70vh]">
        {/* Layer 0 — Gradient fallback */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-coastal-900 via-coastal-700 to-coastal-500"
          aria-hidden="true"
        />

        {/* Layer 1 — Video */}
        <div className="absolute inset-0 z-[1]">
          <HeroVideo
            src="/media/lowcountryparks-hero.mp4"
            poster="/media/lowcountryparks-hero-poster.jpg"
          />
        </div>

        {/* Layer 2 — Dark overlay */}
        <div
          className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-black/35 to-black/20"
          aria-hidden="true"
        />

        {/* Layer 3 — Text content */}
        <div className="relative z-[3] flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-white/70">
                Charleston, SC
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                Find Your Next
                <br />
                Outdoor Day
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 drop-shadow sm:text-lg sm:leading-relaxed">
                Lowcountry Parks makes it easy to discover parks, trails,
                and green spaces across the Charleston area — all in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/parks-outdoor"
                  variant="primary"
                  size="lg"
                  className="!bg-white !text-coastal-800 shadow-lg hover:!bg-slate-100"
                >
                  Browse Parks
                </Button>
                <Button
                  href="/maps"
                  variant="outline"
                  size="lg"
                  className="!border-white/50 !text-white shadow-lg backdrop-blur-sm hover:!bg-white/15"
                >
                  Open Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Quick facts ─── */}
      <div className="-mt-10 relative z-10 mb-8">
        <QuickFacts facts={facts} />
      </div>

      {/* ─── What You Can Do ─── */}
      <Section
        title="What You Can Do"
        subtitle="Three ways to find the right park for your day"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              href={item.href}
              accentColor={item.accentColor}
              icon={item.icon}
            />
          ))}
        </div>
      </Section>

      {/* ─── Why It's Useful ─── */}
      <Section
        title="Why Lowcountry Parks"
        subtitle="Built to help you spend less time searching and more time outside"
        className="bg-slate-50"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              accentColor={item.accentColor}
              tag={item.tag}
            />
          ))}
        </div>
      </Section>

      {/* ─── CTA: Get Started ─── */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="Ready to Get Outside?"
            description="Start with the interactive map to see every park in the Charleston area, or browse the full list by neighborhood."
            buttonLabel="Open Interactive Map"
            buttonHref="/maps"
            variant="seafoam"
          />
        </div>
      </div>
    </>
  );
}
