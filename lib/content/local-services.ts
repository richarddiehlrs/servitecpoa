import { getServiceDetail } from "@/lib/content/service-details";
import { nobleBairros, seoZones } from "@/lib/content/zones";
import { seoServices, type ServiceItem } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type LocalBairro = {
  slug: string;
  name: string;
  zoneLabel: string;
  zoneSlug: string;
  premium: boolean;
};

export type LocalServicePage = {
  slug: string;
  serviceSlug: string;
  serviceTitle: string;
  bairro: LocalBairro;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  paragraphs: string[];
  problems: string[];
  faqs: { question: string; answer: string }[];
};

const extraBairros: LocalBairro[] = [
  {
    slug: "cristal",
    name: "Cristal",
    zoneLabel: "Zona Sul",
    zoneSlug: "zona-sul-em-porto-alegre",
    premium: true,
  },
  {
    slug: "ipanema",
    name: "Ipanema",
    zoneLabel: "Zona Sul",
    zoneSlug: "zona-sul-em-porto-alegre",
    premium: true,
  },
  {
    slug: "tristeza",
    name: "Tristeza",
    zoneLabel: "Zona Sul",
    zoneSlug: "zona-sul-em-porto-alegre",
    premium: true,
  },
  {
    slug: "menino-deus",
    name: "Menino Deus",
    zoneLabel: "Zona Leste",
    zoneSlug: "zona-leste-em-porto-alegre",
    premium: true,
  },
  {
    slug: "bom-fim",
    name: "Bom Fim",
    zoneLabel: "Centro Histórico",
    zoneSlug: "centro-historico-em-porto-alegre",
    premium: false,
  },
];

const servicePhrase: Record<string, { short: string; conserto: string }> = {
  "Geladeiras e Freezers": {
    short: "geladeira e freezer",
    conserto: "Conserto de geladeira e freezer",
  },
  "Máquinas de Lavar": {
    short: "máquina de lavar",
    conserto: "Conserto de máquina de lavar",
  },
  "Lava e Seca": {
    short: "lava e seca",
    conserto: "Conserto de lava e seca",
  },
  "Lava-louças": {
    short: "lava-louças",
    conserto: "Conserto de lava-louças",
  },
  "Fogões e Cooktops Premium": {
    short: "fogão e cooktop premium",
    conserto: "Conserto de fogão e cooktop premium",
  },
  Secadoras: {
    short: "secadora",
    conserto: "Conserto de secadora",
  },
  "Coifas e Depuradores": {
    short: "coifa e depurador",
    conserto: "Conserto de coifa e depurador",
  },
  "Adegas Climatizadas": {
    short: "adega climatizada",
    conserto: "Conserto de adega climatizada",
  },
  "Instalação de Eletrodomésticos": {
    short: "instalação de eletrodomésticos",
    conserto: "Instalação de eletrodomésticos",
  },
};

function bairroFromZonePage(zoneSlug: string, name: string, zoneLabel: string): LocalBairro {
  const shortSlug = zoneSlug.replace(/-em-porto-alegre$/, "");
  return {
    slug: shortSlug,
    name,
    zoneLabel,
    zoneSlug,
    premium: true,
  };
}

function getPriorityBairros(): LocalBairro[] {
  const fromNoble = nobleBairros.map((zone) =>
    bairroFromZonePage(zone.slug, zone.name, zone.zoneLabel ?? "Porto Alegre"),
  );

  const seen = new Set(fromNoble.map((b) => b.slug));
  const merged = [...fromNoble];

  for (const bairro of extraBairros) {
    if (!seen.has(bairro.slug)) {
      merged.push(bairro);
      seen.add(bairro.slug);
    }
  }

  return merged;
}

export function serviceBaseSlug(serviceSlug: string) {
  return serviceSlug.replace(/-em-porto-alegre$/, "");
}

export function buildLocalServiceSlug(serviceSlug: string, bairroSlug: string) {
  return `${serviceBaseSlug(serviceSlug)}-em-${bairroSlug}`;
}

