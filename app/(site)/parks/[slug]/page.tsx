import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import Image from "next/image";
import {
  parks as detailedParks,
  getParkBySlug as getDetailedPark,
  getAllParkSlugs as getDetailedSlugs,
  type Park as DetailedPark,
} from "@/data/parks";

/* ─── Dynamically import the Leaflet mini-map (client-only) ─── */
const ParkMiniMap = dynamic(() => import("@/components/ParkMiniMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-400">
      Loading map…
    </div>
  ),
});

/* ─── Legacy JSON park type ─── */
interface LegacyPark {
  id: number;
  facilityId: string;
  name: string;
  slug: string;
  type: string;
  status: string | null;
  address: string | null;
  neighborhood: string | null;
  owner: string | null;
  maintainedBy: string | null;
  description: string | null;
  hours: string | null;
  url: string | null;
  latitude: number;
  longitude: number;
  amenities: string[];
  areaSqFt: number | null;
  categoryImage?: string;
}

/* ─── Helpers: load legacy parks from JSON ─── */
function getLegacyParks(): LegacyPark[] {
  const filePath = path.join(process.cwd(), "data", "parks.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw).parks as LegacyPark[];
}

function getLegacyParkBySlug(slug: string): LegacyPark | undefined {
  return getLegacyParks().find((p) => p.slug === slug);
}

/* ─── Helper: human-readable area ─── */
function formatArea(sqFt: number | null): string | null {
  if (!sqFt) return null;
  if (sqFt >= 43560) {
    return `${(sqFt / 43560).toFixed(1)} acres`;
  }
  return `${sqFt.toLocaleString()} sq ft`;
}

/* ─── Generate static params: merge both sources ─── */
export async function generateStaticParams() {
  const detailedSlugsArr = getDetailedSlugs();
  const legacyParks = getLegacyParks();
  const allSlugs = Array.from(
    new Set([...detailedSlugsArr, ...legacyParks.map((p) => p.slug)])
  );
  return allSlugs.map((slug) => ({ slug }));
}

/* ─── Metadata ─── */
const SITE_URL = "https://www.lowcountryparks.com";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const detailed = getDetailedPark(params.slug);
  if (detailed) {
    const heroImage = `/images/parks/${detailed.slug}/1.jpg`;
    return {
      title: `${detailed.name} | Lowcountry Parks`,
      description: detailed.description.slice(0, 160),
      alternates: { canonical: `/parks/${detailed.slug}` },
      openGraph: {
        title: detailed.name,
        description: detailed.description.slice(0, 160),
        url: `${SITE_URL}/parks/${detailed.slug}`,
        images: [{ url: heroImage, alt: detailed.name }],
      },
      twitter: {
        card: "summary_large_image",
        title: detailed.name,
        description: detailed.description.slice(0, 160),
        images: [heroImage],
      },
    };
  }
  const legacy = getLegacyParkBySlug(params.slug);
  if (legacy) {
    const desc =
      legacy.description ??
      `Explore ${legacy.name} in ${legacy.neighborhood ?? "Charleston"}.`;
    return {
      title: `${legacy.name} | Lowcountry Parks`,
      description: desc,
      alternates: { canonical: `/parks/${legacy.slug}` },
      openGraph: {
        title: legacy.name,
        description: desc,
        url: `${SITE_URL}/parks/${legacy.slug}`,
      },
      twitter: {
        card: "summary",
        title: legacy.name,
        description: desc,
      },
    };
  }
  return { title: "Park Not Found | Lowcountry Parks" };
}

/* ─── JSON-LD helpers ─── */
function buildParkJsonLd(park: {
  name: string;
  slug: string;
  description?: string | null;
  address?: string | null;
  latitude: number;
  longitude: number;
  amenities?: string[];
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Park",
    name: park.name,
    url: `${SITE_URL}/parks/${park.slug}`,
    description: park.description || `${park.name} in Charleston, SC`,
    address: {
      "@type": "PostalAddress",
      streetAddress: park.address || undefined,
      addressLocality: "Charleston",
      addressRegion: "SC",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: park.latitude,
      longitude: park.longitude,
    },
    ...(park.image ? { image: `${SITE_URL}${park.image}` } : {}),
    ...(park.amenities && park.amenities.length > 0
      ? { amenityFeature: park.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a, value: true })) }
      : {}),
    isAccessibleForFree: true,
  };
}

