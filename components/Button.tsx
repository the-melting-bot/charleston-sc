import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-coastal-700 text-white shadow-sm hover:bg-coastal-800 focus-visible:ring-coastal-500",
  secondary:
    "bg-coastal-sand text-white shadow-sm hover:bg-amber-700 focus-visible:ring-coastal-sand",
  outline:
    "border border-coastal-700 text-coastal-700 hover:bg-coastal-50 focus-visible:ring-coastal-500",
  ghost:
    "text-coastal-700 hover:bg-coastal-50 focus-visible:ring-coastal-500",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-lg",
  lg: "px-6 py-3 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in rest && rest.href) {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={(rest as ButtonAsButton).onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
