import { getServiceDetail } from "@/lib/content/service-details";
import { getBrandByName, seoBrands, type BrandPage } from "@/lib/content/brands";
import { seoServices, type ServiceItem } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type BrandServicePage = {
  slug: string;
  brandSlug: string;
  brandName: string;
  serviceSlug: string;
  serviceTitle: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  paragraphs: string[];
  problems: string[];
  faqs: { question: string; answer: string }[];
};

const serviceMeta: Record<
  string,
  { slugKey: string; phrase: string; short: string; action: "conserto" | "instalacao" }
> = {
  "Geladeiras e Freezers": {
    slugKey: "geladeira",
    phrase: "Conserto de geladeira",
    short: "geladeira",
    action: "conserto",
  },
  "Máquinas de Lavar": {
    slugKey: "maquina-de-lavar",
    phrase: "Conserto de máquina de lavar",
    short: "máquina de lavar",
    action: "conserto",
  },
  "Lava e Seca": {
    slugKey: "lava-e-seca",
    phrase: "Conserto de lava e seca",
    short: "lava e seca",
    action: "conserto",
  },
  "Lava-louças": {
    slugKey: "lava-loucas",
    phrase: "Conserto de lava-louças",
    short: "lava-louças",
    action: "conserto",
  },
  "Fogões e Cooktops Premium": {
    slugKey: "fogao-cooktop",
    phrase: "Conserto de fogão e cooktop",
    short: "fogão e cooktop",
    action: "conserto",
  },
  Secadoras: {
    slugKey: "secadora",
    phrase: "Conserto de secadora",
    short: "secadora",
    action: "conserto",
  },
  "Coifas e Depuradores": {
    slugKey: "coifa",
    phrase: "Conserto de coifa",
    short: "coifa",
    action: "conserto",
  },
  "Adegas Climatizadas": {
    slugKey: "adega-climatizada",
    phrase: "Conserto de adega climatizada",
    short: "adega climatizada",
    action: "conserto",
  },
  "Instalação de Eletrodomésticos": {
    slugKey: "eletrodomesticos",
    phrase: "Instalação de eletrodomésticos",
    short: "instalação",
    action: "instalacao",
  },
};

function brandKey(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildBrandServiceSlug(brandName: string, serviceTitle: string) {
  const meta = serviceMeta[serviceTitle];
  const key = brandKey(brandName);
  if (!meta) return null;

  if (meta.action === "instalacao") {
    return `instalacao-de-${meta.slugKey}-${key}-em-porto-alegre`;
  }

  return `conserto-de-${meta.slugKey}-${key}-em-porto-alegre`;
}

function buildPage(brand: BrandPage, service: ServiceItem): BrandServicePage {
  const meta = serviceMeta[service.title];
  const slug = buildBrandServiceSlug(brand.name, service.title)!;
  const detail = getServiceDetail(service.slug);
  const isInstall = meta.action === "instalacao";

  return {
    slug,
    brandSlug: brand.slug,
    brandName: brand.name,
    serviceSlug: service.slug,
    serviceTitle: service.title,
    seoTitle: `${meta.phrase} ${brand.name} em Porto Alegre`,
    seoDescription: `${meta.phrase} ${brand.name} em Porto Alegre com atendimento a domicílio. Técnico especializado em linha premium, diagnóstico no local e garantia de ${siteConfig.warranty}. WhatsApp ${siteConfig.phoneDisplay}.`,
    h1: `${meta.phrase} ${brand.name} em Porto Alegre`,
    intro: `A ServitecPoa é especializada em ${meta.phrase.toLowerCase()} ${brand.name} em Porto Alegre. Atendemos equipamentos da marca com diagnóstico técnico no local, peças de qualidade e garantia de ${siteConfig.warranty}.${
      isInstall
        ? ` Realizamos instalação profissional de ${brand.name} conforme especificações do fabricante.`
        : ` Nossa equipe conhece as particularidades da linha premium ${brand.name}.`
    }`,
    paragraphs: [
      brand.paragraphs[0],
      `${isInstall ? "Instalação" : "Conserto"} de ${meta.short} ${brand.name} exige técnico com experiência em marcas importadas e built-in. Avaliamos condições elétricas, de gás ou hidráulicas quando necessário e apresentamos orçamento antes de iniciar o serviço.`,
      `Atendimento a domicílio em toda Porto Alegre, com agendamento nos turnos da manhã ou tarde. Para cobertura geral do serviço, veja também nossa página de ${service.title.toLowerCase()} na capital e a página dedicada à marca ${brand.name}.`,
    ],
    problems: detail?.problems.slice(0, 5) ?? [],
    faqs: [
      {
        question: `Vocês ${isInstall ? "instalam" : "consertam"} ${meta.short} ${brand.name} em Porto Alegre?`,
        answer: `Sim. Realizamos ${isInstall ? "instalação" : "conserto"} de ${meta.short} ${brand.name} com visita técnica a domicílio em Porto Alegre. Agende pelo site ou WhatsApp ${siteConfig.phoneDisplay}.`,
      },
      {
        question: `Por que escolher técnico especializado em ${brand.name}?`,
        answer: `${brand.name} é marca premium com componentes e sistemas específicos. Um técnico especializado reduz risco de diagnóstico incorreto e garante reparo ou instalação adequados ao padrão da marca.`,
      },
      {
        question: `O serviço em ${brand.name} tem garantia?`,
        answer: `Sim. Todos os serviços da ServitecPoa para ${brand.name} incluem garantia de ${siteConfig.warranty}.`,
      },
    ],
  };
}

function buildAllBrandServicePages(): BrandServicePage[] {
  const pages: BrandServicePage[] = [];

  for (const brand of seoBrands.filter((item) => item.isPremium)) {
    for (const serviceTitle of brand.services) {
      const service = seoServices.find((item) => item.title === serviceTitle);
      if (!service) continue;
      pages.push(buildPage(brand, service));
    }
  }

  return pages;
}

export const brandServicePages: BrandServicePage[] = buildAllBrandServicePages();

export function getBrandServicePage(slug: string) {
  return brandServicePages.find((page) => page.slug === slug);
}

export function getBrandServicePagesForBrand(brandSlug: string) {
  return brandServicePages.filter((page) => page.brandSlug === brandSlug);
}

export function getBrandServicePagesForService(serviceSlug: string) {
  return brandServicePages.filter((page) => page.serviceSlug === serviceSlug);
}

export function getBrandServicePageByNames(brandName: string, serviceTitle: string) {
  const slug = buildBrandServiceSlug(brandName, serviceTitle);
  return slug ? getBrandServicePage(slug) : undefined;
}

export { getBrandByName };
