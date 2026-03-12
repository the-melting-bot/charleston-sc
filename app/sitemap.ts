import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://lowcountryparks.com";

interface Park {
  slug: string;
}

interface ParksData {
  parks: Park[];
}

export default function sitemap(): MetadataRoute.Sitemap {
  /* Static pages */
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/parks-outdoor`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/maps`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/neighborhoods`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/landmarks`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/historical-cultural`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  /* Dynamic park pages */
  let parkPages: MetadataRoute.Sitemap = [];
  try {
    const filePath = path.join(process.cwd(), "data", "parks.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    const data: ParksData = JSON.parse(raw);
    parkPages = data.parks.map((park) => ({
      url: `${BASE_URL}/parks/${park.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // If parks data unavailable, skip dynamic pages
  }

  return [...staticPages, ...parkPages];
}
