import type { Metadata } from "next";
import dynamic from "next/dynamic";
import parksData from "@/public/data/parks.json";

export const metadata: Metadata = {
  title: "Interactive Park Map",
  description:
    "View 124+ parks and recreation facilities on an interactive map of the Charleston, SC area. Tap a marker for address, amenities, and hours.",
};

// Dynamic import to avoid SSR issues with Leaflet (needs `window`)
const MapClient = dynamic(() => import("@/components/MapClient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-slate-100">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-coastal-200 border-t-coastal-600" />
        <p className="mt-3 text-sm text-slate-500">Loading map...</p>
      </div>
    </div>
  ),
});

// Derive stats from the data file at build time
const totalParks = parksData.parks.length;
const neighborhoods = Array.from(
  new Set(parksData.parks.map((p: { neighborhood: string | null }) => p.neighborhood).filter(Boolean))
);
const parkTypes = parksData.parks.filter((p: { type: string }) => p.type === "park").length;
const recFacilities = parksData.parks.filter((p: { type: string }) => p.type === "recreation").length;

export default function MapsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-gradient-to-br from-coastal-900 via-coastal-700 to-coastal-500 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Interactive Park Map
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              {totalParks} parks and recreation facilities across {neighborhoods.length} Charleston
              neighborhoods. Tap any marker for details.
            </p>
          </div>
        </div>
      </div>

      {/* Map container */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
          <div className="h-[60vh] w-full sm:h-[65vh] lg:h-[70vh]">
            <MapClient />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-coastal-700">{parkTypes}</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
              Parks
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-coastal-700">{recFacilities}</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
              Rec Facilities
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-2xl font-bold text-coastal-700">{neighborhoods.length}</p>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-slate-400">
              Neighborhoods
            </p>
          </div>
        </div>

        {/* Data source attribution */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <div>
              <p className="text-xs leading-relaxed text-slate-500">
                Park data sourced from the{" "}
                <a
                  href="https://data-charleston-sc.opendata.arcgis.com/items/109c6c5688f040908a11a7dee3a04b29"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-coastal-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:rounded"
                  aria-label="City of Charleston Open Data Parks dataset (opens in new tab)"
                >
                  City of Charleston Open Data &ndash; Parks
                </a>{" "}
                dataset, published under the City of Charleston Open Data Policy for
                public use. Marker positions are computed from polygon centroids.
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
