"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Next.js
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MarkerData {
  position: [number, number];
  title: string;
  category: "landmark" | "park" | "historical";
}

const markers: MarkerData[] = [
  {
    position: [32.778, -79.9258],
    title: "Waterfront Park",
    category: "park",
  },
  {
    position: [32.7524, -79.8747],
    title: "Fort Sumter",
    category: "historical",
  },
  {
    position: [32.7741, -79.9314],
    title: "Rainbow Row",
    category: "landmark",
  },
  {
    position: [32.7172, -80.0815],
    title: "Angel Oak Tree",
    category: "landmark",
  },
  {
    position: [32.7799, -79.9271],
    title: "Pineapple Fountain",
    category: "landmark",
  },
  {
    position: [32.7876, -79.9403],
    title: "Hampton Park",
    category: "park",
  },
];

const categoryColors: Record<MarkerData["category"], string> = {
  landmark: "#0369a1",
  park: "#5eead4",
  historical: "#d4a574",
};

export default function Map() {
  const [visibleCategories, setVisibleCategories] = useState<
    Record<string, boolean>
  >({
    landmark: true,
    park: true,
    historical: true,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center rounded-xl bg-slate-100 lg:h-[600px]">
        <p className="text-slate-500">Loading map...</p>
      </div>
    );
  }

  const toggleCategory = (cat: string) => {
    setVisibleCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const filtered = markers.filter((m) => visibleCategories[m.category]);

  return (
    <div className="space-y-4">
      {/* Layer toggle */}
      <div className="flex flex-wrap gap-3">
        {(["landmark", "park", "historical"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              visibleCategories[cat]
                ? "text-white"
                : "bg-slate-200 text-slate-600"
            }`}
            style={
              visibleCategories[cat]
                ? { backgroundColor: categoryColors[cat] }
                : undefined
            }
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}s
          </button>
        ))}
      </div>

      <div className="h-[500px] w-full overflow-hidden rounded-xl shadow-lg lg:h-[600px]">
        <MapContainer
          center={[32.7765, -79.9311]}
          zoom={12}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Street">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Topo">
              <TileLayer
                attribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
          </LayersControl>

          {filtered.map((m, i) => (
            <Marker key={i} position={m.position} icon={defaultIcon}>
              <Popup>
                <strong>{m.title}</strong>
                <br />
                <span className="text-xs capitalize text-slate-500">
                  {m.category}
                </span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
