export type ZonePage = {
  slug: string;
  name: string;
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
    seoTitle: "Assistência técnica eletrodomésticos Zona Sul Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Sul de Porto Alegre: Moinhos de Vento, Petrópolis, Tristeza e adjacências. Atendimento a domicílio — ServitecPoa.",
    intro:
      "A Zona Sul concentra grande parte da demanda por assistência técnica de eletrodomésticos em Porto Alegre. A ServitecPoa atende residências e apartamentos com visita técnica agendada.",
    neighborhoods: [
      "Moinhos de Vento",
      "Petrópolis",
      "Tristeza",
      "Auxiliadora",
      "Bela Vista",
      "Cristal",
      "Vila Assunção",
      "Chácara das Pedras",
    ],
    paragraphs: [
      "Realizamos conserto de geladeiras, máquinas de lavar, lava e seca, coifas, adegas e linha premium na Zona Sul. Nossos técnicos chegam no turno combinado, com ferramentas e peças mais comuns para agilizar o reparo.",
      "Atendemos tanto eletrodomésticos nacionais quanto importados de alto padrão, comuns em imóveis da região. Orçamento transparente e garantia de 90 dias em todos os serviços.",
    ],
    isMetro: false,
  },
  {
    slug: "zona-norte-porto-alegre",
    name: "Zona Norte",
    seoTitle: "Assistência técnica eletrodomésticos Zona Norte Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Norte de Porto Alegre. Técnico a domicílio em Sarandi, Humaitá, Jardim Lindóia e região.",
    intro:
      "A Zona Norte de Porto Alegre é amplamente atendida pela ServitecPoa. Oferecemos assistência técnica de eletrodomésticos a domicílio com agendamento flexível.",
    neighborhoods: [
      "Sarandi",
      "Humaitá",
      "Jardim Lindóia",
      "Nossa Senhora das Graças",
      "Passo da Areia",
      "São Geraldo",
      "Rio Branco",
      "Anchieta",
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
    seoTitle: "Assistência técnica eletrodomésticos Zona Leste Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Leste de Porto Alegre: Partenon, Vila Jardim, Cidade Baixa e adjacências. ServitecPoa a domicílio.",
    intro:
      "A Zona Leste de Porto Alegre conta com atendimento da ServitecPoa para conserto e manutenção de eletrodomésticos em domicílio.",
    neighborhoods: [
      "Partenon",
      "Vila Jardim",
      "Cidade Baixa",
      "Praia de Belas",
      "Menino Deus",
      "Três Figueiras",
      "Ipanema",
      "Jardim Botânico",
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
    seoTitle: "Assistência técnica eletrodomésticos Zona Oeste Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos na Zona Oeste de Porto Alegre: Centro Histórico, Bom Fim, Cidade Baixa e região. Atendimento a domicílio.",
    intro:
      "A Zona Oeste e o Centro de Porto Alegre são atendidos pela ServitecPoa com visita técnica a domicílio para todos os tipos de eletrodomésticos.",
    neighborhoods: [
      "Centro Histórico",
      "Bom Fim",
      "Independência",
      "Cidade Baixa",
      "Azenha",
      "Santana",
      "Farrapos",
      "Lomba do Pinheiro",
    ],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, cooktops premium, coifas e adegas na Zona Oeste. Atendemos prédios antigos e imóveis reformados com equipamentos embutidos.",
      "Agendamento pelo site ou WhatsApp (51) 3051-4255.",
    ],
    isMetro: false,
  },
  {
    slug: "moinhos-de-vento-porto-alegre",
    name: "Moinhos de Vento",
    seoTitle: "Conserto eletrodomésticos Moinhos de Vento Porto Alegre",
    seoDescription:
      "Assistência técnica de eletrodomésticos em Moinhos de Vento, Porto Alegre. Linha premium e nacionais a domicílio — ServitecPoa.",
    intro:
      "Moinhos de Vento é um dos bairros com maior demanda por assistência técnica premium em Porto Alegre. A ServitecPoa atende com especialização em marcas importadas.",
    neighborhoods: ["Moinhos de Vento", "Três Figueiras", "Petrópolis"],
    paragraphs: [
      "Consertamos geladeiras Sub-Zero, cooktops Bertazzoni, coifas Falmec, lava-louças embutidas e toda linha residencial. Atendimento discreto e profissional a domicílio.",
      "Garantia de 90 dias, peças originais quando aplicável e técnicos com experiência em alto padrão.",
    ],
    isMetro: false,
  },
  {
    slug: "petropolis-porto-alegre",
    name: "Petrópolis",
    seoTitle: "Assistência técnica eletrodomésticos Petrópolis Porto Alegre",
    seoDescription:
      "Conserto de eletrodomésticos no bairro Petrópolis, Porto Alegre. Visita técnica a domicílio com garantia — ServitecPoa.",
    intro:
      "No bairro Petrópolis, a ServitecPoa oferece assistência técnica de eletrodomésticos com atendimento a domicílio e foco em qualidade.",
    neighborhoods: ["Petrópolis", "Três Figueiras", "Bela Vista"],
    paragraphs: [
      "Atendemos apartamentos e casas com conserto de geladeiras, máquinas de lavar, lava e seca, fogões e coifas. Diagnóstico preciso e orçamento antes do reparo.",
      "Agende pelo formulário do site ou WhatsApp.",
    ],
    isMetro: false,
  },
  {
    slug: "bom-fim-porto-alegre",
    name: "Bom Fim",
    seoTitle: "Conserto eletrodomésticos Bom Fim Porto Alegre",
    seoDescription:
      "Assistência técnica de eletrodomésticos no Bom Fim, Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "O Bom Fim é um dos bairros mais tradicionais de Porto Alegre. A ServitecPoa realiza conserto de eletrodomésticos a domicílio na região.",
    neighborhoods: ["Bom Fim", "Independência", "Centro Histórico"],
    paragraphs: [
      "Consertamos equipamentos nacionais e importados em apartamentos e casas do Bom Fim. Atendimento nos turnos da manhã e tarde, de segunda a sábado.",
      "Empresa com CNPJ ativo e garantia formal de 90 dias.",
    ],
    isMetro: false,
  },
  {
    slug: "canoas-regiao-metropolitana",
    name: "Canoas",
    seoTitle: "Assistência técnica eletrodomésticos Canoas RS",
    seoDescription:
      "Conserto de eletrodomésticos em Canoas, Região Metropolitana de Porto Alegre. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Canoas faz parte da área de atendimento da ServitecPoa na Região Metropolitana de Porto Alegre. Oferecemos visita técnica a domicílio.",
    neighborhoods: ["Centro", "Marechal Rondon", "Niterói", "Estância Velha", "São Luis"],
    paragraphs: [
      "Conserto de geladeiras, máquinas de lavar, lava e seca, fogões, coifas e adegas em Canoas. Mesmo padrão de qualidade do atendimento em Porto Alegre.",
      "Agendamento pelo site ou WhatsApp (51) 3051-4255.",
    ],
    isMetro: true,
  },
  {
    slug: "gravatai-regiao-metropolitana",
    name: "Gravataí",
    seoTitle: "Assistência técnica eletrodomésticos Gravataí RS",
    seoDescription:
      "Conserto de eletrodomésticos em Gravataí, RMS Porto Alegre. Técnico a domicílio — ServitecPoa.",
    intro:
      "Gravataí é atendida pela ServitecPoa com assistência técnica de eletrodomésticos a domicílio na Região Metropolitana.",
    neighborhoods: ["Centro", "Morada do Vale", "Passo da Caveira", "Parque dos Eucaliptos"],
    paragraphs: [
      "Realizamos conserto e manutenção de eletrodomésticos nacionais e premium em Gravataí. Diagnóstico no local, peças de qualidade e garantia de 90 dias.",
      "Solicite visita pelo formulário de atendimento a domicílio.",
    ],
    isMetro: true,
  },
  {
    slug: "novo-hamburgo-regiao-metropolitana",
    name: "Novo Hamburgo",
    seoTitle: "Assistência técnica eletrodomésticos Novo Hamburgo RS",
    seoDescription:
      "Conserto de eletrodomésticos em Novo Hamburgo, RMS. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Novo Hamburgo conta com atendimento da ServitecPoa para conserto de eletrodomésticos na Região Metropolitana de Porto Alegre.",
    neighborhoods: ["Centro", "Rondônia", "Liberdade", "Canudos", "Vila Nova"],
    paragraphs: [
      "Consertamos geladeiras, lavadoras, lava e seca, coifas e linha premium em Novo Hamburgo. Técnicos qualificados com experiência de mais de 15 anos.",
      "Orçamento transparente e garantia formal.",
    ],
    isMetro: true,
  },
  {
    slug: "sao-leopoldo-regiao-metropolitana",
    name: "São Leopoldo",
    seoTitle: "Assistência técnica eletrodomésticos São Leopoldo RS",
    seoDescription:
      "Conserto de eletrodomésticos em São Leopoldo, RMS Porto Alegre. Visita técnica a domicílio — ServitecPoa.",
    intro:
      "São Leopoldo é atendida pela ServitecPoa com assistência técnica de eletrodomésticos a domicílio.",
    neighborhoods: ["Centro", "Feitoria", "Campestre", "Scharlau", "Rio Branco"],
    paragraphs: [
      "Atendemos residências em São Leopoldo com conserto de refrigeradores, máquinas de lavar, fogões, coifas e adegas. Agendamento flexível de segunda a sábado.",
      "Empresa formalizada com CNPJ 56.001.021/0001-86.",
    ],
    isMetro: true,
  },
  {
    slug: "esteio-regiao-metropolitana",
    name: "Esteio",
    seoTitle: "Assistência técnica eletrodomésticos Esteio RS",
    seoDescription:
      "Conserto de eletrodomésticos em Esteio, Região Metropolitana. Atendimento a domicílio — ServitecPoa.",
    intro:
      "Esteio faz parte da cobertura da ServitecPoa na Região Metropolitana de Porto Alegre.",
    neighborhoods: ["Centro", "Tamandaré", "São José", "Parque Primavera"],
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
