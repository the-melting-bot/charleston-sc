"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

interface Park {
  name: string;
  latitude: number;
  longitude: number;
  neighborhood: string | null;
}

interface ParksData {
  _meta: { source: string; totalFeatures: number };
  parks: Park[];
}

const CHARLESTON_CENTER: L.LatLngExpression = [32.7865, -79.9411];

export default function MiniMapPreview() {
  const [parks, setParks] = useState<Park[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/data/parks.json")
      .then((res) => res.json() as Promise<ParksData>)
      .then((data) => setParks(data.parks))
      .catch(() => {});
  }, []);

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Text column */}
          <div className="lg:w-[380px] lg:flex-shrink-0">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Every Park, One Map
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
              All 124 Charleston-area parks plotted on a single interactive map.
              Zoom in, tap a marker, and plan your next visit.
            </p>
            <div className="mt-6">
              <Link
                href="/maps"
                className="inline-flex items-center gap-2 rounded-xl bg-coastal-700 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-coastal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2"
              >
                View Full Map
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
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Map column */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:flex-1">
            {!mounted ? (
              <div className="flex h-[340px] items-center justify-center bg-slate-100 lg:h-[400px]">
                <p className="text-sm text-slate-400">Loading map...</p>
              </div>
            ) : (
              <div className="h-[340px] lg:h-[400px]">
                <MapContainer
                  center={CHARLESTON_CENTER}
                  zoom={11}
                  scrollWheelZoom={false}
                  dragging={true}
                  zoomControl={false}
                  attributionControl={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {parks.map((park, i) => (
                    <CircleMarker
                      key={i}
                      center={[park.latitude, park.longitude]}
                      radius={5}
                      pathOptions={{
                        fillColor: "#0ea5e9",
                        fillOpacity: 0.7,
                        color: "#0369a1",
                        weight: 1.5,
                      }}
                    >
                      <Tooltip direction="top" offset={[0, -6]}>
                        <span className="text-xs font-medium">{park.name}</span>
                      </Tooltip>
                    </CircleMarker>
                  ))}
                </MapContainer>
              </div>
            )}

            {/* OSM attribution */}
            <div className="absolute bottom-1 right-2 z-[400] rounded bg-white/80 px-1.5 py-0.5 text-[10px] text-slate-400 backdrop-blur-sm">
              &copy; OpenStreetMap
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
