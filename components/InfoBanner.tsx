import Button from "./Button";

interface InfoBannerProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  variant?: "seafoam" | "sand" | "blue";
}

const variants = {
  seafoam: "bg-coastal-seafoam-50 border-coastal-seafoam-200",
  sand: "bg-coastal-sand-50 border-coastal-sand-light",
  blue: "bg-coastal-50 border-coastal-200",
};

export default function InfoBanner({
  title,
  description,
  buttonLabel,
  buttonHref,
  variant = "blue",
}: InfoBannerProps) {
  return (
    <div className={`rounded-2xl border px-6 py-8 sm:px-8 sm:py-10 ${variants[variant]}`}>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
          {description}
        </p>
        {buttonLabel && buttonHref && (
          <div className="mt-5">
            <Button href={buttonHref} variant="primary" size="md">
              {buttonLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
