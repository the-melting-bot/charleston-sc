import React from "react";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({
  title,
  subtitle,
  children,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${
        dark ? "bg-slate-900 text-white" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <h2
            className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p
              className={`mt-3 text-base leading-relaxed sm:text-lg ${
                dark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
