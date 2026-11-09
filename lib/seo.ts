import { services, siteConfig } from "./site";

export type ServiceItem = (typeof services)[number] & {
  slug: string;
  /** Termo principal de busca, ex.: "Conserto de lava e seca" */
  conserto: string;
  /** Forma curta em minúsculas, ex.: "lava e seca" */
  short: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  schemaName: string;
  keywords: readonly string[];
};

type ServiceSeoMeta = {
  slug: string;
  conserto: string;
  short: string;
  /** Variações de busca reais (sinônimos, grafias, termos de intenção) */
  keywords: string[];
};

const serviceSeoMeta: Record<string, ServiceSeoMeta> = {
  "Geladeiras e Freezers": {
    slug: "conserto-de-geladeira-freezer-em-porto-alegre",
    conserto: "Conserto de geladeira e freezer",
    short: "geladeira e freezer",
    keywords: [
      "conserto de geladeira em porto alegre",
      "conserto de geladeira porto alegre",
      "técnico de geladeira porto alegre",
      "assistência técnica geladeira porto alegre",
      "conserto de freezer porto alegre",
      "geladeira não gela porto alegre",
      "conserto geladeira frost free porto alegre",
      "conserto geladeira side by side porto alegre",
      "refrigeração residencial porto alegre",
    ],
  },
  "Máquinas de Lavar": {
    slug: "conserto-de-maquina-de-lavar-em-porto-alegre",
    conserto: "Conserto de máquina de lavar",
    short: "máquina de lavar",
    keywords: [
      "conserto de máquina de lavar em porto alegre",
      "conserto de maquina de lavar porto alegre",
      "técnico de máquina de lavar porto alegre",
      "assistência técnica máquina de lavar porto alegre",
      "conserto de lavadora porto alegre",
      "máquina de lavar não centrifuga porto alegre",
      "conserto lavadora brastemp porto alegre",
      "conserto lavadora electrolux porto alegre",
    ],
  },
  "Lava e Seca": {
    slug: "conserto-de-lava-e-seca-em-porto-alegre",
    conserto: "Conserto de lava e seca",
    short: "lava e seca",
    keywords: [
      "conserto de lava e seca em porto alegre",
      "conserto de lava e seca porto alegre",
      "conserto lava e seca poa",
      "técnico de lava e seca porto alegre",
      "assistência técnica lava e seca porto alegre",
      "manutenção de lava e seca porto alegre",
      "conserto lava e seca samsung porto alegre",
      "conserto lava e seca lg porto alegre",
      "conserto lava e seca electrolux porto alegre",
      "conserto lava e seca brastemp porto alegre",
      "lava e seca não seca porto alegre",
      "conserto lavadora e secadora porto alegre",
      "conserto lava-seca porto alegre",
    ],
  },
  "Lava-louças": {
    slug: "conserto-de-lava-loucas-em-porto-alegre",
    conserto: "Conserto de lava-louças",
    short: "lava-louças",
    keywords: [
      "conserto de lava louças em porto alegre",
      "conserto de lava-louças porto alegre",
      "técnico de lava louças porto alegre",
      "assistência técnica lava louças porto alegre",
      "lava louças não seca porto alegre",
      "conserto lava louças brastemp porto alegre",
    ],
  },
  "Fogões e Cooktops Premium": {
    slug: "conserto-de-fogao-cooktop-premium-em-porto-alegre",
    conserto: "Conserto de fogão e cooktop",
    short: "fogão e cooktop",
    keywords: [
      "conserto de fogão em porto alegre",
      "conserto de cooktop em porto alegre",
      "conserto de cooktop por indução porto alegre",
      "técnico de fogão porto alegre",
      "conserto fogão importado porto alegre",
      "conserto forno embutido porto alegre",
      "conserto cooktop bertazzoni porto alegre",
    ],
  },
  Secadoras: {
    slug: "conserto-de-secadora-em-porto-alegre",
    conserto: "Conserto de secadora",
    short: "secadora",
    keywords: [
      "conserto de secadora em porto alegre",
      "conserto de secadora de roupas porto alegre",
      "técnico de secadora porto alegre",
      "secadora não aquece porto alegre",
      "conserto secadora a gás porto alegre",
    ],
  },
  "Coifas e Depuradores": {
    slug: "conserto-de-coifa-depurador-em-porto-alegre",
    conserto: "Conserto de coifa e depurador",
    short: "coifa e depurador",
    keywords: [
      "conserto de coifa em porto alegre",
      "conserto de depurador porto alegre",
      "instalação de coifa porto alegre",
      "técnico de coifa porto alegre",
      "conserto coifa falmec porto alegre",
    ],
  },
  "Adegas Climatizadas": {
    slug: "conserto-de-adega-climatizada-em-porto-alegre",
    conserto: "Conserto de adega climatizada",
    short: "adega climatizada",
    keywords: [
      "conserto de adega climatizada em porto alegre",
      "conserto de adega de vinho porto alegre",
      "técnico de adega climatizada porto alegre",
      "adega não gela porto alegre",
    ],
  },
  "Instalação de Eletrodomésticos": {
    slug: "instalacao-de-eletrodomesticos-em-porto-alegre",
    conserto: "Instalação de eletrodomésticos",
    short: "instalação de eletrodomésticos",
    keywords: [
      "instalação de eletrodomésticos porto alegre",
      "instalação de cooktop porto alegre",
      "instalação de forno embutido porto alegre",
      "instalação de coifa porto alegre",
      "instalação de lava louças porto alegre",
    ],
  },
};

