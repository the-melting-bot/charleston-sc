import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import InfoBanner from "@/components/InfoBanner";
import { landmarks } from "@/data/landmarks";

export const metadata: Metadata = {
  title: "Charleston Landmarks | Lowcountry Parks",
  description:
    "Explore Charleston's most iconic landmarks — from Fort Sumter and Rainbow Row to the Angel Oak Tree and historic plantations along the Ashley River.",
};

const categoryColors: Record<string, string> = {
  Historic: "bg-amber-100 text-amber-800",
  Natural: "bg-emerald-100 text-emerald-800",
  Architecture: "bg-violet-100 text-violet-800",
  Cultural: "bg-coastal-100 text-coastal-800",
  Engineering: "bg-slate-100 text-slate-800",
};

export default function LandmarksPage() {
  return (
    <>
      <PageHero
        title="Charleston Landmarks"
        description="From Civil War forts and colonial plantations to modernist bridges and ancient live oaks — explore the landmarks that make Charleston one of America's most storied cities."
        accent="blue"
        backgroundImage="/images/landmarks/landmarks-hero.jpg"
        backgroundAlt="Charleston waterfront skyline at sunset with church steeples and the Ravenel Bridge"
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Iconic Landmarks
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
              Discover the historic sites, natural wonders, and architectural
              treasures that define the Charleston experience.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landmarks.map((landmark, i) => (
              <FadeIn key={landmark.id} delay={i * 80}>
                <Link
                  href={`/landmarks/${landmark.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/images/landmarks/${landmark.slug}/1.jpg`}
                      alt={landmark.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[landmark.category]}`}
                    >
                      {landmark.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                      {landmark.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
                      {landmark.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-coastal-700 transition-colors group-hover:text-coastal-500">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <InfoBanner
              title="See Landmarks on the Map"
              description="View all Charleston landmarks on our interactive map with directions, layers, and neighborhood filters."
              buttonLabel="Open Map"
              buttonHref="/maps"
              variant="blue"
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
