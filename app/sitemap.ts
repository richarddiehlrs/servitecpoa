import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content/blog";
import { seoBrands } from "@/lib/content/brands";
import { seoZones } from "@/lib/content/zones";
import { seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/servicos`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    {
      url: `${base}/atendimento-domicilio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    { url: `${base}/sobre`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/marcas`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/regioes`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = seoServices.map((service) => ({
    url: `${base}/servicos/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const brandPages: MetadataRoute.Sitemap = seoBrands.map((brand) => ({
    url: `${base}/marcas/${brand.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const zonePages: MetadataRoute.Sitemap = seoZones.map((zone) => ({
    url: `${base}/regioes/${zone.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...brandPages, ...zonePages, ...blogPages];
}
