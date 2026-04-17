import type { MetadataRoute } from "next";
import { getAllWorks } from "@/lib/notion";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const works = await getAllWorks();
  const baseUrl = "https://dingyunguang.com";

  const workUrls = works.map((w) => ({
    url: `${baseUrl}/works/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/works`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...workUrls,
  ];
}
