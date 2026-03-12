import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import InfoBanner from "@/components/InfoBanner";
import { parks } from "@/data/parks";

export const metadata: Metadata = {
  title: "Explore by Area | Lowcountry Parks",
  description:
    "Discover Charleston's parks and green spaces organized by area — from the historic Peninsula to the beaches of Folly and the Lowcountry wilderness beyond.",
};

const areas = [
  {
    name: "Peninsula",
    slug: "Peninsula",
    image: "/images/areas/peninsula.jpg",
    description:
      "The historic heart of Charleston — cobblestone streets, rainbow-hued row houses, and centuries of history from the Battery to Hampton Park.",
  },
  {
    name: "West Ashley",
    slug: "West Ashley",
    image: "/images/areas/west-ashley.jpg",
    description:
      "Charleston's first suburb, home to historic plantations along the Ashley River and peaceful neighborhood parks.",
  },
  {
    name: "James Island",
    slug: "James Island",
    image: "/images/areas/james-island.jpg",
    description:
      "A laid-back island community between downtown and the beach, featuring the county's flagship park.",
  },
  {
    name: "Johns Island",
    slug: "Johns Island",
    image: "/images/areas/johns-island.jpg",
    description:
      "Rural Lowcountry charm with ancient live oaks, farm-to-table culture, and untouched natural beauty.",
  },
  {
    name: "Daniel Island",
    slug: "Daniel Island",
    image: "/images/areas/daniel-island.jpg",
    description:
      "A master-planned community with manicured parks, waterfront trails, and family-friendly gathering spaces.",
  },
  {
    name: "Cainhoy / Wando",
    slug: "Cainhoy / Wando",
    image: "/images/areas/cainhoy-wando.jpg",
    description:
      "Charleston's expanding frontier — vast natural landscapes, new developments, and pristine Lowcountry wilderness.",
  },
];

function getParkCount(areaName: string): number {
  return parks.filter((p) => p.area === areaName).length;
}

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        title="Explore by Area"
        description="Charleston's parks and green spaces span a diverse landscape — from the historic downtown peninsula to barrier islands and rural Lowcountry. Discover what each area has to offer."
        accent="blue"
        backgroundImage="/images/areas/areas-hero.jpg"
        backgroundAlt="Aerial view of the Charleston peninsula at twilight with church steeples, lit streets, and harbor"
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Charleston&apos;s Neighborhoods
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
              Each area has its own personality, landscape, and collection of
              parks waiting to be explored.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {areas.map((area, i) => {
              const count = getParkCount(area.slug);
              const hasParks = count > 0;

              return (
                <FadeIn key={area.slug} delay={i * 100}>
                  <Link
                    href={
                      hasParks
                        ? `/parks-outdoor?area=${encodeURIComponent(area.slug)}`
                        : "/maps"
                    }
                    className="group relative block overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={area.image}
                        alt={`${area.name} area of Charleston`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white">
                            {area.name}
                          </h3>
                          {hasParks ? (
                            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                              {count} {count === 1 ? "park" : "parks"}
                            </span>
                          ) : (
                            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                              Coming Soon
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-white/80">
                          {area.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white transition-colors group-hover:text-coastal-200">
                          {hasParks ? "View Parks" : "Explore Area"} →
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <InfoBanner
              title="Explore the Interactive Map"
              description="See all parks across every Charleston neighborhood on our full interactive map with filters, layers, and directions."
              buttonLabel="Open Map"
              buttonHref="/maps"
              variant="sand"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
