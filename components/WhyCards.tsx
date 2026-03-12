import Image from "next/image";
import FadeIn from "./FadeIn";

/* ─── SVG Icons ─── */
const IconShield = () => (
  <svg
    className="h-10 w-10"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
  >
    <rect width="48" height="48" rx="14" className="fill-coastal-100" />
    <path
      d="M24 12l10 4.5v7.5c0 6.5-4.3 11.2-10 13-5.7-1.8-10-6.5-10-13v-7.5L24 12z"
      className="stroke-coastal-700"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M20 25l3 3 5-6"
      className="stroke-coastal-500"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClock = () => (
  <svg
    className="h-10 w-10"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
  >
    <rect
      width="48"
      height="48"
      rx="14"
      className="fill-coastal-seafoam-100"
    />
    <circle
      cx="24"
      cy="24"
      r="10"
      className="stroke-coastal-seafoam-600"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M24 19v5.5l3.5 2"
      className="stroke-coastal-seafoam-600"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 16l2-2M15 16l-2-2"
      className="stroke-coastal-seafoam-600"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconPeople = () => (
  <svg
    className="h-10 w-10"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
  >
    <rect width="48" height="48" rx="14" className="fill-coastal-sand-100" />
    <circle
      cx="24"
      cy="19"
      r="4"
      className="stroke-coastal-sand"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M17 33c0-3.9 3.1-7 7-7s7 3.1 7 7"
      className="stroke-coastal-sand"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <circle
      cx="34"
      cy="21"
      r="3"
      className="stroke-coastal-sand"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M35 28c2.5 0.8 4 2.8 4 5"
      className="stroke-coastal-sand"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
    <circle
      cx="14"
      cy="21"
      r="3"
      className="stroke-coastal-sand"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M13 28c-2.5 0.8-4 2.8-4 5"
      className="stroke-coastal-sand"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

/* ─── Card Data ─── */
const whyCards = [
  {
    tag: "Reliable",
    title: "Real Data, Not Guesswork",
    description:
      "Every park listing comes from the City of Charleston Open Data portal — the same source the city uses to manage its parks system.",
    icon: <IconShield />,
    gradient: "from-coastal-50 to-white",
    border: "border-t-coastal-500",
    image: "/images/why/reliable.jpg",
    imageAlt: "Aerial view of Charleston parks and waterfront",
  },
  {
    tag: "Practical",
    title: "Made for Busy Schedules",
    description:
      "Need a playground for Saturday morning? A dog-friendly trail after work? Filter by amenities and find the right park in seconds.",
    icon: <IconClock />,
    gradient: "from-coastal-seafoam-50 to-white",
    border: "border-t-coastal-seafoam",
    image: "/images/why/practical.jpg",
    imageAlt: "Family walking along a sunny park trail",
  },
  {
    tag: "For Everyone",
    title: "Locals and Visitors Welcome",
    description:
      "Whether you've lived here for years or you're visiting for the weekend, Lowcountry Parks helps you discover green spaces you might have missed.",
    icon: <IconPeople />,
    gradient: "from-coastal-sand-50 to-white",
    border: "border-t-coastal-sand",
    image: "/images/why/everyone.jpg",
    imageAlt: "Friends enjoying a sunny day together in a park",
  },
];

/* ─── Decorative wave SVG (subtle background pattern) ─── */
const WavePattern = () => (
  <svg
    className="absolute inset-0 h-full w-full opacity-[0.03]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
      d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      className="fill-coastal-700"
    />
    <path
      d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      className="fill-coastal-500"
    />
  </svg>
);

export default function WhyCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-coastal-50/30 to-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      {/* Subtle wave background */}
      <WavePattern />

      <div className="relative mx-auto max-w-7xl">
        {/* Centered header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why Lowcountry Parks
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-500 sm:text-lg">
            Built to help you spend less time searching and more time outside
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 120}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-t-[5px] bg-gradient-to-b ${card.gradient} ${card.border} border-slate-200/80 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-300/40`}
              >
                {/* Card photo */}
                <div className="relative h-[140px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Soft bottom fade so photo blends into the card */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white/80 to-transparent"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Icon */}
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>

                  {/* Tag */}
                  <span className="mb-2 inline-flex w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 ring-1 ring-slate-200/60">
                    {card.tag}
                  </span>

                  {/* Title */}
                  <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
