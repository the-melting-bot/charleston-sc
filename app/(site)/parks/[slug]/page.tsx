import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import Image from "next/image";

/* ─── Dynamically import the Leaflet mini-map (client-only) ─── */
const ParkMiniMap = dynamic(() => import("@/components/ParkMiniMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center bg-slate-100 text-sm text-slate-400">
      Loading map…
    </div>
  ),
});

/* ─── Park type (matches data/parks.json) ─── */
interface Park {
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
}

interface ParksData {
  parks: Park[];
}

/* ─── Helper: load parks data ─── */
function getParksData(): Park[] {
  const filePath = path.join(process.cwd(), "data", "parks.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  const data: ParksData = JSON.parse(raw);
  return data.parks;
}

/* ─── Helper: find park by slug ─── */
function getParkBySlug(slug: string): Park | undefined {
  return getParksData().find((p) => p.slug === slug);
}

/* ─── Helper: check if a park-specific image exists ─── */
function getParkImage(slug: string): { src: string; exists: boolean } {
  const imgPath = path.join(process.cwd(), "public", "parks", `${slug}.jpg`);
  if (fs.existsSync(imgPath)) {
    return { src: `/parks/${slug}.jpg`, exists: true };
  }
  // Fallback placeholder
  return { src: "/parks/placeholder.jpg", exists: false };
}

/* ─── Helper: human-readable area ─── */
function formatArea(sqFt: number | null): string | null {
  if (!sqFt) return null;
  if (sqFt >= 43560) {
    const acres = (sqFt / 43560).toFixed(1);
    return `${acres} acres`;
  }
  return `${sqFt.toLocaleString()} sq ft`;
}

/* ─── Generate static params for all parks ─── */
export async function generateStaticParams() {
  const parks = getParksData();
  return parks.map((p) => ({ slug: p.slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const park = getParkBySlug(params.slug);
  if (!park) {
    return { title: "Park Not Found | Lowcountry Parks" };
  }
  return {
    title: `${park.name} | Lowcountry Parks`,
    description:
      park.description ??
      `Explore ${park.name} in ${park.neighborhood ?? "Charleston"} — hours, location, amenities, and more.`,
  };
}

/* ─── Page Component ─── */
export default function ParkDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const park = getParkBySlug(params.slug);
  if (!park) notFound();

  const image = getParkImage(park.slug);
  const area = formatArea(park.areaSqFt);

  return (
    <>
      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-slate-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/parks-outdoor"
              className="transition-colors hover:text-coastal-700 focus-visible:outline-none focus-visible:text-coastal-700 focus-visible:underline"
            >
              Parks &amp; Outdoor
            </Link>
            <svg
              className="h-3.5 w-3.5 flex-shrink-0 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <span className="font-medium text-slate-900" aria-current="page">{park.name}</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Image ─── */}
      <div className="relative h-56 w-full bg-slate-200 sm:h-72 md:h-80 lg:h-96">
        <Image
          src={image.src}
          alt={`${park.name} in ${park.neighborhood ?? "Charleston"}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        {/* Park name overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end gap-3">
              {park.neighborhood && (
                <span className="mb-1 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
                  {park.neighborhood}
                </span>
              )}
            </div>
            <h1 className="mt-2 text-2xl font-bold text-white drop-shadow-lg sm:text-3xl lg:text-4xl">
              {park.name}
            </h1>
            {/* TODO: Replace placeholder image caption with real photo credit */}
            {!image.exists && (
              <p className="mt-1 text-xs text-white/60">
                Photo placeholder — replace with a real image of {park.name}
              </p>
            )}
            {image.exists && (
              <p className="mt-1 text-xs text-white/60">
                {/* TODO: Add real photo credit/caption here */}
                {park.name}, {park.neighborhood ?? "Charleston, SC"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* ── Main column ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
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

              {/* Amenities */}
              {park.amenities.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">
                    Amenities
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {park.amenities.map((a) => (
                      <span
                        key={a}
                        className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700"
                      >
                        <svg
                          className="h-3.5 w-3.5 text-teal-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          aria-hidden="true"
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
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-coastal-700 transition-colors hover:text-coastal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2 focus-visible:rounded"
                  aria-label={`Get directions to ${park.name} (opens in new tab)`}
                >
                  Get Directions
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>

              {/* TODO: Add photo gallery section here once real images are available */}
              {/* Example:
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Photos</h2>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {parkPhotos.map((photo) => (
                      <Image key={photo.id} src={photo.src} alt={photo.alt} ... />
                    ))}
                  </div>
                </div>
              */}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">
              {/* Quick Info Card */}
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
                            park.status === "ACTIVE"
                              ? "bg-emerald-500"
                              : "bg-slate-400"
                          }`}
                        />
                        {park.status === "ACTIVE" ? "Open" : park.status}
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

              {/* Actions */}
              <div className="space-y-3">
                {park.url && (
                  <a
                    href={park.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-coastal-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-coastal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2"
                    aria-label={`${park.name} official website (opens in new tab)`}
                  >
                    Official Website
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
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
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-coastal-700 px-5 py-2.5 text-sm font-medium text-coastal-700 transition-colors hover:bg-coastal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2"
                >
                  View on Full Map
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
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
                  className="flex w-full items-center justify-center gap-2 rounded-xl text-sm font-medium text-slate-500 transition-colors hover:text-coastal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
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
