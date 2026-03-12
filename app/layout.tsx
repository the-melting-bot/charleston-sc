import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lowcountry Parks | Charleston's Parks & Green Spaces",
  description:
    "Find parks, trails, and green spaces across the Charleston, SC area. Browse 120+ parks by neighborhood, explore an interactive map, and plan your next outdoor day in the Lowcountry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
