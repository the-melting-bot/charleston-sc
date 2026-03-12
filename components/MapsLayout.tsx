"use client";

import { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import type { Park } from "@/data/parks";
import {
  DesktopSidebar,
  MobileBottomSheet,
  type MobileBottomSheetHandle,
} from "./MapSidebar";

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

export default function MapsLayout({ parks }: { parks: Park[] }) {
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);
  const [mobileSearch, setMobileSearch] = useState("");
  const bottomSheetRef = useRef<MobileBottomSheetHandle>(null);

  // Filtered parks for mobile search — filters both list AND map markers
  const mobileQuery = mobileSearch.toLowerCase().trim();
  const mobileFiltered = useMemo(() => {
    if (!mobileQuery) return parks;
    return parks.filter(
      (p) =>
        p.name.toLowerCase().includes(mobileQuery) ||
        p.area.toLowerCase().includes(mobileQuery) ||
        p.amenities.some((a) => a.toLowerCase().includes(mobileQuery))
    );
  }, [parks, mobileQuery]);

  const handleParkSelect = (park: Park) => {
    setSelectedPark(park);
    // On mobile, expand bottom sheet to half
    bottomSheetRef.current?.expandToHalf();
  };

  return (
    <div className="flex h-[calc(100dvh-56px)] w-full overflow-hidden">
      {/* Desktop sidebar */}
      <DesktopSidebar
        parks={parks}
        selectedPark={selectedPark}
        onParkSelect={setSelectedPark}
      />

      {/* Map + mobile bottom sheet */}
      <div className="relative flex-1">
        <MapClient
          parks={mobileFiltered}
          selectedPark={selectedPark}
          onParkSelect={handleParkSelect}
        />
        <MobileBottomSheet
          ref={bottomSheetRef}
          parks={parks}
          filteredParks={mobileFiltered}
          selectedPark={selectedPark}
          onParkSelect={(park) => {
            setSelectedPark(park);
          }}
          search={mobileSearch}
          setSearch={setMobileSearch}
        />
      </div>
    </div>
  );
}
