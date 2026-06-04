export const siteConfig = {
  name: "ServitecPoa",
  title: "ServitecPoa — Consertos em Eletrodomésticos",
  description:
    "Assistência técnica e conserto de eletrodomésticos em Porto Alegre: geladeiras, máquinas de lavar, lava e seca, coifas, adegas e linha premium. Atendimento a domicílio, peças originais e garantia de 90 dias.",
  url: "https://www.servitecpoa.com.br",
  locale: "pt_BR",
  phone: "5130514255",
  phoneDisplay: "(51) 3051-4255",
  whatsappUrl: "https://wa.me/555130514255",
  shiftMorning: "9h às 12h",
  shiftAfternoon: "13h30 às 17h30",
  cnpj: "56001021000186",
  cnpjDisplay: "56.001.021/0001-86",
  email: "contato@servitecpoa.com.br",
  hours: [
    "Segunda a Sexta: 9h às 12h — 13h30 às 17h30",
    "Sábado: 9h às 12h — 13h30 às 17h30",
  ],
  serviceArea: "Porto Alegre e Região Metropolitana",
  warranty: "90 dias",
  experience: "15+ anos",
} as const;

export const nationalBrands = [
  "Brastemp",
  "Consul",
  "Samsung",
  "Electrolux",
  "LG",
] as const;

export const importedBrands = [
  "Tecno",
  "Sub-Zero",
  "Eletromec",
  "Falmec",
  "Bertazzoni",
  "Gorenje",
  "Cuisinart",
  "Evol",
  "Crissair",
  "Lofra",
] as const;

export const allBrands = [...nationalBrands, ...importedBrands];

export const services = [
  {
    icon: "refrigerator" as const,
    title: "Geladeiras e Freezers",
    description:
      "Reparo em refrigeradores, freezers e geladeiras side by side nacionais e importados.",
  },
  {
    icon: "washer" as const,
    title: "Máquinas de Lavar",
    description:
      "Conserto de lavadoras, centrífugas e tanquinhos com diagnóstico preciso.",
  },
  {
    icon: "washer" as const,
    title: "Lava e Seca",
    description:
      "Assistência especializada em máquinas lava e seca de todas as marcas.",
  },
  {
    icon: "washer" as const,
    title: "Lava-louças",
    description:
      "Manutenção e reparo de lava-louças residenciais e embutidas premium.",
  },
  {
    icon: "stove" as const,
    title: "Fogões e Cooktops Premium",
    description:
      "Atendimento exclusivo para marcas premium: Bertazzoni, Gorenje, Lofra, Smeg, Fulgor e linha built-in de alto padrão.",
  },
  {
    icon: "washer" as const,
    title: "Secadoras",
    description: "Manutenção de secadoras elétricas e a gás.",
  },
  {
    icon: "tool" as const,
    title: "Coifas e Depuradores",
    description:
      "Instalação e reparo de coifas Falmec, Eletromec, Tecno e demais marcas.",
  },
  {
    icon: "wine" as const,
    title: "Adegas Climatizadas",
    description:
      "Manutenção e conserto de adegas para vinhos, com controle de temperatura e umidade.",
  },
  {
    icon: "tool" as const,
    title: "Instalação de Eletrodomésticos",
    description:
      "Instalação profissional com garantia para cooktops, fornos e coifas.",
  },
] as const;

export const faqs = [
  {
    question: "Vocês atendem em domicílio em Porto Alegre?",
    answer:
      "Sim. Realizamos atendimento a domicílio em toda Porto Alegre e região metropolitana. Nossa equipe vai até sua residência para diagnóstico e reparo dos eletrodomésticos.",
  },
  {
    question: "Quais marcas de eletrodomésticos vocês consertam?",
    answer:
      "Atendemos marcas nacionais (Brastemp, Consul, Samsung, Electrolux, LG) e importadas premium (Bertazzoni, Sub-Zero, Gorenje, Falmec, Lofra, Cuisinart, Tecno, Eletromec, Crissair, Evol e outras).",
  },
  {
    question: "Vocês trabalham com peças originais?",
    answer:
      "Sim. Priorizamos peças originais e de primeira linha, especialmente para marcas importadas e linha premium, garantindo durabilidade e segurança do reparo.",
  },
  {
    question: "Qual o prazo para conserto de eletrodomésticos?",
    answer:
      "Reparos simples costumam ser concluídos em 24 a 48 horas. Casos que exigem peças especiais podem levar de 3 a 7 dias úteis, sempre com comunicação transparente.",
  },
  {
    question: "Os serviços possuem garantia?",
    answer:
      "Todos os reparos realizados pela ServitecPoa possuem garantia de 90 dias, assegurando qualidade e tranquilidade ao cliente.",
  },
  {
    question: "Como solicitar orçamento ou agendar visita?",
    answer:
      "Preencha o formulário de solicitação no site com seus dados, endereço, produto e turno preferencial (manhã ou tarde). Você será direcionado ao WhatsApp (51) 3051-4255 para confirmar o agendamento.",
  },
  {
    question: "Quais serviços de conserto vocês oferecem?",
    answer:
      "Conserto de geladeiras e freezers, máquinas de lavar, lava e seca, lava-louças, secadoras, coifas, adegas climatizadas, instalação de eletrodomésticos e assistência para fogões e cooktops premium. Todos com atendimento a domicílio em Porto Alegre.",
  },
  {
    question: "Vocês consertam eletrodomésticos importados premium?",
    answer:
      "Sim. Somos especializados em marcas como Bertazzoni, Sub-Zero, Gorenje, Falmec, Lofra, Smeg e outras linhas built-in, além das marcas nacionais mais vendidas no Brasil.",
  },
] as const;
