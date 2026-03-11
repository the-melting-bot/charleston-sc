import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import QuickFacts from "@/components/QuickFacts";
import InfoBanner from "@/components/InfoBanner";

/* ─── Lazy-load the hero video (client component, non-blocking) ─── */
const HeroVideo = dynamic(() => import("@/components/HeroVideo"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Charleston SC Explorer | Discover the Lowcountry",
  description:
    "Explore Charleston, South Carolina — discover neighborhoods, parks, historical sites, landmarks, and more in the Lowcountry.",
};

/* ─── Icons (inline SVG for zero dependencies) ─── */
const IconNeighborhoods = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const IconParks = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-3.6 3-3.6 6 0 1.2.6 2.4 1.2 3H6l3 4.5H7.5L12 21l4.5-4.5H15L18 12h-3.6c.6-.6 1.2-1.8 1.2-3 0-3-2.4-6-3.6-6z" />
  </svg>
);

const IconHistorical = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
  </svg>
);

const IconLandmarks = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const IconMap = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
);

const featured = [
  {
    title: "Neighborhoods & Areas",
    description:
      "From Downtown's cobblestone streets to the laid-back vibes of Folly Beach — explore Charleston's diverse neighborhoods.",
    href: "/neighborhoods",
    accentColor: "bg-coastal-200",
    icon: <IconNeighborhoods />,
  },
  {
    title: "Parks & Outdoor",
    description:
      "Discover lush parks, waterfront trails, and outdoor recreation across the Lowcountry.",
    href: "/parks-outdoor",
    accentColor: "bg-coastal-seafoam-200",
    icon: <IconParks />,
  },
  {
    title: "Historical & Cultural",
    description:
      "Step back in time at Charleston's world-renowned historical landmarks and cultural institutions.",
    href: "/historical-cultural",
    accentColor: "bg-coastal-sand-light",
    icon: <IconHistorical />,
  },
  {
    title: "Landmarks",
    description:
      "Iconic landmarks from Rainbow Row to the Angel Oak Tree that define Charleston's timeless charm.",
    href: "/landmarks",
    accentColor: "bg-coastal-200",
    icon: <IconLandmarks />,
  },
  {
    title: "Interactive Map",
    description:
      "Explore an interactive map of Charleston with markers for parks, landmarks, and historical sites.",
    href: "/maps",
    accentColor: "bg-coastal-seafoam-200",
    icon: <IconMap />,
  },
];

const highlights = [
  {
    title: "Sweetgrass Basket Making",
    description:
      "A Gullah tradition passed down through generations, sweetgrass baskets are a living art form you can watch being woven at the City Market.",
    accentColor: "bg-coastal-sand-light",
    tag: "Culture",
  },
  {
    title: "Lowcountry Cuisine",
    description:
      "From shrimp and grits to she-crab soup, Charleston's culinary scene blends African, Caribbean, and Southern flavors into something unforgettable.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Food",
  },
  {
    title: "Horse-Drawn Carriage Tours",
    description:
      "One of the best ways to experience Charleston's historic district is from the seat of a horse-drawn carriage rolling along centuries-old streets.",
    accentColor: "bg-coastal-200",
    tag: "Experience",
  },
];

const facts = [
  { label: "Year Founded", value: "1670" },
  { label: "Neighborhoods", value: "25+" },
  { label: "Historic Sites", value: "1,400+" },
  { label: "Miles of Coast", value: "90+" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero with Video Background ─── */}
      <div className="wave-divider relative h-[60vh] min-h-[420px] max-h-[720px] overflow-hidden sm:h-[65vh] lg:h-[70vh]">
        {/* ── Video / Fallback layer ── */}
        <HeroVideo
          src="/media/lowcountryparks-hero.mp4"
          poster="/media/lowcountryparks-hero-poster.jpg"
        />

        {/* ── Gradient fallback (behind video, always visible as base) ── */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-coastal-900 via-coastal-700 to-coastal-500"
          aria-hidden="true"
        />

        {/* ── Dark overlay for text readability ── */}
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-t from-black/60 via-black/35 to-black/20"
          aria-hidden="true"
        />

        {/* ── Text content ── */}
        <div className="relative z-[2] flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-white/70">
                Your Lowcountry Guide
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                Discover Charleston
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 drop-shadow sm:text-lg sm:leading-relaxed">
                The Holy City&apos;s best neighborhoods, parks, historical sites,
                and iconic landmarks — all in one place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/neighborhoods"
                  variant="primary"
                  size="lg"
                  className="!bg-white !text-coastal-800 shadow-lg hover:!bg-slate-100"
                >
                  Explore Neighborhoods
                </Button>
                <Button
                  href="/maps"
                  variant="outline"
                  size="lg"
                  className="!border-white/50 !text-white shadow-lg backdrop-blur-sm hover:!bg-white/15"
                >
                  View Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Quick facts (overlapping the hero) ─── */}
      <div className="-mt-10 relative z-10 mb-8">
        <QuickFacts facts={facts} />
      </div>

      {/* ─── Featured sections ─── */}
      <Section
        title="Explore Charleston"
        subtitle="Everything you need to discover the charm of the Lowcountry"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => (
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

      {/* ─── Highlights ─── */}
      <Section
        title="Charleston Highlights"
        subtitle="A taste of what makes the Lowcountry special"
        className="bg-slate-50"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
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

      {/* ─── CTA Banner ─── */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="Ready to Explore?"
            description="Start with our interactive map to get an overview of everything Charleston has to offer — parks, landmarks, and historical sites all in one view."
            buttonLabel="Open Interactive Map"
            buttonHref="/maps"
            variant="seafoam"
          />
        </div>
      </div>
    </>
  );
}
