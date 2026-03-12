import Image from "next/image";

interface PageHeroProps {
  title: string;
  description: string;
  accent?: "blue" | "seafoam" | "sand";
  /** Path to a background image (e.g. "/images/landmarks/landmarks-hero.jpg") */
  backgroundImage?: string;
  /** Alt text for the background image */
  backgroundAlt?: string;
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
  backgroundImage,
  backgroundAlt,
}: PageHeroProps) {
  const hasImage = !!backgroundImage;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${accents[accent]} ${
        hasImage ? "min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh]" : ""
      }`}
    >
      {/* Background image (when provided) */}
      {hasImage && (
        <Image
          src={backgroundImage}
          alt={backgroundAlt || title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      )}

      {/* Dark gradient overlay for image heroes */}
      {hasImage && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/25"
          aria-hidden="true"
        />
      )}

      {/* Decorative dots (only for gradient-only heroes) */}
      {!hasImage && (
        <div
          className={`pointer-events-none absolute inset-0 ${dots[accent]}`}
          aria-hidden="true"
        >
          <svg
            className="absolute -right-24 -top-24 h-96 w-96 opacity-30"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <defs>
              <pattern
                id="hero-dots"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#hero-dots)" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
          hasImage
            ? "flex min-h-[50vh] flex-col justify-end pb-10 pt-24 sm:min-h-[55vh] sm:pb-12 lg:min-h-[60vh] lg:pb-16"
            : "py-16 sm:py-20 lg:py-24"
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg">
            {title}
          </h1>
          <p
            className={`mt-4 text-base leading-relaxed sm:text-lg sm:leading-relaxed ${
              hasImage
                ? "text-white/90 drop-shadow-md"
                : "text-white/75"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
