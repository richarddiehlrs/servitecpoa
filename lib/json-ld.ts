import { faqs, siteConfig } from "./site";

export function getLocalBusinessJsonLd() {
  const { phone, cnpjDisplay, url, name, description, serviceArea } = siteConfig;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#organization`,
    name: `${name} — Consertos em Eletrodomésticos`,
    description: `${description} Atendimento exclusivamente a domicílio.`,
    url,
    telephone: `+55${phone}`,
    email: siteConfig.email,
    taxID: cnpjDisplay,
    image: `${url}/opengraph-image`,
    priceRange: "$$",
    areaServed: {
      "@type": "AdministrativeArea",
      name: serviceArea,
    },
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
      name: "Conserto de Eletrodomésticos a Domicílio",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conserto de geladeiras e freezers a domicílio",
            areaServed: "Porto Alegre",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conserto de adegas climatizadas",
            areaServed: "Porto Alegre",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conserto de máquinas de lavar e lava e seca",
            areaServed: "Porto Alegre",
          },
        },
      ],
    },
  };
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
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "pt-BR",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}