export const seoServices: ServiceItem[] = services.map((service) => {
  const meta = serviceSeoMeta[service.title];
  const slug = meta?.slug ?? service.title.toLowerCase().replace(/\s+/g, "-");
  const conserto = meta?.conserto ?? service.title;
  const short = meta?.short ?? service.title.toLowerCase();

  return {
    ...service,
    slug,
    conserto,
    short,
    h1: `${conserto} em Porto Alegre`,
    schemaName: `${conserto} em Porto Alegre — atendimento a domicílio`,
    seoTitle: `${conserto} em Porto Alegre | Técnico a Domicílio`,
    seoDescription: `${conserto} em Porto Alegre com técnico a domicílio. ${service.description} Orçamento antes do reparo e garantia de ${siteConfig.warranty}. WhatsApp ${siteConfig.phoneDisplay}.`,
    keywords: [...(meta?.keywords ?? []), "assistência técnica de eletrodomésticos porto alegre"],
  };
});

export function getServiceBySlug(slug: string) {
  return seoServices.find((s) => s.slug === slug);
}

export function getServiceByTitle(title: string) {
  return seoServices.find((s) => s.title === title);
}

export const seoKeywords = [
  "assistência técnica de eletrodomésticos porto alegre",
  "assistência técnica eletrodomésticos porto alegre",
  "conserto de eletrodomésticos em porto alegre",
  "conserto eletrodomésticos porto alegre",
  "técnico de eletrodomésticos porto alegre",
  "assistência técnica a domicílio porto alegre",
  "conserto de geladeira em porto alegre",
  "conserto de máquina de lavar em porto alegre",
  "conserto de lava e seca em porto alegre",
  "conserto de lava louças em porto alegre",
  "conserto de secadora em porto alegre",
  "conserto de coifa em porto alegre",
  "conserto de cooktop em porto alegre",
  "conserto de adega climatizada em porto alegre",
  "conserto de brastemp em porto alegre",
  "conserto de electrolux em porto alegre",
  "conserto de samsung em porto alegre",
  "conserto de lg em porto alegre",
  "conserto de bertazzoni em porto alegre",
  "conserto de sub-zero em porto alegre",
  "ServitecPoa",
  "técnico eletrodomésticos POA",
] as const;

export const allSeoPaths = {
  static: ["/", "/servicos", "/atendimento-domicilio", "/sobre", "/marcas", "/regioes", "/blog"],
  services: seoServices.map((s) => `/servicos/${s.slug}`),
} as const;
