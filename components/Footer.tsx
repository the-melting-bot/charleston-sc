import Link from "next/link";

const explore = [
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/parks-outdoor", label: "Parks & Outdoor" },
  { href: "/historical-cultural", label: "Historical & Cultural" },
  { href: "/landmarks", label: "Landmarks" },
  { href: "/maps", label: "Interactive Map" },
];

const resources = [
  { label: "Getting Around", href: "#" },
  { label: "Dining Guide", href: "#" },
  { label: "Events Calendar", href: "#" },
  { label: "Visitor Tips", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 32 32"
                className="h-7 w-7 text-coastal-700"
                fill="none"
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
                Charleston <span className="text-coastal-600">SC</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Your guide to discovering the best of Charleston and the
              Lowcountry — neighborhoods, parks, history, landmarks, and more.
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
                    className="text-sm text-slate-600 transition-colors hover:text-coastal-700"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources (placeholder) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Resources
            </h4>
            <ul className="mt-4 space-y-2.5">
              {resources.map((l) => (
                <li key={l.label}>
                  <span className="text-sm text-slate-400 cursor-default">
                    {l.label}
                    <span className="ml-1.5 inline-block rounded bg-slate-200 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Soon
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter placeholder */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-slate-500">
              Get the latest on Charleston events, new spots, and seasonal guides.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                disabled
                className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400 placeholder:text-slate-300"
              />
              <button
                disabled
                className="rounded-lg bg-coastal-600 px-4 py-2 text-sm font-medium text-white opacity-50"
              >
                Join
              </button>
            </div>
            <p className="mt-1.5 text-xs text-slate-400">Coming soon</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Charleston SC Explorer. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="cursor-default">Privacy</span>
            <span className="text-slate-300">|</span>
            <span className="cursor-default">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
