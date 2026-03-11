import Link from "next/link";

const footerLinks = [
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/parks-outdoor", label: "Parks & Outdoor" },
  { href: "/historical-cultural", label: "Historical & Cultural" },
  { href: "/landmarks", label: "Landmarks" },
  { href: "/maps", label: "Maps" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-coastal-blue">
              Charleston SC Explorer
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Your guide to the best of Charleston and the Lowcountry. Discover
              neighborhoods, parks, historical sites, landmarks, and more.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Explore
            </h4>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 transition-colors hover:text-coastal-blue"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              About
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Charleston SC Explorer is a community guide to the Holy City.
              Explore everything from Rainbow Row to the Angel Oak Tree.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Charleston SC Explorer. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
