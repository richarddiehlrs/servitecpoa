import { faqs, siteConfig } from "./site";
import { seoServices } from "./seo";

const { url, phone, cnpjDisplay, name, description, serviceArea } = siteConfig;
const orgId = `${url}/#organization`;
const websiteId = `${url}/#website`;

function areaServed() {
  return [
    { "@type": "City", name: "Porto Alegre" },
    { "@type": "AdministrativeArea", name: serviceArea },
  ];
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
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": orgId,
    name: `${name} — Consertos em Eletrodomésticos`,
    alternateName: "ServitecPoa",
    description: `${description} Atendimento exclusivamente a domicílio em Porto Alegre.`,
    url,
    telephone: `+55${phone}`,
    email: siteConfig.email,
    taxID: cnpjDisplay,
    image: `${url}/opengraph-image`,
    logo: `${url}/icon.svg`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
    areaServed: areaServed(),
    knowsAbout: seoServices.map((s) => s.title),
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
    sameAs: [siteConfig.whatsappUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de assistência técnica em eletrodomésticos",
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
}

export function getServicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços ServitecPoa — Conserto de eletrodomésticos",
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
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: url },
        { "@type": "ListItem", position: 2, name: "Serviços", item: `${url}/servicos` },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `${url}/servicos/${service.slug}`,
        },
      ],
    },
  ];
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
    name: "Serviços de assistência técnica — ServitecPoa",
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

export function getAllHomeJsonLd() {
  return [
    getWebSiteJsonLd(),
    getHomeWebPageJsonLd(),
    getLocalBusinessJsonLd(),
    getServicesItemListJsonLd(),
    getFaqJsonLd(),
  ];
}
