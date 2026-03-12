import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

/* ─── Leaf icon for seasonal accent ─── */
const IconLeaf = () => (
  <svg
    className="inline-block h-5 w-5 text-coastal-seafoam-600"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 3c-1.5 2-3 5-3 9 0 3 1.5 5.5 3 7 1.5-1.5 3-4 3-7 0-4-1.5-7-3-9z"
      fill="currentColor"
      opacity="0.2"
    />
    <path
      d="M12 3c-1.5 2-3 5-3 9 0 3 1.5 5.5 3 7 1.5-1.5 3-4 3-7 0-4-1.5-7-3-9z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 10v9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 14l-2-2M12 16l2-2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const seasonalParks = [
  {
    name: "Hampton Park",
    slug: "hampton-park",
    tagline: "Blooming gardens and shaded trails",
    image: "/images/parks/hampton-park.jpg",
  },
  {
    name: "Waterfront Park",
    slug: "joe-riley-waterfront-park",
    tagline: "Breezy waterfront strolls and fountain views",
    image: "/images/parks/joe-riley-waterfront-park.jpg",
  },
  {
    name: "White Point Garden",
    slug: "white-point-garden",
    tagline: "Canopy shade and harbor panoramas",
    image: "/images/parks/white-point-garden.jpg",
  },
];

export default function SeasonalPicks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            <IconLeaf />
            Spring Favorites
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Parks that shine this time of year
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seasonalParks.map((park, index) => (
            <FadeIn key={park.slug} delay={index * 100}>
              <Link href={`/parks/${park.slug}`} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={park.image}
                      alt={`${park.name} in spring, Charleston SC`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay at bottom for text readability */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {park.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-500">
                      {park.tagline}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-coastal-700 transition-colors group-hover:text-coastal-500">
                      Visit
                      <svg
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
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
