export type BrandPage = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  paragraphs: string[];
  services: string[];
  isPremium: boolean;
};

function brandSlug(name: string) {
  return `conserto-${name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}-porto-alegre`;
}

const brandData: Omit<BrandPage, "slug">[] = [
  {
    name: "Brastemp",
    seoTitle: "Conserto Brastemp em Porto Alegre",
    seoDescription:
      "Assistência técnica Brastemp em Porto Alegre: geladeiras, máquinas de lavar, lava e seca e fogões. Atendimento a domicílio com garantia de 90 dias.",
    intro:
      "A Brastemp é uma das marcas mais presentes nos lares de Porto Alegre. A ServitecPoa oferece conserto Brastemp a domicílio com diagnóstico preciso e peças de qualidade.",
    paragraphs: [
      "Atendemos geladeiras frost free, duplex, máquinas de lavar, lava e seca, fogões e micro-ondas Brastemp. Problemas em placa eletrônica, compressor, bomba d'água e sensores são resolvidos por técnicos com experiência na marca.",
      "O atendimento a domicílio evita o transtorno de levar o equipamento a uma assistência. Agendamos visita nos turnos da manhã ou tarde, com orçamento transparente antes do reparo.",
    ],
    services: ["Geladeiras e Freezers", "Máquinas de Lavar", "Lava e Seca", "Fogões e Cooktops Premium"],
    isPremium: false,
  },
  {
    name: "Consul",
    seoTitle: "Conserto Consul em Porto Alegre",
    seoDescription:
      "Técnico Consul em Porto Alegre para geladeiras, lavadoras e freezers. Assistência técnica de eletrodomésticos a domicílio — ServitecPoa.",
    intro:
      "Consul é sinônimo de confiança no mercado brasileiro. Realizamos conserto Consul em Porto Alegre com foco em solução definitiva e garantia formal.",
    paragraphs: [
      "Trabalhamos com toda linha Consul residencial: refrigeradores, freezers, máquinas de lavar e fogões. Nosso diagnóstico identifica falhas em componentes mecânicos e eletrônicos.",
      "Com mais de 15 anos de experiência, a ServitecPoa é referência em assistência técnica de eletrodomésticos em Porto Alegre.",
    ],
    services: ["Geladeiras e Freezers", "Máquinas de Lavar", "Lava e Seca"],
    isPremium: false,
  },
  {
    name: "Samsung",
    seoTitle: "Conserto Samsung em Porto Alegre",
    seoDescription:
      "Assistência técnica Samsung em Porto Alegre: geladeiras, lava e seca, máquinas de lavar. Atendimento a domicílio com peças originais.",
    intro:
      "Equipamentos Samsung combinam tecnologia e design. A ServitecPoa conserta Samsung em Porto Alegre com conhecimento em placa eletrônica, sensores e sistemas inteligentes.",
    paragraphs: [
      "Atendemos geladeiras French Door, side by side, lava e seca AddWash e máquinas de lavar Samsung. Erros no display, falhas de conectividade e problemas mecânicos são diagnosticados na visita.",
      "Priorizamos peças de procedência confiável e comunicação clara sobre prazos e valores.",
    ],
    services: ["Geladeiras e Freezers", "Máquinas de Lavar", "Lava e Seca"],
    isPremium: false,
  },
  {
    name: "Electrolux",
    seoTitle: "Conserto Electrolux em Porto Alegre",
    seoDescription:
      "Conserto Electrolux em Porto Alegre: geladeiras, máquinas de lavar, lava-louças e secadoras. Visita técnica a domicílio — ServitecPoa.",
    intro:
      "A Electrolux é uma das marcas mais solicitadas em assistência técnica. Oferecemos conserto Electrolux em Porto Alegre com atendimento profissional a domicílio.",
    paragraphs: [
      "Reparamos geladeiras Inverse, máquinas de lavar, lava-louças, secadoras e fogões Electrolux. Problemas em compressor, placa, bomba e sensores de umidade são comuns e tratados com diagnóstico técnico.",
      "Nossa equipe atende Porto Alegre com agendamento flexível e garantia de 90 dias.",
    ],
    services: ["Geladeiras e Freezers", "Máquinas de Lavar", "Lava e Seca", "Lava-louças", "Secadoras"],
    isPremium: false,
  },
  {
    name: "LG",
    seoTitle: "Conserto LG em Porto Alegre",
    seoDescription:
      "Assistência técnica LG em Porto Alegre para geladeiras, lava e seca e máquinas de lavar. ServitecPoa — atendimento a domicílio.",
    intro:
      "A LG oferece eletrodomésticos com tecnologia avançada. A ServitecPoa realiza conserto LG em Porto Alegre com experiência em linha residencial e inverter.",
    paragraphs: [
      "Atendemos geladeiras Smart Inverter, lava e seca e lavadoras LG. Falhas em placa, motor, sensor e sistema de drenagem são identificadas com testes específicos.",
      "Atendimento a domicílio em toda Porto Alegre, com orçamento apresentado antes de iniciar o reparo.",
    ],
    services: ["Geladeiras e Freezers", "Máquinas de Lavar", "Lava e Seca"],
    isPremium: false,
  },
  {
    name: "Bertazzoni",
    seoTitle: "Conserto Bertazzoni em Porto Alegre",
    seoDescription:
      "Assistência técnica Bertazzoni em Porto Alegre: cooktops, fornos e fogões premium. Especialistas em linha built-in italiana.",
    intro:
      "Bertazzoni é referência em cozinhas de alto padrão. A ServitecPoa é especialista em conserto Bertazzoni em Porto Alegre, com experiência em linha built-in e importada.",
    paragraphs: [
      "Atendemos cooktops a gás e indução, fornos embutidos e combinações Bertazzoni. Diagnóstico de ignição, válvulas, módulos eletrônicos e sensores de temperatura com procedimentos específicos da marca.",
      "Equipamentos premium exigem técnico qualificado — trabalhamos com peças de qualidade e garantia de 90 dias em todos os serviços.",
    ],
    services: ["Fogões e Cooktops Premium", "Instalação de Eletrodomésticos"],
    isPremium: true,
  },
  {
    name: "Sub-Zero",
    seoTitle: "Conserto Sub-Zero em Porto Alegre",
    seoDescription:
      "Assistência técnica Sub-Zero em Porto Alegre para refrigeradores premium. ServitecPoa — especialistas em linha importada.",
    intro:
      "Sub-Zero representa o topo em refrigeração residencial. A ServitecPoa oferece conserto Sub-Zero em Porto Alegre com atendimento técnico especializado.",
    paragraphs: [
      "Reparamos refrigeradores embutidos e side by side Sub-Zero, com foco em sistema de refrigeração dual, placa eletrônica e vedação. Diagnóstico criterioso para preservar a performance do equipamento.",
      "Atendimento a domicílio em Porto Alegre e região, com comunicação transparente sobre peças e prazos.",
    ],
    services: ["Geladeiras e Freezers"],
    isPremium: true,
  },
  {
    name: "Gorenje",
    seoTitle: "Conserto Gorenje em Porto Alegre",
    seoDescription:
      "Conserto Gorenje em Porto Alegre: cooktops, fornos e lava-louças premium. Assistência técnica especializada a domicílio.",
    intro:
      "Gorenje combina design europeu e tecnologia. A ServitecPoa conserta Gorenje em Porto Alegre com experiência em linha premium e embutida.",
    paragraphs: [
      "Atendemos cooktops, fornos, lava-louças e eletrodomésticos embutidos Gorenje. Problemas em ignição, placa, aquecimento e drenagem são resolvidos com diagnóstico técnico.",
      "Nossa equipe conhece as particularidades da marca importada e trabalha com foco em segurança e durabilidade.",
    ],
    services: ["Fogões e Cooktops Premium", "Lava-louças", "Instalação de Eletrodomésticos"],
    isPremium: true,
  },
  {
    name: "Falmec",
    seoTitle: "Conserto Falmec em Porto Alegre",
    seoDescription:
      "Instalação e conserto de coifa Falmec em Porto Alegre. Assistência técnica para coifas importadas e depuradores.",
    intro:
      "Falmec é referência em coifas de design italiano. A ServitecPoa instala e conserta coifa Falmec em Porto Alegre com experiência em modelos de parede, ilha e embutidos.",
    paragraphs: [
      "Diagnosticamos motores, filtros, iluminação e controles eletrônicos. Realizamos manutenção preventiva e reparo de sucção fraca, barulho e falhas elétricas.",
      "Instalação profissional com garantia, seguindo especificações do fabricante para exaustão e fixação segura.",
    ],
    services: ["Coifas e Depuradores", "Instalação de Eletrodomésticos"],
    isPremium: true,
  },
  {
    name: "Lofra",
    seoTitle: "Conserto Lofra em Porto Alegre",
    seoDescription:
      "Assistência técnica Lofra em Porto Alegre: fogões, cooktops e fornos premium. ServitecPoa — linha italiana built-in.",
    intro:
      "Lofra é sinônimo de cozinhas profissionais em casa. Oferecemos conserto Lofra em Porto Alegre para cooktops, fornos e fogões da marca.",
    paragraphs: [
      "Atendemos linha a gás e elétrica, com diagnóstico de queimadores, forno, ignição e módulos eletrônicos. Instalação e manutenção com padrão técnico adequado à marca premium.",
      "Atendimento a domicílio em Porto Alegre com garantia de 90 dias.",
    ],
    services: ["Fogões e Cooktops Premium", "Instalação de Eletrodomésticos"],
    isPremium: true,
  },
  {
    name: "Tecno",
    seoTitle: "Conserto Tecno em Porto Alegre",
    seoDescription:
      "Conserto de coifa Tecno em Porto Alegre. Instalação e manutenção de coifas e depuradores importados.",
    intro:
      "Tecno oferece coifas com design e tecnologia italiana. A ServitecPoa conserta coifa Tecno em Porto Alegre com experiência em linha importada.",
    paragraphs: [
      "Reparamos motores, filtros, iluminação e controles. Instalamos coifas novas com fixação segura e teste de exaustão.",
      "Atendimento a domicílio em toda Porto Alegre.",
    ],
    services: ["Coifas e Depuradores", "Instalação de Eletrodomésticos"],
    isPremium: true,
  },
  {
    name: "Eletromec",
    seoTitle: "Conserto Eletromec em Porto Alegre",
    seoDescription:
      "Assistência técnica Eletromec em Porto Alegre: adegas climatizadas e coifas. ServitecPoa — especialistas em linha premium.",
    intro:
      "Eletromec é referência em adegas climatizadas e coifas premium. Realizamos conserto Eletromec em Porto Alegre com diagnóstico especializado.",
    paragraphs: [
      "Atendemos adegas para vinhos com controle de temperatura e umidade, além de coifas e depuradores da marca. Problemas em compressor, sensor, motor e placa são tratados com rigor técnico.",
      "Garantia de 90 dias e atendimento a domicílio em Porto Alegre.",
    ],
    services: ["Adegas Climatizadas", "Coifas e Depuradores"],
    isPremium: true,
  },
  {
    name: "Cuisinart",
    seoTitle: "Conserto Cuisinart em Porto Alegre",
    seoDescription:
      "Assistência técnica Cuisinart em Porto Alegre para eletrodomésticos premium. ServitecPoa — atendimento a domicílio.",
    intro:
      "Cuisinart oferece eletroportáteis e equipamentos de cozinha premium. A ServitecPoa atende conserto Cuisinart em Porto Alegre conforme disponibilidade de peças e modelo.",
    paragraphs: [
      "Avaliamos equipamentos Cuisinart com diagnóstico técnico e orientação sobre viabilidade do reparo. Para eletrodomésticos de cozinha embutida e linha premium, consulte também nossas páginas de cooktops e fornos.",
      "Atendimento a domicílio com transparência em orçamento e prazos.",
    ],
    services: ["Fogões e Cooktops Premium"],
    isPremium: true,
  },
  {
    name: "Evol",
    seoTitle: "Conserto Evol em Porto Alegre",
    seoDescription:
      "Conserto Evol em Porto Alegre: adegas e coifas. Assistência técnica de eletrodomésticos a domicílio.",
    intro:
      "Evol oferece soluções em climatização de vinhos e exaustão. A ServitecPoa conserta Evol em Porto Alegre com experiência em adegas e coifas.",
    paragraphs: [
      "Diagnosticamos falhas em temperatura, umidade, compressor e sistema de exaustão. Reparo com peças adequadas e garantia formal.",
      "Atendemos Porto Alegre com agendamento por WhatsApp.",
    ],
    services: ["Adegas Climatizadas", "Coifas e Depuradores"],
    isPremium: true,
  },
  {
    name: "Crissair",
    seoTitle: "Conserto Crissair em Porto Alegre",
    seoDescription:
      "Assistência técnica Crissair em Porto Alegre para adegas e coifas. ServitecPoa — linha premium a domicílio.",
    intro:
      "Crissair é marca reconhecida em adegas climatizadas e coifas. Oferecemos conserto Crissair em Porto Alegre com atendimento especializado.",
    paragraphs: [
      "Reparamos sistema de refrigeração, sensores, motores de exaustão e componentes eletrônicos. Instalação profissional disponível para equipamentos novos.",
      "Garantia de 90 dias em todos os serviços realizados.",
    ],
    services: ["Adegas Climatizadas", "Coifas e Depuradores"],
    isPremium: true,
  },
  {
    name: "Debacco",
    seoTitle: "Conserto Debacco em Porto Alegre",
    seoDescription:
      "Assistência técnica Debacco em Porto Alegre: fogões, cooktops e fornos premium. ServitecPoa — linha built-in a domicílio.",
    intro:
      "Debacco é referência em eletrodomésticos de cozinha premium. A ServitecPoa conserta Debacco em Porto Alegre com experiência em linha built-in e importada.",
    paragraphs: [
      "Atendemos cooktops, fornos embutidos e fogões Debacco. Diagnosticamos ignição, queimadores, módulos eletrônicos, sensores de temperatura e sistemas de segurança com procedimentos específicos da marca.",
      "Equipamentos premium exigem técnico qualificado — trabalhamos com peças de qualidade, instalação profissional e garantia de 90 dias em todos os serviços.",
    ],
    services: ["Fogões e Cooktops Premium", "Instalação de Eletrodomésticos"],
    isPremium: true,
  },
  {
    name: "Speed Queen",
    seoTitle: "Conserto Speed Queen em Porto Alegre",
    seoDescription:
      "Assistência técnica Speed Queen em Porto Alegre: máquinas de lavar e secadoras premium. ServitecPoa — atendimento a domicílio.",
    intro:
      "Speed Queen é sinônimo de lavanderia de alto desempenho. A ServitecPoa conserta Speed Queen em Porto Alegre com diagnóstico técnico especializado.",
    paragraphs: [
      "Atendemos lavadoras e secadoras Speed Queen residenciais e comerciais. Problemas em motor, bomba, placa eletrônica, tambor, aquecimento e sensores são identificados com testes específicos da marca.",
      "Priorizamos peças de procedência confiável e atendimento a domicílio em Porto Alegre, com orçamento transparente e garantia de 90 dias.",
    ],
    services: ["Máquinas de Lavar", "Secadoras"],
    isPremium: true,
  },
];

export const seoBrands: BrandPage[] = brandData.map((brand) => ({
  ...brand,
  slug: brandSlug(brand.name),
}));

export function getBrandBySlug(slug: string) {
  return seoBrands.find((brand) => brand.slug === slug);
}
