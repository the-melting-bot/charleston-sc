import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Interactive Map | Charleston SC Explorer",
  description:
    "Explore Charleston with an interactive map — landmarks, parks, and historical sites all in one view.",
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

export default function MapsPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-gradient-to-br from-coastal-900 via-coastal-700 to-coastal-500 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Interactive Map
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Explore Charleston with our interactive map. Toggle categories,
              click markers for details, and plan your route through the
              Lowcountry.
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

        {/* Map legend */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-coastal-700" />
              <span className="text-sm font-medium text-slate-700">
                Landmarks
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Historic sites and points of interest
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-coastal-seafoam" />
              <span className="text-sm font-medium text-slate-700">Parks</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Green spaces and outdoor recreation
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-coastal-sand" />
              <span className="text-sm font-medium text-slate-700">
                Historical
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Museums and cultural heritage sites
            </p>
          </div>
        </div>

        {/* Future features placeholder */}
        <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center sm:p-8">
          <p className="text-sm font-medium text-slate-500">
            More map features coming soon
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Category filters, search, directions, and custom layers are planned
            for future updates.
          </p>
        </div>
      </div>
    </>
  );
}
