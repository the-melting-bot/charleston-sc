import React from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-coastal-blue text-white hover:bg-sky-800 focus:ring-coastal-blue",
  secondary:
    "bg-coastal-sand text-white hover:bg-amber-700 focus:ring-coastal-sand",
  outline:
    "border-2 border-coastal-blue text-coastal-blue hover:bg-coastal-blue-light focus:ring-coastal-blue",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-7 py-3.5 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
