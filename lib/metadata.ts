import type { Metadata } from "next";
import { seoKeywords } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ArticleMeta = {
  publishedTime: string;
  modifiedTime: string;
  tags?: readonly string[];
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  noIndex?: boolean;
  image?: string;
  article?: ArticleMeta;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
  image,
  article,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const ogImage = image ?? `${siteConfig.url}/opengraph-image`;

  return {
    title,
    description,
    keywords: keywords ? [...keywords] : [...seoKeywords],
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      type: article ? "article" : "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      images: [{ url: ogImage, alt: `${title} | ${siteConfig.name}` }],
      ...(article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: [siteConfig.name],
            section: "Assistência técnica de eletrodomésticos",
            tags: article.tags ? [...article.tags] : undefined,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
