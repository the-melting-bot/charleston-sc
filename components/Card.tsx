import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  color?: string;
}

export default function Card({
  title,
  description,
  href,
  color = "bg-coastal-blue-light",
}: CardProps) {
  const inner = (
    <>
      <div className={`h-40 w-full rounded-t-xl ${color}`} />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </>
  );

  const classes =
    "group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl hover:-translate-y-1";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return <div className={classes}>{inner}</div>;
}
