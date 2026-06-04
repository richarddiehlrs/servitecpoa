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
  const schemaName = `${service.title} em Porto Alegre — atendimento a domicílio`;

  return {
    ...service,
    slug,
    schemaName,
    seoTitle: `${service.title} em Porto Alegre | ServitecPoa`,
    seoDescription: `${service.description} Atendimento a domicílio em Porto Alegre e RMS. Garantia de ${siteConfig.warranty}. WhatsApp ${siteConfig.phoneDisplay}.`,
  };
});

export function getServiceBySlug(slug: string) {
  return seoServices.find((s) => s.slug === slug);
}

export const seoKeywords = [
  "assistência técnica eletrodomésticos Porto Alegre",
  "conserto eletrodomésticos Porto Alegre",
  "reparo geladeira Porto Alegre",
  "conserto máquina de lavar Porto Alegre",
  "conserto lava e seca Porto Alegre",
  "conserto lava louças Porto Alegre",
  "assistência técnica domicílio Porto Alegre",
  "conserto adega climatizada",
  "conserto coifa Porto Alegre",
  "conserto cooktop premium",
  "conserto Electrolux Porto Alegre",
  "conserto Brastemp Porto Alegre",
  "conserto Samsung Porto Alegre",
  "conserto Bertazzoni Porto Alegre",
  "conserto Sub-Zero Porto Alegre",
  "ServitecPoa",
  "técnico eletrodomésticos POA",
] as const;
