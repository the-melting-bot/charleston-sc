"use client";

import { useState } from "react";
import type { Park } from "@/data/parks";

/* ─── Shared park list ─── */
function ParkList({
  parks,
  filtered,
  selectedPark,
  onParkSelect,
  search,
  setSearch,
  query,
}: {
  parks: Park[];
  filtered: Park[];
  selectedPark: Park | null;
  onParkSelect: (park: Park) => void;
  search: string;
  setSearch: (s: string) => void;
  query: string;
}) {
  return (
    <>
      {/* Header */}
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-bold text-slate-900">Charleston Parks</h2>
        <p className="text-xs text-slate-500">
          {parks.length} parks to explore
        </p>
      </div>

      {/* Search */}
      <div className="border-b border-slate-100 px-4 py-3">
        <div className="relative">
          <svg
            className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, area, or amenity..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-coastal-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-coastal-100"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {query && (
          <p className="mt-1.5 text-[11px] text-slate-400">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Park list */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="px-4 py-8 text-center">
            <p className="text-sm text-slate-400">No parks found</p>
            <p className="mt-1 text-xs text-slate-300">
              Try a different search term
            </p>
          </div>
        ) : (
          filtered.map((park) => {
            const isActive = selectedPark?.slug === park.slug;
            const hasImage = park.images && park.images.length > 0;
            return (
              <button
                key={park.slug}
                onClick={() => onParkSelect(park)}
                className={`flex w-full items-start gap-3 border-b border-slate-100 px-4 py-3 text-left transition-colors hover:bg-coastal-50/50 ${
                  isActive
                    ? "border-l-[3px] border-l-coastal-700 bg-coastal-50/70"
                    : "border-l-[3px] border-l-transparent"
                }`}
              >
                {/* Thumbnail or gradient placeholder */}
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                  {hasImage ? (
                    <img
                      src={`/images/parks/${park.slug}/1.jpg`}
                      alt=""
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-coastal-200 to-teal-200">
                      <span className="text-lg font-bold text-coastal-600/40">
                        {park.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-sm font-semibold leading-tight ${
                      isActive ? "text-coastal-700" : "text-slate-800"
                    }`}
                  >
                    {park.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    {park.area}
                  </p>
                  {park.amenities.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {park.amenities.slice(0, 2).map((a) => (
                        <span
                          key={a}
                          className="inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500"
                        >
                          {a}
                        </span>
                      ))}
                      {park.amenities.length > 2 && (
                        <span className="inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-400">
                          +{park.amenities.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </button>
            );
          })
        )}
      </div>

      {/* Attribution */}
      <div className="border-t border-slate-200 px-4 py-2">
        <p className="text-[10px] leading-relaxed text-slate-400">
          Data from{" "}
          <a
            href="https://data-charleston-sc.opendata.arcgis.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coastal-600 hover:underline"
          >
            City of Charleston Open Data
          </a>
        </p>
      </div>
    </>
  );
}

/* ─── Desktop Sidebar ─── */
export function DesktopSidebar({
  parks,
  selectedPark,
  onParkSelect,
}: {
  parks: Park[];
  selectedPark: Park | null;
  onParkSelect: (park: Park) => void;
}) {
  const [search, setSearch] = useState("");
  const query = search.toLowerCase().trim();
  const filtered = query
    ? parks.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.area.toLowerCase().includes(query) ||
          p.amenities.some((a) => a.toLowerCase().includes(query))
      )
    : parks;

  return (
    <div className="hidden lg:flex lg:w-80 lg:flex-shrink-0 lg:flex-col lg:border-r lg:border-slate-200 lg:bg-white">
      <ParkList
        parks={parks}
        filtered={filtered}
        selectedPark={selectedPark}
        onParkSelect={onParkSelect}
        search={search}
        setSearch={setSearch}
        query={query}
      />
    </div>
  );
}

/* ─── Mobile Bottom Sheet ─── */
export function MobileBottomSheet({
  parks,
  selectedPark,
  onParkSelect,
}: {
  parks: Park[];
  selectedPark: Park | null;
  onParkSelect: (park: Park) => void;
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const query = search.toLowerCase().trim();
  const filtered = query
    ? parks.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.area.toLowerCase().includes(query) ||
          p.amenities.some((a) => a.toLowerCase().includes(query))
      )
    : parks;

  return (
    <div className="lg:hidden">
      {/* Collapsed bar */}
      {!open && (
        <div className="absolute bottom-0 left-0 right-0 z-[1000]">
          <button
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-center gap-2 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]"
          >
            <div className="h-1 w-8 rounded-full bg-slate-300" />
            <span className="ml-2 text-sm font-semibold text-slate-700">
              {parks.length} Parks
            </span>
          </button>
        </div>
      )}

      {/* Expanded sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-[1000] flex max-h-[40vh] flex-col rounded-t-2xl border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag handle / close */}
        <button
          onClick={() => setOpen(false)}
          className="flex w-full flex-shrink-0 items-center justify-center py-2"
        >
          <div className="h-1 w-10 rounded-full bg-slate-300" />
        </button>
        <ParkList
          parks={parks}
          filtered={filtered}
          selectedPark={selectedPark}
          onParkSelect={(park) => {
            onParkSelect(park);
            setOpen(false);
          }}
          search={search}
          setSearch={setSearch}
          query={query}
        />
      </div>
    </div>
  );
}
