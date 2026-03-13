import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { blogPosts } from "@/data/blog-posts";
import { getAllLandmarkSlugs } from "@/data/landmarks";

const BASE_URL = "https://www.lowcountryparks.com";

interface Park {
  slug: string;
}

interface ParksData {
  parks: Park[];
}

export default function sitemap(): MetadataRoute.Sitemap {
  /* Static pages */
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/parks-outdoor`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/maps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/neighborhoods`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/landmarks`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/historical-cultural`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
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

  /* Landmark detail pages */
  const landmarkPages: MetadataRoute.Sitemap = getAllLandmarkSlugs().map(
    (slug) => ({
      url: `${BASE_URL}/landmarks/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  /* Blog post pages */
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...parkPages, ...landmarkPages, ...blogPages];
}
