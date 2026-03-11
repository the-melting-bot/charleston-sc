interface Fact {
  label: string;
  value: string;
}

interface QuickFactsProps {
  facts: Fact[];
}

export default function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:grid-cols-4 sm:gap-6">
        {facts.map((f) => (
          <div key={f.label} className="text-center">
            <p className="text-2xl font-bold text-coastal-700 sm:text-3xl">
              {f.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400 sm:text-sm">
              {f.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
