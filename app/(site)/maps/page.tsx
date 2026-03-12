import type { Metadata } from "next";
import { parks } from "@/data/parks";
import MapsLayout from "@/components/MapsLayout";

export const metadata: Metadata = {
  title: "Interactive Park Map",
  description:
    "Explore 17 curated Charleston parks on an interactive map with satellite imagery, marker clustering, and detailed park information.",
};

export default function MapsPage() {
  return <MapsLayout parks={parks} />;
}
