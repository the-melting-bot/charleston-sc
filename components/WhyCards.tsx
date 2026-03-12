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
  },
  {
    tag: "Practical",
    title: "Made for Busy Schedules",
    description:
      "Need a playground for Saturday morning? A dog-friendly trail after work? Filter by amenities and find the right park in seconds.",
    icon: <IconClock />,
    gradient: "from-coastal-seafoam-50 to-white",
    border: "border-t-coastal-seafoam",
  },
  {
    tag: "For Everyone",
    title: "Locals and Visitors Welcome",
    description:
      "Whether you've lived here for years or you're visiting for the weekend, Lowcountry Parks helps you discover green spaces you might have missed.",
    icon: <IconPeople />,
    gradient: "from-coastal-sand-50 to-white",
    border: "border-t-coastal-sand",
  },
];

export default function WhyCards() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
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
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-t-[5px] bg-gradient-to-b ${card.gradient} ${card.border} border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60`}
              >
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Icon */}
                  <div className="mb-5 transition-transform duration-300 group-hover:scale-110">
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
