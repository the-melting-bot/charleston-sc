"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/* ─── Types ─── */
export interface JsonPark {
  id: number;
  name: string;
  slug: string;
  type: string;
  status: string | null;
  address: string | null;
  neighborhood: string | null;
  description: string;
  hours: string;
  amenities: string[];
  areaSqFt: number | null;
}

/* ─── Constants ─── */
const AREAS = [
  "All",
  "Peninsula",
  "West Ashley",
  "James Island",
  "Johns Island",
  "Daniel Island",
  "Cainhoy",
] as const;

const AMENITY_FILTERS = [
  "Playground",
  "Dog Park",
  "Trails",
  "Fishing",
  "Picnic Area",
  "Restrooms",
  "Basketball",
  "Tennis",
  "Water Access",
] as const;

const CURATED_SLUGS = new Set([
  "waterfront-park",
  "hampton-park",
  "james-island-county-park",
  "palmetto-islands-county-park",
  "white-point-garden",
  "brittlebank-park",
  "wannamaker-county-park",
  "mitchell-playground",
  "cannon-park",
  "colonial-lake",
  "marion-square",
  "hazel-parker-playground",
  "laurel-hill-county-park",
  "folly-beach-county-park",
  "mount-pleasant-waterfront-park",
  "magnolia-plantation",
  "middleton-place",
]);

const AREA_COLORS: Record<string, string> = {
  Peninsula: "bg-coastal-100 text-coastal-700",
  "West Ashley": "bg-teal-100 text-teal-700",
  "James Island": "bg-amber-100 text-amber-700",
  "Johns Island": "bg-emerald-100 text-emerald-700",
  "Daniel Island": "bg-sky-100 text-sky-700",
  Cainhoy: "bg-orange-100 text-orange-700",
};

/* ─── Gradient placeholder for parks without images ─── */
function GradientPlaceholder({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-coastal-200 to-teal-200">
      <span className="text-3xl font-bold text-coastal-600/40">
        {name.charAt(0)}
      </span>
    </div>
  );
}

/* ─── Park Card ─── */
function ParkCard({ park }: { park: JsonPark }) {
  const isCurated = CURATED_SLUGS.has(park.slug);
  const href = isCurated ? `/parks/${park.slug}` : `/maps?park=${park.slug}`;
  const areaColor = AREA_COLORS[park.neighborhood || ""] || "bg-slate-100 text-slate-600";

  return (
    <Link href={href} className="block">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50">
        {/* Image / Gradient placeholder */}
        <div className="relative h-40 w-full overflow-hidden bg-slate-100">
          {isCurated ? (
            <img
              src={`/images/parks/${park.slug}/1.jpg`}
              alt={park.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <GradientPlaceholder name={park.name} />
          )}
          {/* Area badge */}
          {park.neighborhood && (
            <span
              className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm ${areaColor}`}
            >
              {park.neighborhood}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-sm font-bold text-slate-900 sm:text-base">
            {park.name}
          </h3>

          {/* Amenity pills */}
          {park.amenities.length > 0 && (
            <div className="mt-1.5 flex flex-wrap gap-1">
              {park.amenities.slice(0, 3).map((a) => (
                <span
                  key={a}
                  className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500"
                >
                  {a}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-500">
            {park.description}
          </p>

          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-coastal-700 transition-colors group-hover:text-coastal-500">
            {isCurated ? "View Details" : "View on Map"}
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
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
  );
}

/* ─── Main ParksExplorer ─── */
export default function ParksExplorer({ parks }: { parks: JsonPark[] }) {
  const searchParams = useSearchParams();
  const [selectedArea, setSelectedArea] = useState<string>("All");
  const [selectedAmenities, setSelectedAmenities] = useState<Set<string>>(
    new Set()
  );

  // Read ?area= query param on mount
  useEffect(() => {
    const areaParam = searchParams.get("area");
    if (areaParam) {
      // Match case-insensitively
      const match = AREAS.find(
        (a) => a.toLowerCase() === areaParam.toLowerCase()
      );
      if (match && match !== "All") {
        setSelectedArea(match);
      }
    }
  }, [searchParams]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => {
      const next = new Set(prev);
      if (next.has(amenity)) {
        next.delete(amenity);
      } else {
        next.add(amenity);
      }
      return next;
    });
  };

  // Filter parks
  const filtered = useMemo(() => {
    return parks.filter((p) => {
      if (selectedArea !== "All" && p.neighborhood !== selectedArea) return false;
      if (selectedAmenities.size > 0) {
        const parkAmenities = p.amenities.map((a) => a.toLowerCase());
        for (const amenity of Array.from(selectedAmenities)) {
          if (!parkAmenities.some((pa) => pa.includes(amenity.toLowerCase()))) {
            return false;
          }
        }
      }
      return true;
    });
  }, [parks, selectedArea, selectedAmenities]);

  // Group by area
  const grouped = useMemo(() => {
    const groups: Record<string, JsonPark[]> = {};
    for (const park of filtered) {
      const area = park.neighborhood || "Other";
      if (!groups[area]) groups[area] = [];
      groups[area].push(park);
    }
    // Sort areas in the canonical order
    const order = AREAS.slice(1); // skip "All"
    return Object.entries(groups).sort(([a], [b]) => {
      const ai = order.indexOf(a as (typeof order)[number]);
      const bi = order.indexOf(b as (typeof order)[number]);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    });
  }, [filtered]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      {/* Filter bar */}
      <div className="mb-8 space-y-4">
        {/* Area pills */}
        <div className="flex flex-wrap gap-2">
          {AREAS.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${
                selectedArea === area
                  ? "bg-coastal-700 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Amenity pills */}
        <div className="flex flex-wrap gap-2">
          {AMENITY_FILTERS.map((amenity) => (
            <button
              key={amenity}
              onClick={() => toggleAmenity(amenity)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                selectedAmenities.has(amenity)
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-50 text-slate-500 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {amenity}
            </button>
          ))}
        </div>

        {/* Match count */}
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-700">{filtered.length}</span>{" "}
          park{filtered.length !== 1 ? "s" : ""}
          {selectedArea !== "All" && (
            <> in <span className="font-semibold text-slate-700">{selectedArea}</span></>
          )}
        </p>
      </div>

      {/* Grouped park cards */}
      {grouped.map(([area, areaParks]) => (
        <section key={area} className="mb-12">
          <div className="mb-5 flex items-baseline gap-3">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {area}
            </h2>
            <span className="text-sm text-slate-400">
              {areaParks.length} park{areaParks.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areaParks.map((park) => (
              <ParkCard key={park.id} park={park} />
            ))}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg font-medium text-slate-400">No parks match your filters</p>
          <button
            onClick={() => {
              setSelectedArea("All");
              setSelectedAmenities(new Set());
            }}
            className="mt-3 text-sm font-medium text-coastal-700 hover:text-coastal-500"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
