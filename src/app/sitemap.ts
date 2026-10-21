import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = {
    url: SITE_URL,
    lastModified: new Date().toISOString().split("T")[0],
  };

  return [routes];
}
