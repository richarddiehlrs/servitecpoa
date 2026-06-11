import type { BlogPost } from "@/lib/content/blog";
import type { BrandPage } from "@/lib/content/brands";
import type { ZonePage } from "@/lib/content/zones";
import { faqs, siteConfig } from "./site";
import { seoServices } from "./seo";

const { url, phone, cnpjDisplay, name, description, serviceArea, geo, social, reviews } =
  siteConfig;
const orgId = `${url}/#organization`;
const websiteId = `${url}/#website`;

function areaServed() {
  return [
    { "@type": "City", name: "Porto Alegre" },
    { "@type": "AdministrativeArea", name: serviceArea },
  ];
}

function sameAsLinks() {
  return [social.googleBusiness, siteConfig.whatsappUrl, social.instagram, social.facebook].filter(
    Boolean,
  );
}

function aggregateRating() {
  if (!reviews.reviewCount || reviews.reviewCount <= 0) return undefined;
  return {
    "@type": "AggregateRating",
    ratingValue: reviews.ratingValue,
    reviewCount: reviews.reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

function serviceSchema(service: (typeof seoServices)[number]) {
  const serviceUrl = `${url}/servicos/${service.slug}`;
  return {
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.schemaName,
    description: service.description,
    url: serviceUrl,
    serviceType: service.title,
    provider: { "@id": orgId },
    areaServed: areaServed(),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
      servicePhone: `+55${phone}`,
      availableLanguage: "pt-BR",
    },
  };
}

export function getLocalBusinessJsonLd() {
  const business: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": orgId,
    name: `${name} — ${siteConfig.tagline}`,
    alternateName: "ServitecPoa",
    description: `${description} Categoria: ${siteConfig.primaryCategory}. Atendimento exclusivamente a domicílio em Porto Alegre.`,
    url,
    telephone: `+55${phone}`,
    email: siteConfig.email,
    taxID: cnpjDisplay,
    image: [`${url}/logo.png`, `${url}/opengraph-image`],
    logo: `${url}/logo.png`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
    areaServed: areaServed(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    knowsAbout: [
      siteConfig.primaryCategory,
      ...seoServices.map((s) => s.title),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:30",
      },
    ],
    sameAs: sameAsLinks(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de assistência técnica de eletrodomésticos",
      itemListElement: seoServices.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: serviceSchema(service),
      })),
    },
    makesOffer: seoServices.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@id": `${url}/servicos/${service.slug}#service` },
    })),
  };

  const rating = aggregateRating();
  if (rating) business.aggregateRating = rating;

  return business;
}

export function getServicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços ServitecPoa — Assistência técnica de eletrodomésticos",
    description: "Lista completa de serviços de assistência técnica a domicílio em Porto Alegre.",
    numberOfItems: seoServices.length,
    itemListElement: seoServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `${url}/servicos/${service.slug}`,
    })),
  };
}

export function getServicePageJsonLd(service: (typeof seoServices)[number]) {
  return [
    serviceSchema(service),
    getBreadcrumbJsonLd([
      { name: "Início", item: url },
      { name: "Serviços", item: `${url}/servicos` },
      { name: service.title, item: `${url}/servicos/${service.slug}` },
    ]),
  ];
}

export function getFaqJsonLd(extraFaqs?: { question: string; answer: string }[]) {
  const allFaqs = extraFaqs ? [...faqs, ...extraFaqs] : faqs;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "pt-BR",
    publisher: { "@id": orgId },
    potentialAction: {
      "@type": "CommunicateAction",
      target: siteConfig.whatsappUrl,
      name: "Solicitar atendimento via WhatsApp",
    },
  };
}

export function getHomeWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    inLanguage: "pt-BR",
  };
}

export function getServicosWebPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/servicos#webpage`,
    url: `${url}/servicos`,
    name: "Serviços de assistência técnica de eletrodomésticos — ServitecPoa",
    description:
      "Conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas e eletrodomésticos premium em Porto Alegre.",
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    inLanguage: "pt-BR",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: seoServices.length,
      itemListElement: seoServices.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${url}/servicos/${s.slug}`,
      })),
    },
  };
}

export function getBreadcrumbJsonLd(
  items: { name: string; item: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function getBrandPageJsonLd(brand: BrandPage) {
  const pageUrl = `${url}/marcas/${brand.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Conserto ${brand.name} em Porto Alegre`,
      description: brand.seoDescription,
      url: pageUrl,
      provider: { "@id": orgId },
      areaServed: areaServed(),
      serviceType: `Assistência técnica ${brand.name}`,
    },
    getBreadcrumbJsonLd([
      { name: "Início", item: url },
      { name: "Marcas", item: `${url}/marcas` },
      { name: brand.name, item: pageUrl },
    ]),
  ];
}

export function getZonePageJsonLd(zone: ZonePage) {
  const pageUrl = `${url}/regioes/${zone.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Assistência técnica de eletrodomésticos em ${zone.name}`,
      description: zone.seoDescription,
      url: pageUrl,
      provider: { "@id": orgId },
      areaServed: {
        "@type": "Place",
        name: zone.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: zone.isMetro ? zone.name : "Porto Alegre",
          addressRegion: "RS",
          addressCountry: "BR",
        },
      },
      serviceType: siteConfig.primaryCategory,
    },
    getBreadcrumbJsonLd([
      { name: "Início", item: url },
      { name: "Regiões", item: `${url}/regioes` },
      { name: zone.name, item: pageUrl },
    ]),
  ];
}

export function getBlogPostJsonLd(post: BlogPost) {
  const pageUrl = `${url}/blog/${post.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seoDescription,
      url: pageUrl,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: { "@id": orgId },
      publisher: { "@id": orgId },
      mainEntityOfPage: pageUrl,
      inLanguage: "pt-BR",
      about: siteConfig.primaryCategory,
    },
    getBreadcrumbJsonLd([
      { name: "Início", item: url },
      { name: "Blog", item: `${url}/blog` },
      { name: post.title, item: pageUrl },
    ]),
  ];
}

export function getAllHomeJsonLd() {
  return [
    getWebSiteJsonLd(),
    getHomeWebPageJsonLd(),
    getLocalBusinessJsonLd(),
    getServicesItemListJsonLd(),
    getFaqJsonLd(),
  ];
}
