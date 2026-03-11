import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Historical & Cultural Sites | Charleston SC Explorer",
  description:
    "Discover Charleston's rich history and vibrant culture — from Fort Sumter to the Dock Street Theatre.",
};

const sites = [
  {
    title: "Fort Sumter",
    description:
      "The site where the first shots of the Civil War were fired in 1861. Accessible by ferry, this national monument offers guided tours and harbor views.",
    color: "bg-coastal-sand-light",
  },
  {
    title: "Old Slave Mart Museum",
    description:
      "Located on Chalmers Street, this museum occupies the last known slave auction building in South Carolina and tells the story of Charleston's role in the slave trade.",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Boone Hall Plantation",
    description:
      "One of America's oldest working plantations, famous for its stunning Avenue of Oaks and Gullah culture presentations.",
    color: "bg-coastal-seafoam-light",
  },
  {
    title: "The Charleston Museum",
    description:
      "Founded in 1773, America's first museum features exhibits on Lowcountry history, natural history, and decorative arts spanning centuries.",
    color: "bg-coastal-sand-light",
  },
  {
    title: "Gibbes Museum of Art",
    description:
      "A premier art museum featuring an outstanding collection of American art with a focus on works connected to Charleston and the South.",
    color: "bg-coastal-blue-light",
  },
  {
    title: "Dock Street Theatre",
    description:
      "One of America's first theaters, this beautifully restored venue on Church Street hosts performances year-round in a stunning historic setting.",
    color: "bg-coastal-seafoam-light",
  },
];

export default function HistoricalCulturalPage() {
  return (
    <Section
      title="Historical & Cultural Sites"
      subtitle="Step back in time through Charleston's storied past"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((s) => (
          <Card
            key={s.title}
            title={s.title}
            description={s.description}
            color={s.color}
          />
        ))}
      </div>
    </Section>
  );
}
