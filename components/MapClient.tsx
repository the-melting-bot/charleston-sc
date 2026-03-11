"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ─── Marker icon fix for Next.js bundler ─── */
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

/* ─── Types ─── */
interface Park {
  id: number;
  name: string;
  slug: string;
  type: string;
  status: string | null;
  address: string | null;
  neighborhood: string | null;
  hours: string | null;
  url: string | null;
  latitude: number;
  longitude: number;
  amenities: string[];
}

interface ParksData {
  _meta: {
    source: string;
    totalFeatures: number;
  };
  parks: Park[];
}

/* ─── Constants ─── */
const CHARLESTON_CENTER: [number, number] = [32.7765, -79.9311];

export default function MapClient() {
  const [parks, setParks] = useState<Park[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/parks.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<ParksData>;
      })
      .then((data) => {
        setParks(data.parks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load parks data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <MapContainer
      center={CHARLESTON_CENTER}
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Status overlay */}
      {loading && (
        <div className="absolute left-3 top-3 z-[1000] rounded-lg bg-white/90 px-3 py-2 text-xs text-slate-500 shadow-sm backdrop-blur">
          Loading parks...
        </div>
      )}

      {error && (
        <div className="absolute left-3 top-3 z-[1000] rounded-lg bg-red-50 px-3 py-2 text-xs text-red-600 shadow-sm">
          Error loading data: {error}
        </div>
      )}

      {/* Park markers from data/parks.json */}
      {parks.map((park) => (
        <Marker
          key={park.id}
          position={[park.latitude, park.longitude]}
          icon={defaultIcon}
        >
          <Popup maxWidth={260} minWidth={200}>
            <div className="space-y-1.5">
              <h3 className="text-sm font-bold leading-tight text-slate-900">
                {park.name}
              </h3>

              {park.neighborhood && (
                <p className="text-xs text-slate-500">
                  <span className="font-medium">{park.neighborhood}</span>
                  {park.address && <span> &middot; {park.address}</span>}
                </p>
              )}

              {park.hours && (
                <p className="text-xs text-slate-400">
                  {park.hours}
                </p>
              )}

              {park.amenities.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {park.amenities.map((a) => (
                    <span
                      key={a}
                      className="inline-block rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-medium text-teal-700"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              )}

              {park.url && (
                <a
                  href={park.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-0.5 text-xs font-medium text-blue-600 hover:underline"
                >
                  More info &rarr;
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
