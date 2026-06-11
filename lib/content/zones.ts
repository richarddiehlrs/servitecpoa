export type ZoneCategory = "zona" | "bairro";

export type ZonePage = {
  slug: string;
  name: string;
  category: ZoneCategory;
  zoneLabel?: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  neighborhoods: string[];
  paragraphs: string[];
};

export const seoZones: ZonePage[] = [
  {
    slug: "zona-norte-porto-alegre",
    name: "Zona Norte",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Norte Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Norte de Porto Alegre: Jardim Europa, Boa Vista, Higienópolis, Auxiliadora e região. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Zona Norte de Porto Alegre reúne bairros nobres como Jardim Europa, Boa Vista e Higienópolis, além de importantes eixos comerciais e residenciais. A ServitecPoa atende com visita técnica a domicílio.",
    neighborhoods: [
      "Jardim Europa",
      "Boa Vista",
      "Higienópolis",
      "Auxiliadora",
      "Humaitá",
      "Passo d'Areia",
      "Cristo Redentor",
      "Jardim Lindóia",
      "Sarandi",
      "Anchieta",
      "São João",
      "Navegantes",
      "São Geraldo",
      "Vila Ipiranga",
      "Jardim São Pedro",
      "Santa Maria Goretti",
    ],
    paragraphs: [
      "Realizamos conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas e linha premium na Zona Norte. Atendemos imóveis residenciais e de alto padrão com diagnóstico no local.",
      "Orçamento transparente, peças de qualidade e garantia de 90 dias em todos os serviços.",
    ],
  },
  {
    slug: "zona-sul-porto-alegre",
    name: "Zona Sul",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Sul Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Sul de Porto Alegre: Tristeza, Ipanema, Cristal, Cavalhada e região. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Zona Sul de Porto Alegre é marcada pela orla do Guaíba, ruas arborizadas e perfil predominantemente residencial. A ServitecPoa atende com assistência técnica de eletrodomésticos a domicílio.",
    neighborhoods: [
      "Tristeza",
      "Ipanema",
      "Vila Assunção",
      "Cavalhada",
      "Teresópolis",
      "Cristal",
      "Nonoai",
      "Espírito Santo",
      "Vila Conceição",
      "Guarujá",
      "Camaquã",
      "Pedra Redonda",
      "Hípica",
      "Ponta Grossa",
    ],
    paragraphs: [
      "Consertamos geladeiras, lavadoras, lava e seca, fogões, coifas e demais equipamentos na Zona Sul. Diagnóstico no local com comunicação clara sobre prazos e valores.",
      "Atendimento de segunda a sábado, nos turnos da manhã e tarde.",
    ],
  },
  {
    slug: "zona-leste-porto-alegre",
    name: "Zona Leste",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Leste Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Leste de Porto Alegre: Moinhos de Vento, Petrópolis, Três Figueiras, Bela Vista e região. ServitecPoa a domicílio.",
    intro:
      "A Zona Leste concentra alguns dos bairros mais nobres de Porto Alegre, como Moinhos de Vento, Petrópolis e Três Figueiras, além de polos universitários e áreas residenciais de alto padrão.",
    neighborhoods: [
      "Moinhos de Vento",
      "Petrópolis",
      "Três Figueiras",
      "Bela Vista",
      "Chácara das Pedras",
      "Jardim Botânico",
      "Jardim do Salso",
      "Mont Serrat",
      "Menino Deus",
      "Praia de Belas",
      "Partenon",
      "Bom Jesus",
      "Vila Jardim",
      "Jardim Carvalho",
    ],
    paragraphs: [
      "Atendemos residências e apartamentos com conserto de refrigeradores, máquinas de lavar, lava-louças, secadoras e linha premium. Técnicos qualificados com mais de 15 anos de experiência.",
      "Garantia de 90 dias e CNPJ 56.001.021/0001-86.",
    ],
  },
  {
    slug: "zona-oeste-porto-alegre",
    name: "Zona Oeste",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Oeste Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Oeste de Porto Alegre: Glória, Lomba do Pinheiro, Restinga e região. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Zona Oeste de Porto Alegre abrange áreas como Glória, Lomba do Pinheiro e Restinga. A ServitecPoa realiza assistência técnica de eletrodomésticos com visita a domicílio.",
    neighborhoods: [
      "Glória",
      "Lomba do Pinheiro",
      "Restinga",
      "Agronomia",
      "Aparício Borges",
      "Cascata",
      "Medianeira",
      "Santa Teresa",
      "Orfanotáfio",
      "Coronel Aparício Borges",
      "Belém Velho",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, cooktops premium, coifas e adegas na Zona Oeste. Atendemos casas e apartamentos com equipamentos nacionais e importados.",
      "Agendamento pelo site ou WhatsApp (51) 3051-4255.",
    ],
  },
  {
    slug: "centro-historico-porto-alegre",
    name: "Centro Histórico",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Centro Histórico Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no Centro Histórico de Porto Alegre: Bom Fim, Cidade Baixa, Independência e região. ServitecPoa a domicílio.",
    intro:
      "O Centro Histórico e seus bairros adjacentes formam o coração urbano de Porto Alegre. A ServitecPoa atende com assistência técnica de eletrodomésticos a domicílio na região central.",
    neighborhoods: [
      "Centro Histórico",
      "Bom Fim",
      "Cidade Baixa",
      "Independência",
      "Santana",
      "Farroupilha",
      "Azenha",
      "Cais do Porto",
    ],
    paragraphs: [
      "Consertamos eletrodomésticos em apartamentos e imóveis históricos reformados na região central. Diagnóstico preciso e garantia de 90 dias.",
      "Atendimento nos turnos da manhã e tarde, de segunda a sábado.",
    ],
  },
  {
    slug: "jardim-europa-porto-alegre",
    name: "Jardim Europa",
    category: "bairro",
    zoneLabel: "Zona Norte",
    seoTitle: "Assistência técnica eletrodomésticos Jardim Europa Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no Jardim Europa, Zona Norte de Porto Alegre. Linha premium a domicílio — ServitecPoa.",
    intro:
      "O Jardim Europa é um dos bairros mais nobres da Zona Norte de Porto Alegre. A ServitecPoa atende residências de alto padrão com especialização em eletrodomésticos importados e embutidos.",
    neighborhoods: [
      "Jardim Europa",
      "Passo d'Areia",
      "Cristo Redentor",
      "Vila Ipiranga",
      "Chácara das Pedras",
    ],
    paragraphs: [
      "Consertamos geladeiras Sub-Zero, cooktops Bertazzoni, coifas Falmec, lava-louças embutidas e toda linha residencial no Jardim Europa.",
      "Garantia de 90 dias, peças originais quando aplicável e técnicos com experiência em alto padrão.",
    ],
  },
  {
    slug: "boa-vista-porto-alegre",
    name: "Boa Vista",
    category: "bairro",
    zoneLabel: "Zona Norte",
    seoTitle: "Assistência técnica eletrodomésticos Boa Vista Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no Boa Vista, Zona Norte de Porto Alegre. Assistência técnica premium a domicílio — ServitecPoa.",
    intro:
      "O Boa Vista integra a Zona Norte de Porto Alegre e é referência entre os bairros nobres da capital. A ServitecPoa oferece assistência técnica de eletrodomésticos com atendimento personalizado.",
    neighborhoods: [
      "Boa Vista",
      "Higienópolis",
      "Auxiliadora",
      "Passo d'Areia",
      "Navegantes",
    ],
    paragraphs: [
      "Atendemos apartamentos e casas no Boa Vista com conserto de geladeiras, máquinas de lavar, lava e seca, fogões premium e coifas.",
      "Agende pelo formulário do site ou WhatsApp (51) 3051-4255.",
    ],
  },
  {
    slug: "higienopolis-porto-alegre",
    name: "Higienópolis",
    category: "bairro",
    zoneLabel: "Zona Norte",
    seoTitle: "Assistência técnica eletrodomésticos Higienópolis Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos em Higienópolis, Zona Norte de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Higienópolis é um dos bairros mais tradicionais e valorizados da Zona Norte de Porto Alegre. A ServitecPoa realiza conserto de eletrodomésticos a domicílio com padrão técnico premium.",
    neighborhoods: [
      "Higienópolis",
      "Boa Vista",
      "Auxiliadora",
      "São João",
      "Jardim Lindóia",
    ],
    paragraphs: [
      "Consertamos equipamentos nacionais e importados em apartamentos e casas de Higienópolis. Atendimento nos turnos da manhã e tarde.",
      "Empresa com CNPJ ativo e garantia formal de 90 dias.",
    ],
  },
  {
    slug: "auxiliadora-porto-alegre",
    name: "Auxiliadora",
    category: "bairro",
    zoneLabel: "Zona Norte",
    seoTitle: "Assistência técnica eletrodomésticos Auxiliadora Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Auxiliadora, Zona Norte de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Auxiliadora é um bairro nobre da Zona Norte de Porto Alegre, com forte presença residencial de alto padrão. A ServitecPoa atende com assistência técnica especializada.",
    neighborhoods: [
      "Auxiliadora",
      "Boa Vista",
      "Higienópolis",
      "Passo d'Areia",
      "Navegantes",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, cooktops premium e coifas na Auxiliadora. Técnicos qualificados com experiência em linha residencial e importada.",
      "Orçamento transparente e garantia de 90 dias.",
    ],
  },
  {
    slug: "moinhos-de-vento-porto-alegre",
    name: "Moinhos de Vento",
    category: "bairro",
    zoneLabel: "Zona Leste",
    seoTitle: "Conserto eletrodomésticos Moinhos de Vento Porto Alegre",
    seoDescription:
      "Assistência técnica de eletrodomésticos em Moinhos de Vento, Zona Leste de Porto Alegre. Linha premium a domicílio — ServitecPoa.",
    intro:
      "Moinhos de Vento é um dos bairros mais tradicionais e sofisticados da Zona Leste de Porto Alegre. A ServitecPoa atende com especialização em marcas importadas e eletrodomésticos embutidos.",
    neighborhoods: [
      "Moinhos de Vento",
      "Três Figueiras",
      "Petrópolis",
      "Bela Vista",
      "Independência",
    ],
    paragraphs: [
      "Consertamos geladeiras Sub-Zero, cooktops Bertazzoni, coifas Falmec, lava-louças embutidas e toda linha residencial.",
      "Garantia de 90 dias e atendimento discreto a domicílio.",
    ],
  },
  {
    slug: "petropolis-porto-alegre",
    name: "Petrópolis",
    category: "bairro",
    zoneLabel: "Zona Leste",
    seoTitle: "Assistência técnica eletrodomésticos Petrópolis Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no bairro Petrópolis, Zona Leste de Porto Alegre. Visita técnica a domicílio — ServitecPoa.",
    intro:
      "Petrópolis é um bairro nobre da Zona Leste de Porto Alegre, com perfil residencial arborizado e alto padrão. A ServitecPoa oferece assistência técnica de eletrodomésticos a domicílio.",
    neighborhoods: [
      "Petrópolis",
      "Três Figueiras",
      "Bela Vista",
      "Jardim Botânico",
      "Moinhos de Vento",
    ],
    paragraphs: [
      "Atendemos apartamentos e casas com conserto de geladeiras, máquinas de lavar, lava e seca, fogões e coifas.",
      "Agende pelo formulário do site ou WhatsApp.",
    ],
  },
  {
    slug: "tres-figueiras-porto-alegre",
    name: "Três Figueiras",
    category: "bairro",
    zoneLabel: "Zona Leste",
    seoTitle: "Assistência técnica eletrodomésticos Três Figueiras Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos em Três Figueiras, Zona Leste de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Três Figueiras é um dos bairros mais valorizados da Zona Leste de Porto Alegre. A ServitecPoa atende com assistência técnica de eletrodomésticos premium a domicílio.",
    neighborhoods: [
      "Três Figueiras",
      "Petrópolis",
      "Moinhos de Vento",
      "Bela Vista",
      "Chácara das Pedras",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, coifas e linha built-in em Três Figueiras. Diagnóstico preciso e garantia de 90 dias.",
      "Peças de qualidade e comunicação transparente sobre prazos.",
    ],
  },
  {
    slug: "bela-vista-porto-alegre",
    name: "Bela Vista",
    category: "bairro",
    zoneLabel: "Zona Leste",
    seoTitle: "Assistência técnica eletrodomésticos Bela Vista Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Bela Vista, Zona Leste de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Bela Vista integra a Zona Leste de Porto Alegre e figura entre os bairros mais nobres da cidade. A ServitecPoa realiza conserto de eletrodomésticos com visita técnica agendada.",
    neighborhoods: [
      "Bela Vista",
      "Três Figueiras",
      "Petrópolis",
      "Moinhos de Vento",
      "Menino Deus",
    ],
    paragraphs: [
      "Atendemos imóveis de alto padrão na Bela Vista com conserto de eletrodomésticos nacionais e importados.",
      "Garantia de 90 dias em todos os reparos realizados.",
    ],
  },
  {
    slug: "mont-serrat-porto-alegre",
    name: "Mont Serrat",
    category: "bairro",
    zoneLabel: "Zona Leste",
    seoTitle: "Assistência técnica eletrodomésticos Mont Serrat Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos em Mont Serrat, Zona Leste de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Mont Serrat é um bairro nobre da Zona Leste de Porto Alegre. A ServitecPoa atende com assistência técnica especializada em eletrodomésticos residenciais e premium.",
    neighborhoods: [
      "Mont Serrat",
      "Menino Deus",
      "Praia de Belas",
      "Três Pinheiros",
      "Santa Teresa",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, cooktops premium e coifas em Mont Serrat.",
      "Orçamento transparente e garantia de 90 dias.",
    ],
  },
];

export function getZoneBySlug(slug: string) {
  return seoZones.find((zone) => zone.slug === slug);
}

export const poaZones = seoZones.filter((z) => z.category === "zona");
export const nobleBairros = seoZones.filter((z) => z.category === "bairro");
