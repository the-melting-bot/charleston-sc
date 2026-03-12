import type { Metadata } from "next";
import Section from "@/components/Section";
import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import InfoBanner from "@/components/InfoBanner";

export const metadata: Metadata = {
  title: "History & Culture | Lowcountry Parks",
  description:
    "Discover Charleston's historical parks, cultural landmarks, and heritage sites — from Fort Sumter to the International African American Museum.",
};

const sites = [
  {
    title: "Fort Sumter National Monument",
    description:
      "The site where the first shots of the Civil War were fired in 1861. Accessible by ferry from Liberty Square, with guided tours and sweeping harbor views.",
    accentColor: "bg-coastal-sand-light",
    tag: "Civil War",
  },
  {
    title: "Old Slave Mart Museum",
    description:
      "Located on Chalmers Street, this museum occupies the last known slave auction building in South Carolina and tells the story of Charleston's role in the domestic slave trade.",
    accentColor: "bg-coastal-200",
    tag: "African American Heritage",
  },
  {
    title: "Boone Hall Plantation",
    description:
      "One of America's oldest working plantations, famous for its stunning Avenue of Oaks, Gullah culture presentations, and the original slave cabins.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Plantation",
  },
  {
    title: "The Charleston Museum",
    description:
      "Founded in 1773, America's first museum features exhibits on Lowcountry history, natural history, and decorative arts spanning centuries.",
    accentColor: "bg-coastal-sand-light",
    tag: "Museum",
  },
  {
    title: "Gibbes Museum of Art",
    description:
      "A premier art museum featuring an outstanding collection of American art with a focus on works connected to Charleston and the South.",
    accentColor: "bg-coastal-200",
    tag: "Art",
  },
  {
    title: "Dock Street Theatre",
    description:
      "One of America's first theaters, this beautifully restored venue on Church Street hosts performances year-round in a stunning Georgian setting.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Performing Arts",
  },
];

const gullahCulture = [
  {
    title: "Gullah Heritage Trail Tours",
    description:
      "Guided tours through the Lowcountry that illuminate the history, traditions, and ongoing influence of the Gullah Geechee people.",
    accentColor: "bg-coastal-sand-light",
    tag: "Gullah Geechee",
  },
  {
    title: "McLeod Plantation",
    description:
      "A rare historic site that centers the stories of the enslaved — with preserved slave quarters, a gin house, and interpretive programs focused on the transition from slavery to freedom.",
    accentColor: "bg-coastal-200",
    tag: "Heritage Site",
  },
  {
    title: "International African American Museum",
    description:
      "Opened in 2023 on the site of a former wharf where enslaved Africans arrived, this world-class museum tells the story of the African American journey.",
    accentColor: "bg-coastal-seafoam-200",
    tag: "Museum",
  },
];

export default function HistoricalCulturalPage() {
  return (
    <>
      <PageHero
        title="Historical & Cultural Sites"
        description="Charleston's history stretches back more than 350 years. From the first shots of the Civil War to the vibrant Gullah Geechee culture that still thrives here, every block tells a story."
        accent="sand"
      />

      <Section
        title="Must-See Sites"
        subtitle="The historical landmarks and museums that define Charleston's story"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((s) => (
            <Card
              key={s.title}
              title={s.title}
              description={s.description}
              accentColor={s.accentColor}
              tag={s.tag}
            />
          ))}
        </div>
      </Section>

      <Section
        title="Gullah Geechee Culture"
        subtitle="The living heritage of the Lowcountry's African American communities"
        className="bg-slate-50"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gullahCulture.map((g) => (
            <Card
              key={g.title}
              title={g.title}
              description={g.description}
              accentColor={g.accentColor}
              tag={g.tag}
            />
          ))}
        </div>
      </Section>

      <Section title="Charleston Timeline" subtitle="Key moments in the Holy City's history">
        <div className="relative border-l-2 border-coastal-200 pl-8 space-y-10">
          {[
            { year: "1670", event: "English colonists establish Charles Towne, the first permanent European settlement in South Carolina." },
            { year: "1718", event: "The pirate Blackbeard blockades Charleston Harbor for nearly a week, holding the city hostage." },
            { year: "1861", event: "Confederate forces fire on Fort Sumter, beginning the American Civil War." },
            { year: "1886", event: "A 7.3-magnitude earthquake devastates the city, reshaping its architecture and building codes." },
            { year: "1989", event: "Hurricane Hugo makes landfall as a Category 4 storm, causing widespread destruction across the Lowcountry." },
            { year: "2023", event: "The International African American Museum opens on Gadsden's Wharf, a site of profound historical significance." },
          ].map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[2.6rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-coastal-300 bg-white">
                <div className="h-2 w-2 rounded-full bg-coastal-500" />
              </div>
              <p className="text-sm font-bold text-coastal-700">{item.year}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.event}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InfoBanner
            title="Plan Your History Tour"
            description="Use our interactive map to plot a route through Charleston's most significant historical sites."
            buttonLabel="Open Interactive Map"
            buttonHref="/maps"
            variant="sand"
          />
        </div>
      </div>
    </>
  );
}
