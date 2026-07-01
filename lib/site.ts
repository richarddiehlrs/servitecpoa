export const siteConfig = {
  name: "ServitecPoa",
  tagline: "Assistência Técnica de Eletrodomésticos",
  title: "Assistência Técnica de Eletrodomésticos em Porto Alegre | ServitecPoa",
  description:
    "Assistência técnica de eletrodomésticos em Porto Alegre. Conserto a domicílio de geladeiras, lavadoras, lava e seca e linha premium. Garantia de 90 dias.",
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
  serviceArea: "Porto Alegre",
  warranty: "90 dias",
  experience: "15+ anos",
  primaryCategory: "Assistência técnica de eletrodomésticos",
  geo: {
    latitude: -30.0346,
    longitude: -51.2177,
    region: "RS",
    country: "BR",
    placename: "Porto Alegre",
  },
  googleBusinessCid: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_CID ?? "10111277396737505345",
  social: {
    googleBusiness:
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ??
      "https://share.google/7zduK7VvJqk64kiGf",
    googleMaps: `https://www.google.com/maps?cid=${
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_CID ?? "10111277396737505345"
    }`,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/servitec_poa/",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  },
  reviews: {
    ratingValue: Number(process.env.NEXT_PUBLIC_GOOGLE_RATING ?? "5"),
    reviewCount: Number(process.env.NEXT_PUBLIC_GOOGLE_REVIEW_COUNT ?? "5"),
    items: [
      {
        author: "Mariana S.",
        location: "Moinhos de Vento",
        text: "Atendimento pontual e técnico muito educado. Consertaram minha geladeira Electrolux no mesmo dia.",
        rating: 5,
      },
      {
        author: "Ricardo M.",
        location: "Petropolis",
        text: "Excelente serviço com minha lava e seca Samsung. Orçamento claro e garantia cumprida.",
        rating: 5,
      },
      {
        author: "Camila F.",
        location: "Tres Figueiras",
        text: "Única empresa que resolveu meu cooktop Bertazzoni. Profissionais que entendem linha premium.",
        rating: 5,
      },
      {
        author: "André L.",
        location: "Bela Vista",
        text: "Máquina de lavar consertada com rapidez. Chegaram no horário combinado e explicaram o problema.",
        rating: 5,
      },
      {
        author: "Patricia R.",
        location: "Higienopolis",
        text: "Orçamento transparente, serviço bem feito e equipe atenciosa. Recomendo a ServitecPoa.",
        rating: 5,
      },
    ],
  },
  logo: {
    src: "/logo.png",
    alt: "ServitecPoa — Assistência técnica de eletrodomésticos em Porto Alegre",
    width: 160,
    height: 56,
  },
} as const;

export const nationalBrands = [
  "Brastemp",
  "Consul",
  "Samsung",
  "Electrolux",
  "LG",
  "Midea",
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
  "Smeg",
  "Fulgor",
  "Debacco",
  "Speed Queen",
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
      "Conserto de lavadoras automáticas com diagnóstico preciso.",
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
      "Sim. Realizamos atendimento a domicílio em toda Porto Alegre. Nossa equipe vai até sua residência para diagnóstico e reparo dos eletrodomésticos.",
  },
  {
    question: "Qual a categoria de serviço da ServitecPoa?",
    answer:
      "Somos especializados em assistência técnica de eletrodomésticos, com foco em conserto, manutenção e instalação a domicílio em Porto Alegre.",
  },
  {
    question: "Quais marcas de eletrodomésticos vocês consertam?",
    answer:
      "Atendemos marcas nacionais (Brastemp, Consul, Samsung, Electrolux, LG, Midea) e importadas premium (Bertazzoni, Sub-Zero, Gorenje, Falmec, Lofra, Smeg, Fulgor, Cuisinart, Tecno, Eletromec, Crissair, Evol e outras).",
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
  {
    question: "Atendem quais bairros e regiões de Porto Alegre?",
    answer:
      "Atendemos todas as zonas de Porto Alegre — Zona Norte, Sul, Leste e Oeste, além do Centro Histórico. Destaque para bairros nobres como Jardim Europa, Boa Vista, Higienópolis e Auxiliadora (Zona Norte); Moinhos de Vento, Petrópolis, Três Figueiras e Bela Vista (Zona Leste); e Tristeza, Ipanema e Cristal (Zona Sul).",
  },
] as const;
