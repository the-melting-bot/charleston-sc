import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Section from "@/components/Section";
import ImageCard from "@/components/ImageCard";
import Button from "@/components/Button";
import QuickFacts from "@/components/QuickFacts";
import FadeIn from "@/components/FadeIn";
import FeaturedParks from "@/components/FeaturedParks";
import SeasonalPicks from "@/components/SeasonalPicks";
import WhyCards from "@/components/WhyCards";
import HeroVideo from "@/components/HeroVideo";
import BlogPostCard from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blog-posts";

const MiniMapPreview = dynamic(() => import("@/components/MiniMapPreview"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex h-[340px] items-center justify-center rounded-2xl bg-slate-100 lg:h-[400px]">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-coastal-200 border-t-coastal-600" />
          <p className="mt-3 text-sm text-slate-500">Loading map...</p>
        </div>
      </div>
    </div>
  ),
});

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
    image: "/images/features/browse-parks.jpg",
  },
  {
    title: "View the Map",
    description:
      "See every park on an interactive map. Zoom in, tap a marker, and get the address, amenities, and hours at a glance.",
    href: "/maps",
    accentColor: "bg-coastal-200",
    icon: <IconMap />,
    image: "/images/features/view-map.jpg",
  },
  {
    title: "Explore by Area",
    description:
      "Find parks near you by browsing Charleston's six main areas — Peninsula, West Ashley, James Island, Johns Island, Daniel Island, and Cainhoy.",
    href: "/neighborhoods",
    accentColor: "bg-coastal-sand-light",
    icon: <IconParks />,
    image: "/images/features/explore-area.jpg",
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
      <FadeIn>
        <Section
          title="What You Can Do"
          subtitle="Three ways to find the right park for your day"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => (
              <FadeIn key={item.title} delay={index * 100}>
                <ImageCard
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  accentColor={item.accentColor}
                  icon={item.icon}
                  imageSrc={item.image}
                  imageAlt={`${item.title} — ${item.description.slice(0, 60)}`}
                />
              </FadeIn>
            ))}
          </div>
        </Section>
      </FadeIn>

      {/* ─── Featured Parks ─── */}
      <FadeIn>
        <FeaturedParks />
      </FadeIn>

      {/* ─── Seasonal Picks ─── */}
      <FadeIn>
        <SeasonalPicks />
      </FadeIn>

      {/* ─── Why Lowcountry Parks ─── */}
      <FadeIn>
        <WhyCards />
      </FadeIn>

      {/* ─── Mini Map Preview ─── */}
      <FadeIn>
        <MiniMapPreview />
      </FadeIn>

      {/* ─── Latest from the Blog ─── */}
      <FadeIn>
        <Section
          title="Latest from the Blog"
          subtitle="Tips and guides for exploring Charleston's outdoor spaces"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post, index) => (
              <FadeIn key={post.slug} delay={index * 100}>
                <BlogPostCard post={post} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/blog" variant="outline">
              View All Guides
            </Button>
          </div>
        </Section>
      </FadeIn>

      {/* ─── CTA: Get Started ─── */}
      <FadeIn>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background image */}
              <Image
                src="/images/cta-background.jpg"
                alt="Scenic Charleston Lowcountry landscape"
                fill
                className="object-cover"
                sizes="100vw"
              />
              {/* Dark overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"
                aria-hidden="true"
              />
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center sm:px-12 sm:py-24">
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  Ready to Get Outside?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Start with the interactive map to see every park in the
                  Charleston area, or browse the full list by neighborhood.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button
                    href="/parks-outdoor"
                    variant="primary"
                    size="lg"
                    className="!bg-white !text-coastal-800 shadow-lg hover:!bg-slate-100"
                  >
                    Browse All Parks
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
      </FadeIn>
    </>
  );
}
