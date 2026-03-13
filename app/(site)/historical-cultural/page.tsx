import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import InfoBanner from "@/components/InfoBanner";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Charleston History | Lowcountry Parks",
  description:
    "Explore 350 years of Charleston history — from the colonial founding of Charles Towne to the modern renaissance of one of America's most beloved cities.",
  alternates: { canonical: "/historical-cultural" },
  openGraph: {
    title: "Charleston History | Lowcountry Parks",
    description:
      "Explore 350 years of Charleston history — from the colonial founding of Charles Towne to the modern renaissance of one of America's most beloved cities.",
    url: "https://www.lowcountryparks.com/historical-cultural",
    images: [{ url: "/images/history/history-hero.jpg", alt: "Historic Charleston cobblestone street" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charleston History | Lowcountry Parks",
    description:
      "Explore 350 years of Charleston history — from colonial Charles Towne to the modern Holy City.",
    images: ["/images/history/history-hero.jpg"],
  },
};

const sections = [
  {
    id: "colonial",
    era: "1670s",
    title: "Colonial Era",
    image: "/images/history/colonial-era.jpg",
    content: [
      "In 1670, English colonists from Barbados established Charles Towne at Albemarle Point on the west bank of the Ashley River, making it one of the earliest permanent European settlements in the Carolinas. Within a decade, the settlement relocated to Oyster Point — the present-day Charleston peninsula — where the confluence of the Ashley and Cooper rivers provided a natural deep-water harbor.",
      "By the early 1700s, Charles Towne had become one of the wealthiest cities in British North America. The cultivation of rice and indigo, made possible by the knowledge and labor of enslaved Africans, fueled an economic boom that transformed the Lowcountry. Planters built grand town houses on the peninsula and sprawling plantations along the rivers.",
      "The city's prosperity attracted artisans, merchants, and immigrants from across Europe and the Caribbean, creating a cosmopolitan port culture unlike anywhere else in colonial America. Churches, markets, and civic buildings rose along the growing street grid, many of which still stand today.",
    ],
  },
  {
    id: "revolution",
    era: "1776–1783",
    title: "Revolutionary War",
    image: "/images/history/revolutionary-war.jpg",
    content: [
      "Charleston played a pivotal role in the American Revolution from its earliest days. On June 28, 1776, Colonel William Moultrie and his troops defended a palmetto-log fort on Sullivan's Island against a British naval assault, dealing the Royal Navy one of its most significant early defeats. The victory became a symbol of American resilience, and the palmetto tree was adopted as South Carolina's state emblem.",
      "However, the British returned in force in 1780 and laid siege to Charleston for six weeks before the city fell — the largest American surrender of the entire war. British occupation lasted until December 1782, when the redcoats finally evacuated. Key Charleston figures like Christopher Gadsden, who designed the iconic 'Don't Tread on Me' flag, and Charles Pinckney, a signer of the Constitution, shaped the new nation's founding ideals.",
    ],
  },
  {
    id: "civil-war",
    era: "1861–1865",
    title: "Civil War & Fort Sumter",
    image: "/images/history/civil-war.jpg",
    content: [
      "At 4:30 a.m. on April 12, 1861, Confederate batteries opened fire on the federal garrison at Fort Sumter in Charleston Harbor, igniting the bloodiest conflict in American history. After 34 hours of bombardment, Major Robert Anderson surrendered the fort. Charleston — the cradle of secession — had fired the first shots of the Civil War.",
      "For the next four years, Charleston endured relentless bombardment from Union forces. The city became a Confederate stronghold, its harbor blockaded by the U.S. Navy while innovative submarine warfare (the H.L. Hunley) and ironclad battles played out in its waters. Much of the lower city was reduced to ruins by shelling and a devastating fire in 1861.",
      "On February 18, 1865, Union troops finally entered a largely abandoned Charleston. The war left the city physically and economically devastated, but its spirit endured. The long road to reconstruction and reconciliation would shape Charleston's identity for generations to come.",
    ],
  },
  {
    id: "gullah",
    era: "Heritage",
    title: "Gullah Geechee Heritage",
    image: "/images/history/gullah-geechee.jpg",
    content: [
      "The Gullah Geechee people — descendants of West and Central Africans who were enslaved on the rice plantations of the Lowcountry — have shaped Charleston's culture in profound and enduring ways. Their Creole language, blending English with African linguistic roots, can still be heard in communities from Georgetown to Jacksonville along the designated Gullah Geechee Cultural Heritage Corridor.",
      "Gullah contributions to Charleston's identity are everywhere: in the city's celebrated cuisine (Hoppin' John, she-crab soup, red rice, and perlou), in the intricate sweetgrass baskets woven and sold at the City Market and along Highway 17, and in the musical and spiritual traditions that echo through churches and community gatherings across the Lowcountry.",
      "The 2023 opening of the International African American Museum on Gadsden's Wharf — one of the nation's primary ports of entry for enslaved Africans — marked a milestone in honoring this heritage. The museum stands as a testament to the resilience, creativity, and enduring influence of African American culture on Charleston and the nation.",
    ],
  },
  {
    id: "architecture",
    era: "Preservation",
    title: "Architecture & Preservation",
    image: "/images/history/architecture.jpg",
    content: [
      "Charleston is one of the most architecturally significant cities in the United States, with building traditions spanning nearly four centuries. In 1931, the city established the nation's first historic district and Board of Architectural Review, pioneering a preservation movement that would become a model for cities across the country.",
      "The Charleston single house — a narrow building oriented sideways to the street with tiers of piazzas (porches) catching prevailing breezes — is the city's signature architectural form. Double houses, grand Georgian mansions, Federal-style townhouses, and Italianate villas line the streets of South of Broad, Harleston Village, and Ansonborough, creating a living museum of American architectural history.",
      "This commitment to preservation extends beyond individual buildings to entire streetscapes, gardens, and ironwork. The result is a city where the past is not simply preserved but actively lived in — where 18th-century churches share blocks with award-winning restaurants, and antebellum mansions house modern families.",
    ],
  },
  {
    id: "modern",
    era: "1989–Present",
    title: "Modern Charleston",
    image: "/images/history/modern-charleston.jpg",
    content: [
      "Modern Charleston is a story of resilience and reinvention. Hurricane Hugo struck as a Category 4 storm in September 1989, causing catastrophic damage across the Lowcountry. The city's rebuilding effort strengthened its commitment to preservation and community, emerging stronger and more united.",
      "In June 2015, Charleston faced another defining moment when nine members of Mother Emanuel AME Church were killed in an act of racial violence. The city's response — marked by unity, forgiveness, and a renewed commitment to confronting its complex racial history — drew worldwide attention and admiration.",
      "Today, Charleston thrives as one of America's most celebrated destinations. Its culinary scene, anchored by chefs like Sean Brock and Rodney Scott, has earned international acclaim. The arts flourish through Spoleto Festival USA, gallery walks, and a vibrant creative community. And with the opening of the International African American Museum in 2023, Charleston continues to reckon with and honor its full history while building a more inclusive future.",
    ],
  },
];

export default function HistoricalCulturalPage() {
  return (
    <>
      <PageHero
        title="Charleston Through the Centuries"
        description="From a colonial trading port to one of America's most beloved cities — explore 350 years of history, culture, and resilience in the Holy City."
        accent="sand"
        backgroundImage="/images/history/history-hero.jpg"
        backgroundAlt="Historic Charleston cobblestone street at dusk with gas lamps and antebellum mansions"
      />

      {sections.map((section, i) => (
        <section
          key={section.id}
          className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${
            i % 2 === 1 ? "bg-slate-50" : ""
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image — on odd sections, order changes on desktop */}
                <div
                  className={i % 2 === 1 ? "lg:order-2" : ""}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={section.image}
                      alt={`${section.title} — Charleston history`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block rounded-full bg-coastal-sand-50 px-3 py-1 text-xs font-semibold text-amber-800">
                    {section.era}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-base leading-relaxed text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="rounded-2xl border border-coastal-sand-light bg-coastal-sand-50 px-6 py-10 text-center sm:px-10 sm:py-14">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Visit These Landmarks
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
                Many of the historic sites mentioned above can still be visited
                today. Explore our landmarks guide to plan your own journey
                through Charleston&apos;s history.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button href="/landmarks" variant="primary" size="lg">
                  Explore Landmarks
                </Button>
                <Button href="/maps" variant="outline" size="lg">
                  View on Map
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
