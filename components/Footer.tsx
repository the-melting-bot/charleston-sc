import Link from "next/link";

const explore = [
  { href: "/parks-outdoor", label: "Browse Parks" },
  { href: "/maps", label: "Interactive Map" },
  { href: "/neighborhoods", label: "Parks by Area" },
  { href: "/landmarks", label: "Landmarks" },
  { href: "/historical-cultural", label: "History & Culture" },
];

const about = [
  { label: "Open Data", href: "https://data-charleston-sc.opendata.arcgis.com/", external: true },
  { label: "City of Charleston", href: "https://www.charleston-sc.gov/", external: true },
  { label: "Charleston Parks Conservancy", href: "https://www.charlestonparksconservancy.org/", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 32 32"
                className="h-7 w-7 text-coastal-700"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M16 8 C16 8 11 15 11 20 C11 22.8 13.2 25 16 25 C18.8 25 21 22.8 21 20 C21 15 16 8 16 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path d="M16 14 L16 22" stroke="currentColor" strokeWidth="1.2" />
                <path d="M13.5 17.5 L16 15 L18.5 17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Lowcountry <span className="text-coastal-600">Parks</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              A modern guide to parks, trails, and green spaces across
              the Charleston, SC area. Built on City of Charleston Open Data.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-coastal-700 focus-visible:outline-none focus-visible:text-coastal-700 focus-visible:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5">
              {about.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 transition-colors hover:text-coastal-700 focus-visible:outline-none focus-visible:text-coastal-700 focus-visible:underline"
                    aria-label={`${l.label} (opens in new tab)`}
                  >
                    {l.label}
                    <span className="ml-1 text-slate-300" aria-hidden="true">{"\u2197"}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              About
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Lowcountry Parks is a community project that makes it easier
              to find and enjoy Charleston&apos;s outdoor spaces. Park data is
              sourced from the City of Charleston Open Data portal.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Lowcountry Parks
          </p>
          <p className="text-xs text-slate-400">
            Park data from{" "}
            <a
              href="https://data-charleston-sc.opendata.arcgis.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coastal-600 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coastal-500 focus-visible:ring-offset-2 focus-visible:rounded"
              aria-label="City of Charleston Open Data (opens in new tab)"
            >
              City of Charleston Open Data
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
