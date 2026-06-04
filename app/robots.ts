import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${siteConfig.url}/sitemap.xml`;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [sitemap],
    host: siteConfig.url.replace(/^https:\/\//, ""),
  };
}
