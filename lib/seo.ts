import { services, siteConfig } from "./site";

export type ServiceItem = (typeof services)[number] & {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  schemaName: string;
};

const slugMap: Record<string, string> = {
  "Geladeiras e Freezers": "conserto-de-geladeira-freezer-em-porto-alegre",
  "Máquinas de Lavar": "conserto-de-maquina-de-lavar-em-porto-alegre",
  "Lava e Seca": "conserto-de-lava-e-seca-em-porto-alegre",
  "Lava-louças": "conserto-de-lava-loucas-em-porto-alegre",
  "Fogões e Cooktops Premium": "conserto-de-fogao-cooktop-premium-em-porto-alegre",
  Secadoras: "conserto-de-secadora-em-porto-alegre",
  "Coifas e Depuradores": "conserto-de-coifa-depurador-em-porto-alegre",
  "Adegas Climatizadas": "conserto-de-adega-climatizada-em-porto-alegre",
  "Instalação de Eletrodomésticos": "instalacao-de-eletrodomesticos-em-porto-alegre",
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
  "reparo geladeira em porto alegre",
  "conserto de geladeira em porto alegre",
  "conserto de máquina de lavar em porto alegre",
  "conserto de lava e seca em porto alegre",
  "conserto de lava louças em porto alegre",
  "conserto de coifa em porto alegre",
  "conserto de cooktop em porto alegre",
  "conserto de adega climatizada em porto alegre",
  "conserto de brastemp em porto alegre",
  "conserto de electrolux em porto alegre",
  "conserto de samsung em porto alegre",
  "conserto de bertazzoni em porto alegre",
  "conserto de sub-zero em porto alegre",
  "assistência técnica zona sul porto alegre",
  "ServitecPoa",
  "técnico eletrodomésticos POA",
] as const;

export const allSeoPaths = {
  static: ["/", "/servicos", "/atendimento-domicilio", "/sobre", "/marcas", "/regioes", "/blog"],
  services: seoServices.map((s) => `/servicos/${s.slug}`),
} as const;
