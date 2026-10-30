import type { MetadataRoute } from "next";

const BASE = "https://www.builderxai.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/events`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/subscribe`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE}/events/first-event-recap`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/events/ai-coding-talk`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/events/2026-02-15-xiaonian`, changeFrequency: "yearly", priority: 0.5 },
  ];
}