/* ─────────────────── Page Component ─────────────────── */
export default function ParkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const detailed = getDetailedPark(params.slug);
  if (detailed) return <DetailedParkView park={detailed} />;

  const legacy = getLegacyParkBySlug(params.slug);
  if (legacy) return <LegacyParkView park={legacy} />;

  notFound();
}

/* ════════════════════════════════════════════════════════
   DETAILED PARK VIEW (17 rich parks from parks.ts)
   ════════════════════════════════════════════════════════ */
function DetailedParkView({ park }: { park: DetailedPark }) {
  const heroImage = `/images/parks/${park.slug}/1.jpg`;
  const parkJsonLd = buildParkJsonLd({
    name: park.name,
    slug: park.slug,
    description: park.description,
    address: park.address,
    latitude: park.latitude,
    longitude: park.longitude,
    amenities: park.amenities,
    image: heroImage,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parkJsonLd) }}
      />
      {/* ─── Hero ─── */}
      <div className="relative h-64 w-full bg-slate-200 sm:h-80 md:h-96 lg:h-[28rem]">
        <Image
          src={heroImage}
          alt={park.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/parks-outdoor"
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
              All Parks
            </Link>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
              {park.name}
            </h1>
            <p className="mt-1 text-sm text-white/80">
              {park.area} · Charleston, SC
            </p>
          </div>
        </div>
      </div>

      {/* ─── Quick Info Bar ─── */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 text-sm text-slate-600 sm:px-6 lg:px-8">
          {park.hours && (
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {park.hours}
            </span>
          )}
          {park.address && (
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {park.address}
            </span>
          )}
        </div>
      </div>

      {/* ─── Content Grid ─── */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Main Column ── */}
            <div className="space-y-10 lg:col-span-2">
              {/* About */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900">About</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {park.description}
                </p>
              </div>

              {/* Amenities */}
              {park.amenities.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Amenities
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {park.amenities.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 rounded-full bg-coastal-seafoam-50 px-3 py-1.5 text-sm font-medium text-coastal-seafoam-700"
                      >
                        <svg
                          className="h-3.5 w-3.5 text-coastal-seafoam-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mini Map */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Location
                </h2>
                <div className="mt-4 h-64 overflow-hidden rounded-2xl border border-slate-200 sm:h-72 md:h-80">
                  <ParkMiniMap
                    latitude={park.latitude}
                    longitude={park.longitude}
                    name={park.name}
                  />
                </div>
                {park.address && (
                  <p className="mt-2 text-sm text-slate-500">{park.address}</p>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${park.latitude},${park.longitude}`}
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
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Details Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Park Details
                </h3>
                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Area
                    </dt>
                    <dd className="mt-0.5 text-sm text-slate-700">
                      {park.area}
                    </dd>
                  </div>
                  {park.hours && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Hours
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {park.hours}
                      </dd>
                    </div>
                  )}
                  {park.address && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Address
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {park.address}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${park.latitude},${park.longitude}`}
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
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                </Link>

                <Link
                  href="/parks-outdoor"
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
                  Back to All Parks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════
   LEGACY PARK VIEW (107 parks from parks.json)
   ════════════════════════════════════════════════════════ */
function LegacyParkView({ park }: { park: LegacyPark }) {
  // Check for image in slug directory first, then flat file, then placeholder
  const slugDir = path.join(
    process.cwd(),
    "public",
    "images",
    "parks",
    park.slug
  );
  const flatFile = path.join(
    process.cwd(),
    "public",
    "images",
    "parks",
    `${park.slug}.jpg`
  );
  const legacyFlat = path.join(
    process.cwd(),
    "public",
    "parks",
    `${park.slug}.jpg`
  );

  let imageSrc = `/images/parks/categories/${park.categoryImage || "green-space"}.jpg`;
  if (fs.existsSync(path.join(slugDir, "1.jpg"))) {
    imageSrc = `/images/parks/${park.slug}/1.jpg`;
  } else if (fs.existsSync(flatFile)) {
    imageSrc = `/images/parks/${park.slug}.jpg`;
  } else if (fs.existsSync(legacyFlat)) {
    imageSrc = `/parks/${park.slug}.jpg`;
  }

  const area = formatArea(park.areaSqFt);
  const legacyJsonLd = buildParkJsonLd({
    name: park.name,
    slug: park.slug,
    description: park.description,
    address: park.address,
    latitude: park.latitude,
    longitude: park.longitude,
    amenities: park.amenities,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legacyJsonLd) }}
      />
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/parks-outdoor"
              className="transition-colors hover:text-coastal-700"
            >
              Parks &amp; Outdoor
            </Link>
            <svg
              className="h-3.5 w-3.5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <span className="font-medium text-slate-900">{park.name}</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero ─── */}
      <div className="relative h-56 w-full bg-slate-200 sm:h-72 md:h-80 lg:h-96">
        <Image
          src={imageSrc}
          alt={`${park.name} in ${park.neighborhood ?? "Charleston"}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {park.neighborhood && (
              <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                {park.neighborhood}
              </span>
            )}
            <h1 className="text-2xl font-bold text-white drop-shadow-lg sm:text-3xl lg:text-4xl">
              {park.name}
            </h1>
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main */}
            <div className="space-y-8 lg:col-span-2">
              {park.description ? (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    About
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">
                    {park.description}
                  </p>
                </div>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    No description is available yet for {park.name}.{" "}
                    {park.url && (
                      <>
                        Visit the{" "}
                        <a
                          href={park.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-coastal-700 hover:underline"
                        >
                          official page
                        </a>{" "}
                        for more information.
                      </>
                    )}
                  </p>
                </div>
              )}

              {park.amenities.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Amenities
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {park.amenities.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 rounded-full bg-coastal-seafoam-50 px-3 py-1.5 text-sm font-medium text-coastal-seafoam-700"
                      >
                        <svg
                          className="h-3.5 w-3.5 text-coastal-seafoam-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Mini Map */}
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Location
                </h2>
                <div className="mt-3 h-64 overflow-hidden rounded-xl border border-slate-200 sm:h-72 md:h-80">
                  <ParkMiniMap
                    latitude={park.latitude}
                    longitude={park.longitude}
                    name={park.name}
                  />
                </div>
                {park.address && (
                  <p className="mt-2 text-sm text-slate-500">
                    {park.address},{" "}
                    {park.neighborhood
                      ? `${park.neighborhood}, Charleston, SC`
                      : "Charleston, SC"}
                  </p>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${park.latitude},${park.longitude}`}
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
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">
                  Park Details
                </h3>
                <dl className="mt-4 space-y-3">
                  {park.type && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Type
                      </dt>
                      <dd className="mt-0.5 text-sm capitalize text-slate-700">
                        {park.type === "recreation"
                          ? "Recreation Center"
                          : "Park"}
                      </dd>
                    </div>
                  )}
                  {park.status && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Status
                      </dt>
                      <dd className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-700">
                        <span
                          className={`inline-block h-2 w-2 rounded-full ${
                            park.status === "active" || park.status === "ACTIVE"
                              ? "bg-emerald-500"
                              : park.status === "coming-soon"
                                ? "bg-amber-400"
                                : "bg-slate-400"
                          }`}
                        />
                        {park.status === "active" || park.status === "ACTIVE"
                          ? "Open"
                          : park.status === "coming-soon"
                            ? "Coming Soon"
                            : park.status}
                      </dd>
                    </div>
                  )}
                  {park.hours && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Hours
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {park.hours}
                      </dd>
                    </div>
                  )}
                  {park.address && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Address
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {park.address}
                      </dd>
                    </div>
                  )}
                  {park.neighborhood && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Neighborhood
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {park.neighborhood}
                      </dd>
                    </div>
                  )}
                  {area && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Size
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">{area}</dd>
                    </div>
                  )}
                  {park.owner && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        Managed by
                      </dt>
                      <dd className="mt-0.5 text-sm text-slate-700">
                        {park.maintainedBy ?? park.owner}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="space-y-3">
                {park.url && (
                  <a
                    href={park.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-coastal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-coastal-800"
                  >
                    Official Website
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
                )}
                <Link
                  href="/maps"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-coastal-700 px-5 py-2.5 text-sm font-medium text-coastal-700 transition-colors hover:bg-coastal-50"
                >
                  View on Full Map
                </Link>
                <Link
                  href="/parks-outdoor"
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
                  Back to All Parks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
