import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://lowcountryparks.com";
const SITE_NAME = "Lowcountry Parks";
const DEFAULT_DESCRIPTION =
  "Find parks, trails, and green spaces across the Charleston, SC area. Browse 124+ parks by neighborhood, explore an interactive map, and plan your next outdoor day in the Lowcountry.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lowcountry Parks | Charleston's Parks & Green Spaces",
    template: "%s | Lowcountry Parks",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Charleston parks",
    "Lowcountry parks",
    "Charleston SC green spaces",
    "Charleston trails",
    "Charleston playgrounds",
    "Charleston outdoor activities",
    "Charleston recreation",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Lowcountry Parks — Charleston's Parks & Green Spaces",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/media/lowcountryparks-hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Aerial view of Charleston, SC waterfront and green spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowcountry Parks — Charleston's Parks & Green Spaces",
    description: DEFAULT_DESCRIPTION,
    images: ["/media/lowcountryparks-hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0369a1",
  width: "device-width",
  initialScale: 1,
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
