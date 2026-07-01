import { blogPosts } from "./content/blog";
import { seoBrands } from "./content/brands";
import { seoZones } from "./content/zones";
import { seoServices } from "./seo";

type RedirectRule = {
  source: string;
  destination: string;
  permanent: boolean;
};

function toLegacyServiceSlug(slug: string) {
  return slug
    .replace(/-em-porto-alegre$/, "-porto-alegre")
    .replace(/^conserto-de-/, "conserto-")
    .replace(/^instalacao-de-/, "instalacao-");
}

function toLegacyBrandSlug(slug: string) {
  return slug
    .replace(/^conserto-de-/, "conserto-")
    .replace(/-em-porto-alegre$/, "-porto-alegre");
}

function toLegacyGeoSlug(slug: string) {
  return slug.replace(/-em-porto-alegre$/, "-porto-alegre");
}

export function getLegacyRedirects(): RedirectRule[] {
  const redirects: RedirectRule[] = [];

  for (const service of seoServices) {
    const oldSlug = toLegacyServiceSlug(service.slug);
    if (oldSlug !== service.slug) {
      redirects.push({
        source: `/servicos/${oldSlug}`,
        destination: `/servicos/${service.slug}`,
        permanent: true,
      });
    }
  }

  for (const brand of seoBrands) {
    const oldSlug = toLegacyBrandSlug(brand.slug);
    if (oldSlug !== brand.slug) {
      redirects.push({
        source: `/marcas/${oldSlug}`,
        destination: `/marcas/${brand.slug}`,
        permanent: true,
      });
    }
  }

  for (const zone of seoZones) {
    const oldSlug = toLegacyGeoSlug(zone.slug);
    if (oldSlug !== zone.slug) {
      redirects.push({
        source: `/regioes/${oldSlug}`,
        destination: `/regioes/${zone.slug}`,
        permanent: true,
      });
    }
  }

  for (const post of blogPosts) {
    const oldSlug = toLegacyGeoSlug(post.slug);
    if (oldSlug !== post.slug) {
      redirects.push({
        source: `/blog/${oldSlug}`,
        destination: `/blog/${post.slug}`,
        permanent: true,
      });
    }
  }

  return redirects;
}
