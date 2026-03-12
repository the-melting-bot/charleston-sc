"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from "react";
import type { Park } from "@/data/parks";

/* ─── Shared image helper ─── */
function getParkImageSrc(park: Park): string {
  const hasCuratedImage = park.images && park.images.length > 0;
  if (hasCuratedImage) return `/images/parks/${park.slug}/1.jpg`;
  return `/images/parks/categories/${park.categoryImage || "green-space"}.jpg`;
}

/* ─── Search input component ─── */
function SearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (s: string) => void;
}) {
  return (
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
  );
}

/* ─── Park card used in both sidebar and bottom sheet ─── */
function ParkCard({
  park,
  isActive,
  onClick,
}: {
  park: Park;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-start gap-3 border-b border-slate-100 px-4 py-3 text-left transition-colors hover:bg-coastal-50/50 ${
        isActive
          ? "border-l-[3px] border-l-coastal-700 bg-coastal-50/70"
          : "border-l-[3px] border-l-transparent"
      }`}
    >
      {/* Thumbnail */}
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={getParkImageSrc(park)}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
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
        <p className="mt-0.5 text-[11px] text-slate-500">{park.area}</p>
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
      {/* Header */}
      <div className="border-b border-slate-200 px-4 py-3">
        <h2 className="text-sm font-bold text-slate-900">Charleston Parks</h2>
        <p className="text-xs text-slate-500">
          {query
            ? `Showing ${filtered.length} of ${parks.length} parks`
            : `${parks.length} parks to explore`}
        </p>
      </div>

      {/* Search */}
      <div className="border-b border-slate-100 px-4 py-3">
        <SearchInput search={search} setSearch={setSearch} />
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
          filtered.map((park) => (
            <ParkCard
              key={park.slug}
              park={park}
              isActive={selectedPark?.slug === park.slug}
              onClick={() => onParkSelect(park)}
            />
          ))
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
    </div>
  );
}

/* ─── Mobile Bottom Sheet (3-state draggable) ─── */
type SheetState = "collapsed" | "half" | "expanded";

export interface MobileBottomSheetHandle {
  expandToHalf: () => void;
}

export const MobileBottomSheet = forwardRef<
  MobileBottomSheetHandle,
  {
    parks: Park[];
    filteredParks: Park[];
    selectedPark: Park | null;
    onParkSelect: (park: Park) => void;
    search: string;
    setSearch: (s: string) => void;
  }
>(function MobileBottomSheet(
  { parks, filteredParks, selectedPark, onParkSelect, search, setSearch },
  ref
) {
  const [sheetState, setSheetState] = useState<SheetState>("collapsed");
  const [dragOffset, setDragOffset] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartY = useRef(0);
  const currentTranslateAtStart = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);

  // Calculate sheet height and snap points
  const getSheetHeight = useCallback(() => {
    if (typeof window === "undefined") return 700;
    return window.innerHeight * 0.85;
  }, []);

  const getSnapPoints = useCallback(() => {
    const h = getSheetHeight();
    return {
      collapsed: h - 120,
      half: h * 0.5,
      expanded: 0,
    };
  }, [getSheetHeight]);

  const getTranslateForState = useCallback(
    (state: SheetState) => {
      return getSnapPoints()[state];
    },
    [getSnapPoints]
  );

  // Expose expandToHalf to parent
  useImperativeHandle(ref, () => ({
    expandToHalf: () => setSheetState("half"),
  }));

  // Scroll selected park into view when sheet is half-open
  useEffect(() => {
    if (sheetState === "half" && selectedPark && listRef.current) {
      const el = listRef.current.querySelector(
        `[data-park-slug="${selectedPark.slug}"]`
      );
      if (el) {
        el.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  }, [sheetState, selectedPark]);

  const currentTranslateY =
    dragOffset !== null ? dragOffset : getTranslateForState(sheetState);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    currentTranslateAtStart.current = getTranslateForState(sheetState);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - touchStartY.current;
    const sheetHeight = getSheetHeight();
    const newTranslate = Math.max(
      0,
      Math.min(sheetHeight - 120, currentTranslateAtStart.current + deltaY)
    );
    setDragOffset(newTranslate);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset === null) return;

    // Snap to nearest state
    const snaps = getSnapPoints();
    const distances = (
      Object.entries(snaps) as [SheetState, number][]
    ).map(([state, y]) => ({
      state,
      distance: Math.abs(dragOffset - y),
    }));
    const nearest = distances.sort((a, b) => a.distance - b.distance)[0];
    setSheetState(nearest.state);
    setDragOffset(null);
  };

  const query = search.toLowerCase().trim();

  return (
    <div className="lg:hidden absolute inset-x-0 bottom-0 z-[1000] pointer-events-none">
      <div
        className="pointer-events-auto rounded-t-2xl bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
        style={{
          height: `85vh`,
          transform: `translateY(${currentTranslateY}px)`,
          transition: isDragging ? "none" : "transform 300ms ease-out",
        }}
      >
        {/* Handle area — drag zone */}
        <div
          className="flex flex-col items-center pt-3 pb-2 cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="h-1 w-10 rounded-full bg-slate-300 mb-2" />
          <p className="text-sm font-semibold text-slate-700">
            {query
              ? `Showing ${filteredParks.length} of ${parks.length}`
              : `${parks.length} Parks`}
          </p>
        </div>

        {/* Search bar — always visible */}
        <div className="px-4 pb-3">
          <SearchInput search={search} setSearch={setSearch} />
        </div>

        {/* Scrollable park list */}
        <div
          ref={listRef}
          className="flex-1 overflow-y-auto"
          style={{
            overscrollBehavior: "contain",
            height: `calc(85vh - 110px)`,
          }}
        >
          {filteredParks.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-slate-400">No parks found</p>
              <p className="mt-1 text-xs text-slate-300">
                Try a different search term
              </p>
            </div>
          ) : (
            filteredParks.map((park) => (
              <div key={park.slug} data-park-slug={park.slug}>
                <ParkCard
                  park={park}
                  isActive={selectedPark?.slug === park.slug}
                  onClick={() => {
                    onParkSelect(park);
                    setSheetState("collapsed");
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
});
