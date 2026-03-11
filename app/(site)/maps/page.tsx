"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const charlestonPosition: [number, number] = [32.7765, -79.9311];

export default function MapsPage() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">
        Charleston Maps
      </h1>
      <p className="mb-4 text-sm md:text-base">
        A simple map centered on Charleston, SC with a sample marker.
      </p>
      <div className="h-[60vh] w-full rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={charlestonPosition}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={charlestonPosition}>
            <Popup>Charleston, SC</Popup>
          </Marker>
        </MapContainer>
      </div>
    </main>
  );
}
