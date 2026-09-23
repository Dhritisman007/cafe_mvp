import type { MetadataRoute } from "next";
import { business } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: business.url, changeFrequency: "weekly", priority: 1 },
    { url: `${business.url}/menu`, changeFrequency: "weekly", priority: 0.8 },
  ];
}
