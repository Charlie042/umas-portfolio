import type { MetadataRoute } from "next";
import { baseUrl } from "@/lib/constants";

export function generateSitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1 },
    {
      url: `${baseUrl}/me/about-me`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/me/playground`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
