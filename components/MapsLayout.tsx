"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { Park } from "@/data/parks";
import { DesktopSidebar, MobileBottomSheet } from "./MapSidebar";

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

  return (
    <div className="flex h-[calc(100vh-56px)] w-full">
      {/* Desktop sidebar */}
      <DesktopSidebar
        parks={parks}
        selectedPark={selectedPark}
        onParkSelect={setSelectedPark}
      />

      {/* Map + mobile bottom sheet */}
      <div className="relative flex-1">
        <MapClient
          parks={parks}
          selectedPark={selectedPark}
          onParkSelect={setSelectedPark}
        />
        <MobileBottomSheet
          parks={parks}
          selectedPark={selectedPark}
          onParkSelect={setSelectedPark}
        />
      </div>
    </div>
  );
}
