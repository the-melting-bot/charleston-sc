import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import GoogleAnalyticsPageViews from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.lowcountryparks.com";
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
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Lowcountry Parks — Charleston's Parks & Green Spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowcountry Parks — Charleston's Parks & Green Spaces",
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "Jejddsa0KSoEOxmNi3fweLzn1ApcNKNaTCmJeOMNo2M",
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HYJSHS8L0Y"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HYJSHS8L0Y');
        `}
      </Script>
      <body className={inter.className}>
        <VercelAnalytics />
        <GoogleAnalyticsPageViews />
        {children}
      </body>
    </html>
  );
}
