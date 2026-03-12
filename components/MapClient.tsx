"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import type { Park } from "@/data/parks";

import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "./map-overrides.css";

/* ─── Constants ─── */
const CHARLESTON_CENTER: [number, number] = [32.7765, -79.9311];

const TILE_LAYERS = {
  street: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    label: "Street",
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution:
      "Tiles &copy; Esri",
    label: "Satellite",
  },
};

/* ─── Custom coastal-600 SVG marker icon ─── */
const parkIcon = L.divIcon({
  className: "",
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" fill="none">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 22 14 22s14-11.5 14-22C28 6.268 21.732 0 14 0z" fill="#0284c7"/>
    <circle cx="14" cy="12" r="5.5" fill="white" opacity="0.95"/>
  </svg>`,
  iconSize: [28, 36],
  iconAnchor: [14, 36],
  popupAnchor: [0, -36],
});

/* ─── FlyTo helper component ─── */
function FlyToHandler({
  selectedPark,
  markersRef,
}: {
  selectedPark: Park | null;
  markersRef: React.RefObject<Map<string, L.Marker>>;
}) {
  const map = useMap();

  useEffect(() => {
    if (!selectedPark) return;
    map.flyTo([selectedPark.latitude, selectedPark.longitude], 16, {
      duration: 1.2,
    });
    // Open the popup for this park after fly-to completes
    const timer = setTimeout(() => {
      const marker = markersRef.current?.get(selectedPark.slug);
      if (marker) {
        marker.openPopup();
      }
    }, 1300);
    return () => clearTimeout(timer);
  }, [selectedPark, map, markersRef]);

  return null;
}

/* ─── Layer Control Component ─── */
function LayerControl({
  activeLayer,
  onLayerChange,
}: {
  activeLayer: "street" | "satellite";
  onLayerChange: (layer: "street" | "satellite") => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute right-3 top-3 z-[1000]">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-lg border-2 border-white/80 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-lg transition-all hover:bg-slate-50"
        title="Toggle map layer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        Layers
      </button>
      {open && (
        <div className="mt-1.5 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
          <button
            onClick={() => {
              onLayerChange("street");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium transition-colors ${
              activeLayer === "street"
                ? "bg-coastal-50 text-coastal-700"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full border-2 ${
                activeLayer === "street"
                  ? "border-coastal-700 bg-coastal-700"
                  : "border-slate-300"
              }`}
            />
            Street Map
          </button>
          <button
            onClick={() => {
              onLayerChange("satellite");
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium transition-colors ${
              activeLayer === "satellite"
                ? "bg-coastal-50 text-coastal-700"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <span
              className={`h-3 w-3 rounded-full border-2 ${
                activeLayer === "satellite"
                  ? "border-coastal-700 bg-coastal-700"
                  : "border-slate-300"
              }`}
            />
            Satellite
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Main MapClient ─── */
export default function MapClient({
  parks,
  selectedPark,
  onParkSelect,
}: {
  parks: Park[];
  selectedPark: Park | null;
  onParkSelect?: (park: Park) => void;
}) {
  const [activeLayer, setActiveLayer] = useState<"street" | "satellite">(
    "street"
  );
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  const setMarkerRef = useCallback(
    (slug: string) => (ref: L.Marker | null) => {
      if (ref) {
        markersRef.current.set(slug, ref);
      }
    },
    []
  );

  const tileConfig = TILE_LAYERS[activeLayer];
  const hasImages = (park: Park) => park.images && park.images.length > 0;

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={CHARLESTON_CENTER}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          key={activeLayer}
          attribution={tileConfig.attribution}
          url={tileConfig.url}
        />

        <MarkerClusterGroup
          chunkedLoading
          maxClusterRadius={50}
        >
          {parks.map((park) => (
            <Marker
              key={park.slug}
              position={[park.latitude, park.longitude]}
              icon={parkIcon}
              ref={setMarkerRef(park.slug)}
              eventHandlers={{
                click: () => onParkSelect?.(park),
              }}
            >
              <Popup maxWidth={280} minWidth={240}>
                <div className="w-[260px]">
                  {/* Park image or gradient placeholder */}
                  <div className="relative h-32 w-full overflow-hidden">
                    {hasImages(park) ? (
                      <img
                        src={`/images/parks/${park.slug}/1.jpg`}
                        alt={park.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-coastal-200 to-teal-200">
                        <span className="text-4xl font-bold text-coastal-600/30">
                          {park.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-coastal-700 backdrop-blur-sm">
                      {park.area}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="space-y-2 p-3">
                    <h3 className="text-sm font-bold leading-tight text-slate-900">
                      {park.name}
                    </h3>
                    {/* Amenity tags */}
                    {park.amenities.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {park.amenities.slice(0, 3).map((a) => (
                          <span
                            key={a}
                            className="inline-block rounded-full bg-coastal-50 px-2 py-0.5 text-[10px] font-medium text-coastal-700"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* Detail link */}
                    <a
                      href={
                        hasImages(park)
                          ? `/parks/${park.slug}`
                          : `/maps?park=${park.slug}`
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-coastal-700 hover:text-coastal-800 hover:underline"
                    >
                      View Details
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        <FlyToHandler selectedPark={selectedPark} markersRef={markersRef as React.RefObject<Map<string, L.Marker>>} />
      </MapContainer>

      {/* Layer control overlay */}
      <LayerControl activeLayer={activeLayer} onLayerChange={setActiveLayer} />
    </div>
  );
}
