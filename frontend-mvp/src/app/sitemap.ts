import type { MetadataRoute } from "next";
import { hubPages } from "@/lib/content";

const BASE = "https://vibe-coding-hub-vercel.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = hubPages.map((page) => ({
    url: `${BASE}${page.href}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.priority === "critical" ? 1 : page.priority === "high" ? 0.8 : 0.6,
  }));

  return [
    {
      url: `${BASE}/llms.txt`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...pages,
  ];
}
