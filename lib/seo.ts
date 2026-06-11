import { services, siteConfig } from "./site";

export type ServiceItem = (typeof services)[number] & {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  schemaName: string;
};

const slugMap: Record<string, string> = {
  "Geladeiras e Freezers": "conserto-geladeira-freezer-porto-alegre",
  "Máquinas de Lavar": "conserto-maquina-de-lavar-porto-alegre",
  "Lava e Seca": "conserto-lava-e-seca-porto-alegre",
  "Lava-louças": "conserto-lava-loucas-porto-alegre",
  "Fogões e Cooktops Premium": "conserto-fogao-cooktop-premium-porto-alegre",
  Secadoras: "conserto-secadora-porto-alegre",
  "Coifas e Depuradores": "conserto-coifa-depurador-porto-alegre",
  "Adegas Climatizadas": "conserto-adega-climatizada-porto-alegre",
  "Instalação de Eletrodomésticos": "instalacao-eletrodomesticos-porto-alegre",
};

export const seoServices: ServiceItem[] = services.map((service) => {
  const slug = slugMap[service.title] ?? service.title.toLowerCase().replace(/\s+/g, "-");
  const schemaName = `${service.title} em Porto Alegre — assistência técnica a domicílio`;

  return {
    ...service,
    slug,
    schemaName,
    seoTitle: `${service.title} em Porto Alegre — Assistência Técnica`,
    seoDescription: `${service.description} Assistência técnica de eletrodomésticos a domicílio em Porto Alegre. Garantia de ${siteConfig.warranty}. WhatsApp ${siteConfig.phoneDisplay}.`,
  };
});

export function getServiceBySlug(slug: string) {
  return seoServices.find((s) => s.slug === slug);
}

export const seoKeywords = [
  "assistência técnica de eletrodomésticos porto alegre",
  "assistência técnica eletrodomésticos porto alegre",
  "conserto eletrodomésticos porto alegre",
  "técnico eletrodomésticos porto alegre",
  "assistência técnica domicílio porto alegre",
  "reparo geladeira porto alegre",
  "conserto geladeira porto alegre",
  "conserto máquina de lavar porto alegre",
  "conserto lava e seca porto alegre",
  "conserto lava louças porto alegre",
  "conserto coifa porto alegre",
  "conserto cooktop porto alegre",
  "conserto adega climatizada porto alegre",
  "conserto brastemp porto alegre",
  "conserto electrolux porto alegre",
  "conserto samsung porto alegre",
  "conserto bertazzoni porto alegre",
  "conserto sub-zero porto alegre",
  "assistência técnica zona sul porto alegre",
  "ServitecPoa",
  "técnico eletrodomésticos POA",
] as const;

export const allSeoPaths = {
  static: ["/", "/servicos", "/atendimento-domicilio", "/sobre", "/marcas", "/regioes", "/blog"],
  services: seoServices.map((s) => `/servicos/${s.slug}`),
} as const;
