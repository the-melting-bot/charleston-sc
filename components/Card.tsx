import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  accentColor?: string;
  tag?: string;
}

export default function Card({
  title,
  description,
  href,
  icon,
  accentColor = "bg-coastal-100",
  tag,
}: CardProps) {
  const content = (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-0.5">
      {/* Accent strip */}
      <div className={`h-1 w-full ${accentColor}`} />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Icon + tag row */}
        {(icon || tag) && (
          <div className="mb-3 flex items-center gap-3">
            {icon && (
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentColor} text-coastal-700 transition-transform duration-300 group-hover:scale-105`}>
                {icon}
              </div>
            )}
            {tag && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                {tag}
              </span>
            )}
          </div>
        )}

        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {description}
        </p>

        {href && (
          <div className="mt-4 flex items-center gap-1 text-sm font-medium text-coastal-700 transition-colors group-hover:text-coastal-500">
            Learn more
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
