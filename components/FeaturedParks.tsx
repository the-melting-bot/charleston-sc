import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { parks } from "@/data/parks";

/* Pick 6 featured parks from parks.ts by slug */
const featuredSlugs = [
  "waterfront-park",
  "hampton-park",
  "white-point-garden",
  "james-island-county-park",
  "brittlebank-park",
  "palmetto-islands-county-park",
];

const featuredParks = featuredSlugs
  .map((slug) => parks.find((p) => p.slug === slug)!)
  .filter(Boolean);

export default function FeaturedParks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Featured Parks
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            A few favorites from across the Lowcountry
          </p>
        </div>

        {/* Desktop/tablet grid, mobile horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {featuredParks.map((park, index) => (
            <FadeIn
              key={park.slug}
              delay={index * 100}
              className="min-w-[280px] flex-shrink-0 snap-start sm:min-w-0"
            >
              <Link href={`/parks/${park.slug}`} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
                  {/* Image */}
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={`/images/parks/${park.slug}/1.jpg`}
                      alt={`${park.name} in ${park.area}, Charleston`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    {/* Area badge */}
                    <span className="mb-2 inline-flex w-fit rounded-full bg-coastal-50 px-2.5 py-0.5 text-xs font-medium text-coastal-700">
                      {park.area}
                    </span>

                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {park.name}
                    </h3>

                    {/* Amenity tags */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {park.amenities.slice(0, 3).map((amenity) => (
                        <span
                          key={amenity}
                          className="rounded-full bg-coastal-seafoam-50 px-2 py-0.5 text-xs text-coastal-seafoam-600"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