function buildLocalPage(service: ServiceItem, bairro: LocalBairro): LocalServicePage {
  const phrase = servicePhrase[service.title];
  const detail = getServiceDetail(service.slug);
  const slug = buildLocalServiceSlug(service.slug, bairro.slug);
  const premiumNote = bairro.premium
    ? ` O bairro ${bairro.name} tem forte presença de imóveis de alto padrão — atendemos também marcas importadas e linha built-in com o mesmo rigor técnico.`
    : "";

  return {
    slug,
    serviceSlug: service.slug,
    serviceTitle: service.title,
    bairro,
    seoTitle: `${phrase.conserto} em ${bairro.name} — Porto Alegre`,
    seoDescription: `${phrase.conserto} em ${bairro.name} (${bairro.zoneLabel}), Porto Alegre. Visita técnica a domicílio, diagnóstico no local e garantia de ${siteConfig.warranty}. WhatsApp ${siteConfig.phoneDisplay}.`,
    h1: `${service.title} em ${bairro.name}`,
    intro: `A ServitecPoa realiza ${phrase.conserto.toLowerCase()} no bairro ${bairro.name}, em ${bairro.zoneLabel}, Porto Alegre. Atendimento a domicílio com agendamento nos turnos da manhã ou tarde, orçamento transparente e garantia de ${siteConfig.warranty}.${premiumNote}`,
    paragraphs: [
      `Nossa equipe vai até sua residência em ${bairro.name} com equipamentos de diagnóstico e experiência em ${phrase.short} de marcas nacionais e importadas. O técnico avalia o defeito no local e apresenta o orçamento antes de iniciar o reparo.`,
      `Atendemos ${bairro.name} e bairros vizinhos da ${bairro.zoneLabel}. Para cobertura completa em Porto Alegre, consulte também nossa página de ${service.title.toLowerCase()} na capital e a região ${bairro.zoneLabel.toLowerCase()}.`,
      detail
        ? `Entre os problemas mais comuns em ${phrase.short}: ${detail.problems.slice(0, 3).join("; ").toLowerCase()}. Cada caso é diagnosticado individualmente para indicar a melhor solução.`
        : `Todos os serviços incluem garantia formal de ${siteConfig.warranty} e suporte pós-atendimento pela ServitecPoa (CNPJ ${siteConfig.cnpjDisplay}).`,
    ],
    problems: detail?.problems.slice(0, 6) ?? [],
    faqs: [
      {
        question: `Vocês atendem ${phrase.short} no bairro ${bairro.name}?`,
        answer: `Sim. Realizamos atendimento a domicílio em ${bairro.name}, ${bairro.zoneLabel}, Porto Alegre. Agende pelo site ou WhatsApp ${siteConfig.phoneDisplay}.`,
      },
      {
        question: `Quanto tempo leva para agendar uma visita em ${bairro.name}?`,
        answer:
          "Normalmente conseguimos agendar visita técnica em 24 a 48 horas úteis, conforme disponibilidade de turno (manhã ou tarde). Casos urgentes podem ser avaliados pelo WhatsApp.",
      },
      {
        question: `O conserto em ${bairro.name} tem garantia?`,
        answer: `Sim. Todos os reparos realizados pela ServitecPoa em ${bairro.name} possuem garantia de ${siteConfig.warranty}.`,
      },
    ],
  };
}

function buildAllLocalPages(): LocalServicePage[] {
  const bairros = getPriorityBairros();
  const pages: LocalServicePage[] = [];

  for (const service of seoServices) {
    for (const bairro of bairros) {
      pages.push(buildLocalPage(service, bairro));
    }
  }

  return pages;
}

export const localServicePages: LocalServicePage[] = buildAllLocalPages();

export function getLocalServicePage(slug: string) {
  return localServicePages.find((page) => page.slug === slug);
}

export function getLocalPagesForService(serviceSlug: string) {
  return localServicePages.filter((page) => page.serviceSlug === serviceSlug);
}

export function getLocalPagesForBairro(bairroSlug: string) {
  return localServicePages.filter((page) => page.bairro.slug === bairroSlug);
}

export function getBairroZonePage(bairroSlug: string) {
  const bairroPage = seoZones.find(
    (zone) => zone.category === "bairro" && zone.slug.replace(/-em-porto-alegre$/, "") === bairroSlug,
  );
  return bairroPage;
}

export const priorityBairros = getPriorityBairros();
