export type ZoneCategory = "zona" | "bairro" | "rms";

export type ZonePage = {
  slug: string;
  name: string;
  category: ZoneCategory;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  neighborhoods: string[];
  paragraphs: string[];
  isMetro: boolean;
};

export const seoZones: ZonePage[] = [
  {
    slug: "zona-sul-porto-alegre",
    name: "Zona Sul",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Sul Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Sul de Porto Alegre: Jardim Europa, Boa Vista, Moinhos de Vento, Petrópolis e adjacências. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Zona Sul reúne os bairros mais nobres de Porto Alegre e concentra grande demanda por assistência técnica de eletrodomésticos premium. A ServitecPoa atende residências e apartamentos de alto padrão com visita técnica agendada.",
    neighborhoods: [
      "Jardim Europa",
      "Boa Vista",
      "Moinhos de Vento",
      "Petrópolis",
      "Três Figueiras",
      "Bela Vista",
      "Auxiliadora",
      "Chácara das Pedras",
      "Vila Conceição",
      "Vila Assunção",
      "Cristal",
      "Tristeza",
      "Ipanema",
      "Cavalhada",
      "Hipódromo",
      "Vila João Pessoa",
    ],
    paragraphs: [
      "Realizamos conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas e linha premium na Zona Sul. Atendemos imóveis com eletrodomésticos embutidos Bertazzoni, Sub-Zero, Falmec e marcas nacionais.",
      "Nossos técnicos chegam no turno combinado, com diagnóstico no local, orçamento transparente e garantia de 90 dias em todos os serviços.",
    ],
    isMetro: false,
  },
  {
    slug: "zona-norte-porto-alegre",
    name: "Zona Norte",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Norte Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Norte de Porto Alegre: Higienópolis, Rio Branco, Sarandi e região. Técnico a domicílio — ServitecPoa.",
    intro:
      "A Zona Norte de Porto Alegre inclui bairros nobres como Higienópolis e Rio Branco, além de regiões residenciais amplas. A ServitecPoa oferece assistência técnica de eletrodomésticos a domicílio com agendamento flexível.",
    neighborhoods: [
      "Higienópolis",
      "Rio Branco",
      "Sarandi",
      "Humaitá",
      "Nossa Senhora das Graças",
      "Jardim Lindóia",
      "Anchieta",
      "Passo da Areia",
      "São Geraldo",
      "Jardim São Pedro",
      "Cachoeirinha",
      "Vila Jardim",
      "Jardim Itu",
      "Vila Ipiranga",
      "Navegantes",
    ],
    paragraphs: [
      "Consertamos geladeiras, lavadoras, lava e seca, fogões, coifas e demais equipamentos na Zona Norte. Diagnóstico no local, peças de qualidade e comunicação clara sobre prazos.",
      "Atendimento de segunda a sábado, nos turnos da manhã e tarde. Solicite visita pelo formulário ou WhatsApp.",
    ],
    isMetro: false,
  },
  {
    slug: "zona-leste-porto-alegre",
    name: "Zona Leste",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Leste Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Leste de Porto Alegre: Mont Serrat, Menino Deus, Praia de Belas, Cidade Baixa e adjacências. ServitecPoa a domicílio.",
    intro:
      "A Zona Leste de Porto Alegre abrange bairros nobres como Mont Serrat e Menino Deus, além de regiões centrais como Cidade Baixa e Praia de Belas. A ServitecPoa atende com conserto e manutenção de eletrodomésticos em domicílio.",
    neighborhoods: [
      "Mont Serrat",
      "Menino Deus",
      "Praia de Belas",
      "Cidade Baixa",
      "Bom Fim",
      "Independência",
      "Partenon",
      "Jardim Botânico",
      "Três Pinheiros",
      "Santa Teresa",
      "São João",
      "Agronomia",
      "Cascata",
    ],
    paragraphs: [
      "Atendemos residências e apartamentos com conserto de refrigeradores, máquinas de lavar, lava-louças, secadoras e linha premium. Técnicos qualificados com mais de 15 anos de experiência.",
      "Garantia de 90 dias e CNPJ 56.001.021/0001-86. Empresa formalizada para sua tranquilidade.",
    ],
    isMetro: false,
  },
  {
    slug: "zona-oeste-porto-alegre",
    name: "Zona Oeste",
    category: "zona",
    seoTitle: "Assistência técnica eletrodomésticos Zona Oeste Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Oeste de Porto Alegre: Centro Histórico, Azenha, Santana e região. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Zona Oeste e o Centro Histórico de Porto Alegre são atendidos pela ServitecPoa com visita técnica a domicílio para todos os tipos de eletrodomésticos, incluindo imóveis antigos reformados com cozinha planejada.",
    neighborhoods: [
      "Centro Histórico",
      "Azenha",
      "Santana",
      "Farrapos",
      "Cais do Porto",
      "Arquipélago",
      "Lomba do Pinheiro",
      "Restinga",
      "Glória",
      "Vila Farrapos",
      "São José",
      "Orfanotáfio",
      "Coronel Aparício Borges",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, cooktops premium, coifas e adegas na Zona Oeste. Atendemos prédios históricos e apartamentos com equipamentos embutidos.",
      "Agendamento pelo site ou WhatsApp (51) 3051-4255.",
    ],
    isMetro: false,
  },
  {
    slug: "jardim-europa-porto-alegre",
    name: "Jardim Europa",
    category: "bairro",
    seoTitle: "Assistência técnica eletrodomésticos Jardim Europa Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no Jardim Europa, Zona Sul de Porto Alegre. Linha premium e nacionais a domicílio — ServitecPoa.",
    intro:
      "O Jardim Europa é um dos bairros mais nobres da Zona Sul de Porto Alegre. A ServitecPoa atende residências de alto padrão com especialização em eletrodomésticos importados e embutidos.",
    neighborhoods: [
      "Jardim Europa",
      "Boa Vista",
      "Moinhos de Vento",
      "Petrópolis",
      "Bela Vista",
    ],
    paragraphs: [
      "Consertamos geladeiras Sub-Zero, cooktops Bertazzoni, coifas Falmec, lava-louças embutidas e toda linha residencial no Jardim Europa. Atendimento discreto e profissional a domicílio.",
      "Garantia de 90 dias, peças originais quando aplicável e técnicos com experiência em alto padrão.",
    ],
    isMetro: false,
  },
  {
    slug: "boa-vista-porto-alegre",
    name: "Boa Vista",
    category: "bairro",
    seoTitle: "Assistência técnica eletrodomésticos Boa Vista Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no Boa Vista, Zona Sul de Porto Alegre. Assistência técnica premium a domicílio — ServitecPoa.",
    intro:
      "O Boa Vista é referência entre os bairros nobres de Porto Alegre, na Zona Sul. A ServitecPoa oferece assistência técnica de eletrodomésticos com foco em qualidade e atendimento personalizado.",
    neighborhoods: [
      "Boa Vista",
      "Jardim Europa",
      "Moinhos de Vento",
      "Petrópolis",
      "Auxiliadora",
    ],
    paragraphs: [
      "Atendemos apartamentos e casas no Boa Vista com conserto de geladeiras, máquinas de lavar, lava e seca, fogões premium e coifas. Diagnóstico preciso e orçamento antes do reparo.",
      "Agende pelo formulário do site ou WhatsApp (51) 3051-4255.",
    ],
    isMetro: false,
  },
  {
    slug: "moinhos-de-vento-porto-alegre",
    name: "Moinhos de Vento",
    category: "bairro",
    seoTitle: "Conserto eletrodomésticos Moinhos de Vento Porto Alegre",
    seoDescription:
      "Assistência técnica de eletrodomésticos em Moinhos de Vento, Zona Sul de Porto Alegre. Linha premium e nacionais a domicílio — ServitecPoa.",
    intro:
      "Moinhos de Vento é um dos bairros mais tradicionais e nobres da Zona Sul. A ServitecPoa atende com especialização em marcas importadas e eletrodomésticos embutidos.",
    neighborhoods: [
      "Moinhos de Vento",
      "Três Figueiras",
      "Petrópolis",
      "Jardim Europa",
      "Boa Vista",
    ],
    paragraphs: [
      "Consertamos geladeiras Sub-Zero, cooktops Bertazzoni, coifas Falmec, lava-louças embutidas e toda linha residencial. Atendimento discreto e profissional a domicílio.",
      "Garantia de 90 dias, peças originais quando aplicável e técnicos com experiência em alto padrão.",
    ],
    isMetro: false,
  },
  {
    slug: "petropolis-porto-alegre",
    name: "Petrópolis",
    category: "bairro",
    seoTitle: "Assistência técnica eletrodomésticos Petrópolis Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no bairro Petrópolis, Zona Sul de Porto Alegre. Visita técnica a domicílio com garantia — ServitecPoa.",
    intro:
      "Petrópolis é um bairro nobre da Zona Sul de Porto Alegre. A ServitecPoa oferece assistência técnica de eletrodomésticos com atendimento a domicílio e foco em qualidade.",
    neighborhoods: [
      "Petrópolis",
      "Três Figueiras",
      "Bela Vista",
      "Moinhos de Vento",
      "Auxiliadora",
    ],
    paragraphs: [
      "Atendemos apartamentos e casas com conserto de geladeiras, máquinas de lavar, lava e seca, fogões e coifas. Diagnóstico preciso e orçamento antes do reparo.",
      "Agende pelo formulário do site ou WhatsApp.",
    ],
    isMetro: false,
  },
  {
    slug: "higienopolis-porto-alegre",
    name: "Higienópolis",
    category: "bairro",
    seoTitle: "Assistência técnica eletrodomésticos Higienópolis Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos em Higienópolis, Zona Norte de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Higienópolis é um dos bairros mais valorizados da Zona Norte de Porto Alegre. A ServitecPoa realiza conserto de eletrodomésticos a domicílio com padrão técnico premium.",
    neighborhoods: [
      "Higienópolis",
      "Rio Branco",
      "Sarandi",
      "Nossa Senhora das Graças",
      "Jardim Lindóia",
    ],
    paragraphs: [
      "Consertamos equipamentos nacionais e importados em apartamentos e casas de Higienópolis. Atendimento nos turnos da manhã e tarde, de segunda a sábado.",
      "Empresa com CNPJ ativo e garantia formal de 90 dias.",
    ],
    isMetro: false,
  },
  {
    slug: "mont-serrat-porto-alegre",
    name: "Mont Serrat",
    category: "bairro",
    seoTitle: "Assistência técnica eletrodomésticos Mont Serrat Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos em Mont Serrat, Zona Leste de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Mont Serrat é um bairro nobre da Zona Leste de Porto Alegre, com forte presença de imóveis de alto padrão. A ServitecPoa atende com assistência técnica especializada.",
    neighborhoods: [
      "Mont Serrat",
      "Menino Deus",
      "Praia de Belas",
      "Três Pinheiros",
      "Santa Teresa",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, cooktops premium e coifas em Mont Serrat. Técnicos qualificados com experiência em linha residencial e importada.",
      "Orçamento transparente e garantia de 90 dias em todos os reparos.",
    ],
    isMetro: false,
  },
  {
    slug: "canoas-regiao-metropolitana",
    name: "Canoas",
    category: "rms",
    seoTitle: "Assistência técnica eletrodomésticos Canoas RS",
    seoDescription:
      "Conserto de eletrodomésticos em Canoas, Região Metropolitana de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Canoas faz parte da área de atendimento da ServitecPoa na Região Metropolitana de Porto Alegre. Oferecemos visita técnica a domicílio.",
    neighborhoods: [
      "Centro",
      "Marechal Rondon",
      "Niterói",
      "Estância Velha",
      "São Luís",
      "Igara",
      "Harmonia",
      "Mathias Velho",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, lava e seca, fogões, coifas e adegas em Canoas. Mesmo padrão de qualidade do atendimento em Porto Alegre.",
      "Agendamento pelo site ou WhatsApp (51) 3051-4255.",
    ],
    isMetro: true,
  },
  {
    slug: "gravatai-regiao-metropolitana",
    name: "Gravataí",
    category: "rms",
    seoTitle: "Assistência técnica eletrodomésticos Gravataí RS",
    seoDescription:
      "Conserto de eletrodomésticos em Gravataí, RMS Porto Alegre. Técnico a domicílio — ServitecPoa.",
    intro:
      "Gravataí é atendida pela ServitecPoa com assistência técnica de eletrodomésticos a domicílio na Região Metropolitana.",
    neighborhoods: [
      "Centro",
      "Morada do Vale",
      "Passo da Caveira",
      "Parque dos Eucaliptos",
      "Barnabé",
      "União",
    ],
    paragraphs: [
      "Realizamos conserto e manutenção de eletrodomésticos nacionais e premium em Gravataí. Diagnóstico no local, peças de qualidade e garantia de 90 dias.",
      "Solicite visita pelo formulário de atendimento a domicílio.",
    ],
    isMetro: true,
  },
  {
    slug: "novo-hamburgo-regiao-metropolitana",
    name: "Novo Hamburgo",
    category: "rms",
    seoTitle: "Assistência técnica eletrodomésticos Novo Hamburgo RS",
    seoDescription:
      "Conserto de eletrodomésticos em Novo Hamburgo, RMS. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Novo Hamburgo conta com atendimento da ServitecPoa para conserto de eletrodomésticos na Região Metropolitana de Porto Alegre.",
    neighborhoods: [
      "Centro",
      "Rondônia",
      "Liberdade",
      "Canudos",
      "Vila Nova",
      "Guarani",
      "Ideal",
    ],
    paragraphs: [
      "Consertamos geladeiras, lavadoras, lava e seca, coifas e linha premium em Novo Hamburgo. Técnicos qualificados com experiência de mais de 15 anos.",
      "Orçamento transparente e garantia formal.",
    ],
    isMetro: true,
  },
  {
    slug: "sao-leopoldo-regiao-metropolitana",
    name: "São Leopoldo",
    category: "rms",
    seoTitle: "Assistência técnica eletrodomésticos São Leopoldo RS",
    seoDescription:
      "Conserto de eletrodomésticos em São Leopoldo, RMS Porto Alegre. Visita técnica a domicílio — ServitecPoa.",
    intro:
      "São Leopoldo é atendida pela ServitecPoa com assistência técnica de eletrodomésticos a domicílio.",
    neighborhoods: [
      "Centro",
      "Feitoria",
      "Campestre",
      "Scharlau",
      "Rio dos Sinos",
      "São José",
    ],
    paragraphs: [
      "Atendemos residências em São Leopoldo com conserto de refrigeradores, máquinas de lavar, fogões, coifas e adegas. Agendamento flexível de segunda a sábado.",
      "Empresa formalizada com CNPJ 56.001.021/0001-86.",
    ],
    isMetro: true,
  },
  {
    slug: "esteio-regiao-metropolitana",
    name: "Esteio",
    category: "rms",
    seoTitle: "Assistência técnica eletrodomésticos Esteio RS",
    seoDescription:
      "Conserto de eletrodomésticos em Esteio, Região Metropolitana. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Esteio faz parte da cobertura da ServitecPoa na Região Metropolitana de Porto Alegre.",
    neighborhoods: [
      "Centro",
      "Tamandaré",
      "São José",
      "Parque Primavera",
      "Jardim Planalto",
      "Olímpica",
    ],
    paragraphs: [
      "Conserto de eletrodomésticos a domicílio em Esteio, com o mesmo padrão de qualidade de Porto Alegre. Garantia de 90 dias em todos os reparos.",
      "Fale pelo WhatsApp ou preencha o formulário no site.",
    ],
    isMetro: true,
  },
];

export function getZoneBySlug(slug: string) {
  return seoZones.find((zone) => zone.slug === slug);
}

export const poaZones = seoZones.filter((z) => z.category === "zona");
export const nobleBairros = seoZones.filter((z) => z.category === "bairro");
export const rmsCities = seoZones.filter((z) => z.category === "rms");
