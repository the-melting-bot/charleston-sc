import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Interactive Map | Charleston SC Explorer",
  description:
    "Explore an interactive map of Charleston with markers for parks, landmarks, and historical sites.",
};

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] w-full items-center justify-center rounded-xl bg-slate-100 lg:h-[600px]">
      <p className="text-slate-500">Loading map...</p>
    </div>
  ),
});

export default function MapsPage() {
  return (
    <Section
      title="Interactive Map"
      subtitle="Explore Charleston's top destinations — toggle categories to filter markers"
    >
      <Map />
    </Section>
  );
}
