interface PageHeroProps {
  title: string;
  description: string;
  accent?: "blue" | "seafoam" | "sand";
}

const accents = {
  blue: "from-coastal-900 via-coastal-700 to-coastal-500",
  seafoam: "from-teal-900 via-teal-700 to-teal-500",
  sand: "from-amber-900 via-amber-700 to-amber-500",
};

const dots = {
  blue: "text-coastal-400/20",
  seafoam: "text-teal-400/20",
  sand: "text-amber-400/20",
};

export default function PageHero({
  title,
  description,
  accent = "blue",
}: PageHeroProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${accents[accent]} px-4 py-16 sm:py-20 lg:py-24`}
    >
      {/* Decorative dots */}
      <div className={`pointer-events-none absolute inset-0 ${dots[accent]}`} aria-hidden="true">
        <svg className="absolute -right-24 -top-24 h-96 w-96 opacity-30" viewBox="0 0 200 200" fill="currentColor">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#hero-dots)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg sm:leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
