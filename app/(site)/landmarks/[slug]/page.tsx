import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import FadeIn from "@/components/FadeIn";
import {
  landmarks,
  getLandmarkBySlug,
  getAllLandmarkSlugs,
} from "@/data/landmarks";

const ParkMiniMap = dynamic(() => import("@/components/ParkMiniMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-400">
      Loading map…
    </div>
  ),
});

const categoryColors: Record<string, string> = {
  Historic: "bg-amber-100 text-amber-800",
  Natural: "bg-emerald-100 text-emerald-800",
  Architecture: "bg-violet-100 text-violet-800",
  Cultural: "bg-coastal-100 text-coastal-800",
  Engineering: "bg-slate-100 text-slate-800",
};

export async function generateStaticParams() {
  return getAllLandmarkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const landmark = getLandmarkBySlug(params.slug);
  if (!landmark) {
    return { title: "Landmark Not Found | Lowcountry Parks" };
  }
  return {
    title: `${landmark.name} | Lowcountry Parks`,
    description: landmark.description.slice(0, 160),
  };
}

export default function LandmarkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const landmark = getLandmarkBySlug(params.slug);
  if (!landmark) notFound();

  const related = landmarks
    .filter((l) => l.id !== landmark.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      {/* ─── Hero ─── */}
      <div className="relative h-64 w-full bg-slate-200 sm:h-80 md:h-96 lg:h-[28rem]">
        <Image
          src={`/images/landmarks/${landmark.slug}/1.jpg`}
          alt={landmark.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/landmarks"
              className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              All Landmarks
            </Link>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
              {landmark.name}
            </h1>
            <div className="mt-2 flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[landmark.category]}`}
              >
                {landmark.category}
              </span>
              <span className="text-sm text-white/80">{landmark.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Content Grid ─── */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Main Column ── */}
            <div className="space-y-10 lg:col-span-2">
              <FadeIn>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    About
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {landmark.description}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Location
                  </h2>
                  <div className="mt-4 h-64 overflow-hidden rounded-2xl border border-slate-200 sm:h-72 md:h-80">
                    <ParkMiniMap
                      latitude={landmark.latitude}
                      longitude={landmark.longitude}
                      name={landmark.name}
                    />
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    {landmark.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${landmark.latitude},${landmark.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-coastal-700 transition-colors hover:text-coastal-500"
                  >
                    Get Directions
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              <FadeIn delay={200}>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-slate-900">
                    Landmark Details
                  </h3>
                  <dl className="mt-4 space-y-3">
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Category
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {landmark.category}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Address
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {landmark.address}
                      </dd>
                    </div>
                  </dl>
                </div>
              </FadeIn>

              <div className="space-y-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${landmark.latitude},${landmark.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-coastal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-coastal-800"
                >
                  Get Directions
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>

                <Link
                  href="/maps"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-coastal-700 px-5 py-2.5 text-sm font-medium text-coastal-700 transition-colors hover:bg-coastal-50"
                >
                  View on Full Map
                </Link>

                <Link
                  href="/landmarks"
                  className="flex w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:text-coastal-700"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  Back to All Landmarks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Related Landmarks ─── */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Explore More Landmarks
            </h2>
            <p className="mt-2 text-base text-slate-500">
              Continue discovering Charleston&apos;s iconic sites.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <FadeIn key={r.id} delay={i * 100}>
                <Link
                  href={`/landmarks/${r.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/images/landmarks/${r.slug}/1.jpg`}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[r.category]}`}
                    >
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      {r.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center text-sm font-medium text-coastal-700 group-hover:text-coastal-500">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
