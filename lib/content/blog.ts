export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  tags?: string[];
  sections: { heading?: string; paragraphs: string[] }[];
  faqs?: { question: string; answer: string }[];
  relatedServices: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "geladeira-nao-gela-causas-quando-chamar-tecnico-porto-alegre",
    title: "Geladeira não gela: 5 causas e quando chamar um técnico em POA",
    seoTitle: "Geladeira não gela: causas e solução em Porto Alegre",
    seoDescription:
      "Geladeira não gela? Entenda as causas mais comuns e quando chamar assistência técnica de eletrodomésticos em Porto Alegre.",
    excerpt:
      "Entenda por que sua geladeira perdeu o desempenho e quando o conserto profissional é necessário.",
    image: "/blog/blog-geladeira-nao-gela.png",
    publishedAt: "2026-05-15",
    updatedAt: "2026-06-29",
    readTime: "6 min",
    tags: [
      "geladeira não gela",
      "conserto de geladeira",
      "assistência técnica Porto Alegre",
      "refrigeração",
    ],
    sections: [
      {
        paragraphs: [
          "Uma geladeira que não gela adequadamente coloca em risco alimentos e bebidas, além de aumentar o consumo de energia. Em Porto Alegre, onde o clima pode variar bastante ao longo do ano, falhas no sistema de refrigeração são uma das chamadas mais frequentes em assistência técnica de eletrodomésticos.",
        ],
      },
      {
        heading: "1. Termostato ou sensor com defeito",
        paragraphs: [
          "O termostato controla a temperatura interna. Quando falha, a geladeira pode gelar em excesso ou não atingir a temperatura correta. Em modelos modernos, sensores eletrônicos substituem o termostato mecânico — ambos exigem diagnóstico técnico.",
        ],
      },
      {
        heading: "2. Sistema de degelo comprometido",
        paragraphs: [
          "Em geladeiras frost free, o degelo automático evita acúmulo de gelo. Resistência de degelo, timer ou fusível queimado impedem o ciclo correto, afetando a refrigeração.",
        ],
      },
      {
        heading: "3. Vedação da porta danificada",
        paragraphs: [
          "Uma borracha de vedação ressecada ou mal posicionada permite entrada de ar quente. O compressor trabalha em excesso e a temperatura interna sobe. Em muitos casos, a troca da vedação resolve.",
        ],
      },
      {
        heading: "4. Ventilador interno parado",
        paragraphs: [
          "O ventilador distribui o ar frio entre freezer e refrigerador. Se parar, o freezer pode gelar mas a geladeira fica morna — sintoma clássico de falha no ventilador ou placa.",
        ],
      },
      {
        heading: "5. Compressor ou placa eletrônica",
        paragraphs: [
          "Problemas no compressor ou na placa são mais complexos e costumam exigir peças específicas. O técnico avalia se o reparo é viável considerando idade e estado do equipamento.",
        ],
      },
      {
        heading: "Quando chamar um técnico?",
        paragraphs: [
          "Se a temperatura não normaliza após verificar termostato e vedação, ou se há barulho anormal, vazamento ou cheiro de queimado, agende visita técnica. A ServitecPoa atende a domicílio em Porto Alegre com diagnóstico e garantia de 90 dias.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quanto tempo leva para a geladeira voltar a gelar após o conserto?",
        answer:
          "Depende da causa. Após o reparo, uma geladeira leva em média de 4 a 6 horas para estabilizar a temperatura ideal. A ServitecPoa orienta o cliente sobre o tempo esperado em cada caso.",
      },
      {
        question: "Vale a pena consertar uma geladeira antiga que não gela?",
        answer:
          "Depende da idade, do estado do compressor e do custo da peça. Em geladeiras com mais de 10 anos e compressor comprometido, a troca pode compensar. Fazemos o diagnóstico a domicílio em Porto Alegre antes de qualquer decisão.",
      },
    ],
    relatedServices: ["conserto-geladeira-freezer-porto-alegre"],
  },
  {
    slug: "quanto-custa-consertar-maquina-de-lavar-porto-alegre",
    title: "Quanto custa consertar máquina de lavar em Porto Alegre?",
    seoTitle: "Quanto custa consertar máquina de lavar em Porto Alegre",
    seoDescription:
      "Valores e fatores que influenciam o conserto de máquina de lavar em Porto Alegre. Orçamento transparente com ServitecPoa.",
    excerpt:
      "Entenda o que define o preço do conserto e como obter orçamento sem surpresas.",
    image: "/blog/blog-custo-maquina-lavar.png",
    publishedAt: "2026-05-22",
    updatedAt: "2026-06-29",
    readTime: "5 min",
    tags: [
      "conserto máquina de lavar",
      "preço conserto",
      "orçamento",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "O custo para consertar uma máquina de lavar em Porto Alegre varia conforme a marca, o modelo, a peça necessária e a complexidade do reparo. Não existe valor fixo — o diagnóstico presencial é essencial para um orçamento preciso.",
        ],
      },
      {
        heading: "Reparos mais comuns e faixas de valor",
        paragraphs: [
          "Troca de vedação, filtro ou mangueira costuma ser mais acessível. Substituição de bomba d'água, placa eletrônica, motor ou rolamento representa investimento maior. Sempre apresentamos o valor antes de iniciar o serviço.",
        ],
      },
      {
        heading: "O que influencia o preço",
        paragraphs: [
          "Marca e modelo determinam disponibilidade e custo de peças. Equipamentos mais novos com placa eletrônica podem exigir componentes específicos. A idade do aparelho também influencia na recomendação de reparo versus troca.",
        ],
      },
      {
        heading: "Por que o diagnóstico a domicílio vale a pena",
        paragraphs: [
          "Levar a máquina a uma assistência gera transtorno e custo de transporte. Com atendimento a domicílio, o técnico identifica o problema no local e você decide com segurança. A ServitecPoa atende Porto Alegre com garantia de 90 dias.",
        ],
      },
    ],
    faqs: [
      {
        question: "A visita de diagnóstico é cobrada?",
        answer:
          "Informamos a política de visita no agendamento. O valor do reparo é sempre apresentado e aprovado antes de iniciar o serviço, sem surpresas.",
      },
      {
        question: "Quanto custa, em média, trocar a placa eletrônica da máquina de lavar?",
        answer:
          "O valor varia conforme marca e modelo, pois a placa é uma peça específica. Por isso o diagnóstico presencial é essencial para um orçamento preciso em Porto Alegre.",
      },
    ],
    relatedServices: ["conserto-maquina-de-lavar-porto-alegre"],
  },
  {
    slug: "lava-e-seca-nao-seca-como-resolver-porto-alegre",
    title: "Lava e seca não seca: como resolver em Porto Alegre",
    seoTitle: "Lava e seca não seca: solução em Porto Alegre",
    seoDescription:
      "Sua lava e seca não seca as roupas? Causas comuns e conserto a domicílio em Porto Alegre — ServitecPoa.",
    excerpt:
      "Descubra por que a secagem falha e quando chamar assistência técnica especializada.",
    image: "/blog/blog-lava-seca-nao-seca.png",
    publishedAt: "2026-05-28",
    updatedAt: "2026-06-29",
    readTime: "5 min",
    tags: [
      "lava e seca não seca",
      "conserto lava e seca",
      "secagem",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "A lava e seca é prática, mas quando a função de secagem falha, o equipamento perde metade da sua utilidade. Em Porto Alegre, esse é um dos problemas mais relatados por nossos clientes.",
        ],
      },
      {
        heading: "Causas frequentes",
        paragraphs: [
          "Filtro de fiapos obstruído, sensor de umidade defeituoso, resistência de aquecimento queimada, ventoinha parada ou placa eletrônica com falha são as causas mais comuns. Cada uma exige abordagem diferente.",
        ],
      },
      {
        heading: "O que você pode verificar antes",
        paragraphs: [
          "Limpe o filro de fiapos e execute um ciclo de higienização, se o fabricante recomendar. Evite sobrecarga de roupas. Se o problema persistir, o diagnóstico técnico é necessário.",
        ],
      },
      {
        heading: "Conserto a domicílio",
        paragraphs: [
          "A ServitecPoa realiza conserto de lava e seca em Porto Alegre com visita técnica agendada. Trabalhamos com Samsung, LG, Electrolux, Brastemp e demais marcas, com garantia de 90 dias.",
        ],
      },
    ],
    relatedServices: ["conserto-lava-e-seca-porto-alegre"],
  },
  {
    slug: "como-escolher-assistencia-tecnica-eletrodomesticos-porto-alegre",
    title: "Como escolher assistência técnica de eletrodomésticos em Porto Alegre",
    seoTitle: "Como escolher assistência técnica de eletrodomésticos em POA",
    seoDescription:
      "Dicas para escolher a melhor assistência técnica de eletrodomésticos em Porto Alegre. CNPJ, garantia, avaliações e mais.",
    excerpt:
      "Critérios essenciais para contratar um técnico confiável e evitar dor de cabeça.",
    image: "/blog/blog-escolher-assistencia.png",
    publishedAt: "2026-06-02",
    updatedAt: "2026-06-29",
    readTime: "7 min",
    tags: [
      "como escolher assistência técnica",
      "técnico confiável",
      "garantia",
      "Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "Escolher a assistência técnica certa evita retrabalho, gastos desnecessários e perda de garantia. Em Porto Alegre, há muitas opções — saiba o que avaliar antes de agendar.",
        ],
      },
      {
        heading: "1. Empresa formalizada",
        paragraphs: [
          "Verifique CNPJ, nota fiscal e identificação da empresa. A ServitecPoa opera com CNPJ 56.001.021/0001-86 e emite documentação conforme o serviço.",
        ],
      },
      {
        heading: "2. Avaliações no Google",
        paragraphs: [
          "Avaliações reais de clientes no Google Meu Negócio são um dos melhores indicadores. Busque média alta e comentários detalhados sobre pontualidade e qualidade.",
        ],
      },
      {
        heading: "3. Garantia formal",
        paragraphs: [
          "Assistências sérias oferecem garantia por escrito. Na ServitecPoa, todos os reparos têm garantia de 90 dias.",
        ],
      },
      {
        heading: "4. Experiência com sua marca",
        paragraphs: [
          "Eletrodomésticos premium (Bertazzoni, Sub-Zero, Gorenje) exigem técnico especializado. Pergunte sobre experiência com sua marca e modelo.",
        ],
      },
      {
        heading: "5. Orçamento antes do reparo",
        paragraphs: [
          "Exija diagnóstico claro e valor aprovado antes de qualquer intervenção. Transparência é sinal de profissionalismo.",
        ],
      },
    ],
    relatedServices: [],
  },
  {
    slug: "manutencao-coifa-depurador-dicas-porto-alegre",
    title: "Manutenção de coifa e depurador: dicas práticas",
    seoTitle: "Manutenção de coifa e depurador em Porto Alegre",
    seoDescription:
      "Como manter coifa e depurador funcionando bem. Dicas de manutenção e quando chamar técnico em Porto Alegre.",
    excerpt:
      "Cuidados simples que prolongam a vida da coifa e evitam reparos caros.",
    image: "/blog/blog-manutencao-coifa.png",
    publishedAt: "2026-06-05",
    updatedAt: "2026-06-29",
    readTime: "4 min",
    tags: [
      "manutenção de coifa",
      "depurador",
      "limpeza de filtros",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "A coifa é essencial para manter a cozinha livre de gordura e odores. Com manutenção adequada, evita-se sucção fraca, barulho e queima do motor.",
        ],
      },
      {
        heading: "Limpeza de filtros",
        paragraphs: [
          "Filtros de alumínio ou carvão devem ser limpos ou trocados conforme o manual. Filtro saturado reduz drasticamente a sucção e força o motor.",
        ],
      },
      {
        heading: "Sinais de que precisa de técnico",
        paragraphs: [
          "Barulho anormal, sucção fraca mesmo com filtro limpo, cheiro de queimado ou coifa vibrando indicam necessidade de reparo. A ServitecPoa instala e conserta coifas Falmec, Eletromec, Tecno e demais marcas em Porto Alegre.",
        ],
      },
    ],
    relatedServices: ["conserto-coifa-depurador-porto-alegre"],
  },
  {
    slug: "conserto-eletrodomesticos-premium-bertazzoni-subzero-porto-alegre",
    title: "Conserto de eletrodomésticos premium em Porto Alegre",
    seoTitle: "Conserto eletrodomésticos premium Bertazzoni e Sub-Zero POA",
    seoDescription:
      "Assistência técnica para Bertazzoni, Sub-Zero, Gorenje e linha premium em Porto Alegre. ServitecPoa — especialistas a domicílio.",
    excerpt:
      "Por que eletrodomésticos premium exigem técnico especializado e como a ServitecPoa atende.",
    image: "/blog/blog-premium.png",
    publishedAt: "2026-06-08",
    updatedAt: "2026-06-29",
    readTime: "6 min",
    tags: [
      "eletrodomésticos premium",
      "Bertazzoni",
      "Sub-Zero",
      "Gorenje",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "Cozinhas com cooktops Bertazzoni, fornos Gorenje ou refrigeradores Sub-Zero representam investimento significativo. O conserto exige técnico que conheça as particularidades de cada marca.",
        ],
      },
      {
        heading: "Diferenças da linha premium",
        paragraphs: [
          "Equipamentos importados têm peças específicas, sistemas de ignição e eletrônica distintos. Um técnico sem experiência pode agravar o problema ou invalidar garantias.",
        ],
      },
      {
        heading: "ServitecPoa e linha premium",
        paragraphs: [
          "Somos referência em Porto Alegre para conserto de Bertazzoni, Sub-Zero, Gorenje, Falmec, Lofra e demais marcas built-in. Atendimento a domicílio, peças de qualidade e garantia de 90 dias.",
        ],
      },
      {
        heading: "Instalação correta",
        paragraphs: [
          "Além do conserto, realizamos instalação profissional de cooktops, fornos e coifas premium, seguindo normas do fabricante para segurança e desempenho.",
        ],
      },
    ],
    faqs: [
      {
        question: "Por que devo procurar um técnico especializado em linha premium?",
        answer:
          "Equipamentos importados como Bertazzoni, Sub-Zero e Gorenje têm peças específicas e eletrônica distinta. Um técnico sem experiência pode agravar o problema ou invalidar a garantia. A ServitecPoa é especialista nessas marcas em Porto Alegre.",
      },
    ],
    relatedServices: [
      "conserto-fogao-cooktop-premium-porto-alegre",
      "conserto-geladeira-freezer-porto-alegre",
    ],
  },
  {
    slug: "geladeira-fazendo-barulho-causas-solucao-porto-alegre",
    title: "Geladeira fazendo barulho: causas e quando se preocupar",
    seoTitle: "Geladeira fazendo barulho: causas e solução em Porto Alegre",
    seoDescription:
      "Geladeira fazendo barulho estranho? Veja as causas (compressor, ventilador, dilatação) e quando chamar assistência técnica em Porto Alegre.",
    excerpt:
      "Estalos, zumbidos ou ronco alto? Entenda quais ruídos são normais e quais indicam defeito.",
    image: "/blog/blog-geladeira-barulho.png",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-29",
    readTime: "6 min",
    tags: [
      "geladeira fazendo barulho",
      "geladeira barulhenta",
      "compressor",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "Toda geladeira faz algum ruído durante o funcionamento, mas barulhos novos, altos ou intermitentes costumam assustar. Saber diferenciar o som normal de um sinal de defeito ajuda a decidir quando chamar um técnico em Porto Alegre.",
        ],
      },
      {
        heading: "Ruídos considerados normais",
        paragraphs: [
          "Estalos leves de dilatação dos plásticos, o ronco do compressor ligando e desligando e o som do gás refrigerante circulando são normais. Em geladeiras frost free, o ventilador interno também produz um zumbido constante e suave.",
        ],
      },
      {
        heading: "Barulho do compressor",
        paragraphs: [
          "Um ronco muito alto, vibração excessiva ou batidas metálicas no compressor podem indicar desgaste, fixação solta ou problema elétrico. O compressor é o coração da refrigeração e exige avaliação técnica especializada.",
        ],
      },
      {
        heading: "Ventilador e degelo",
        paragraphs: [
          "Em modelos frost free, ruído de raspagem ou batida geralmente vem do ventilador encostando em gelo acumulado ou com a hélice danificada. Falhas no sistema de degelo costumam estar associadas a esse sintoma.",
        ],
      },
      {
        heading: "Vibração e nivelamento",
        paragraphs: [
          "Uma geladeira mal nivelada ou encostada na parede transmite vibração e amplifica o barulho. Ajustar os pés e afastar o aparelho alguns centímetros da parede pode resolver casos simples.",
        ],
      },
      {
        heading: "Quando chamar um técnico",
        paragraphs: [
          "Se o barulho veio acompanhado de perda de refrigeração, aquecimento na lateral, cheiro de queimado ou se o compressor não desliga, agende uma visita. A ServitecPoa atende a domicílio em Porto Alegre com diagnóstico e garantia de 90 dias.",
        ],
      },
    ],
    faqs: [
      {
        question: "É normal a geladeira fazer barulho ao desligar?",
        answer:
          "Sim. Estalos leves após o compressor desligar são causados pela dilatação e contração dos materiais e não indicam defeito. Já batidas fortes ou vibração intensa merecem avaliação técnica.",
      },
      {
        question: "Geladeira barulhenta gasta mais energia?",
        answer:
          "Pode gastar. Quando o ruído vem de compressor sobrecarregado, ventilador travado ou gelo acumulado, o aparelho trabalha mais e consome mais energia. O diagnóstico identifica a causa e evita desperdício.",
      },
    ],
    relatedServices: ["conserto-geladeira-freezer-porto-alegre"],
  },
  {
    slug: "maquina-de-lavar-nao-centrifuga-o-que-fazer-porto-alegre",
    title: "Máquina de lavar não centrifuga: o que fazer",
    seoTitle: "Máquina de lavar não centrifuga: causas e solução em POA",
    seoDescription:
      "Máquina de lavar não centrifuga e deixa a roupa encharcada? Veja as causas mais comuns e quando chamar assistência técnica em Porto Alegre.",
    excerpt:
      "Roupa saindo encharcada? Veja as causas mais comuns e o que verificar antes de chamar o técnico.",
    image: "/blog/blog-maquina-nao-centrifuga.png",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-29",
    readTime: "6 min",
    tags: [
      "máquina de lavar não centrifuga",
      "roupa encharcada",
      "conserto máquina de lavar",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "Quando a máquina de lavar não centrifuga, a roupa sai encharcada e o ciclo parece nunca terminar. O problema tem várias causas possíveis, de simples desequilíbrio de carga a falhas no motor ou na placa eletrônica.",
        ],
      },
      {
        heading: "1. Carga desequilibrada",
        paragraphs: [
          "Peças grandes ou poucas roupas pesadas de um lado fazem a máquina interromper a centrifugação por segurança. Redistribua a carga e tente novamente — é a causa mais comum e mais simples.",
        ],
      },
      {
        heading: "2. Dreno ou bomba entupidos",
        paragraphs: [
          "Se a água não é totalmente drenada, a máquina não inicia a centrifugação. Filtro sujo, mangueira dobrada ou bomba d'água obstruída por objetos (moedas, botões) são frequentes nesses casos.",
        ],
      },
      {
        heading: "3. Trava da porta com defeito",
        paragraphs: [
          "Por segurança, a máquina só centrifuga com a porta travada. Um sensor ou trava eletrônica com defeito impede o ciclo, mesmo com a porta fechada corretamente.",
        ],
      },
      {
        heading: "4. Correia, motor ou placa",
        paragraphs: [
          "Correia rompida (em modelos que a utilizam), escovas do motor gastas ou falha na placa de potência impedem o tambor de atingir alta rotação. Esses casos exigem diagnóstico e peças específicas.",
        ],
      },
      {
        heading: "O que verificar antes de chamar o técnico",
        paragraphs: [
          "Redistribua a roupa, limpe o filtro, confira se a mangueira de saída não está dobrada e teste outro ciclo. Se o problema persistir, agende uma visita. A ServitecPoa conserta máquinas de lavar a domicílio em Porto Alegre com garantia de 90 dias.",
        ],
      },
    ],
    faqs: [
      {
        question: "Por que a roupa sai muito molhada mesmo após centrifugar?",
        answer:
          "Geralmente é drenagem parcial (filtro ou bomba obstruídos) ou centrifugação em rotação baixa por desgaste de motor/correia. Um teste de ciclo identifica a causa exata.",
      },
      {
        question: "Posso usar a máquina enquanto não centrifuga?",
        answer:
          "Não é recomendado. Continuar usando pode sobrecarregar o motor e a placa, agravando o defeito. O ideal é diagnosticar antes de novos ciclos.",
      },
    ],
    relatedServices: ["conserto-maquina-de-lavar-porto-alegre"],
  },
  {
    slug: "como-limpar-maquina-de-lavar-passo-a-passo",
    title: "Como limpar a máquina de lavar: passo a passo",
    seoTitle: "Como limpar máquina de lavar: guia passo a passo",
    seoDescription:
      "Aprenda como limpar a máquina de lavar por dentro, eliminar mau cheiro e evitar mofo. Dicas de manutenção preventiva da ServitecPoa em Porto Alegre.",
    excerpt:
      "Mau cheiro e mofo na máquina? Veja como higienizar tambor, gaveta e borracha e prolongar a vida útil.",
    image: "/blog/blog-limpar-maquina-lavar.png",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-29",
    readTime: "5 min",
    tags: [
      "como limpar máquina de lavar",
      "mau cheiro máquina de lavar",
      "manutenção preventiva",
      "higienização",
    ],
    sections: [
      {
        paragraphs: [
          "A limpeza regular da máquina de lavar elimina mau cheiro, evita mofo e prolonga a vida útil do equipamento. Resíduos de sabão, fiapos e umidade acumulada são o ambiente ideal para fungos e bactérias.",
        ],
      },
      {
        heading: "1. Higienize o tambor",
        paragraphs: [
          "Execute um ciclo vazio com água quente (se o modelo permitir) usando vinagre branco ou um higienizador próprio para máquinas. Isso dissolve resíduos de sabão e elimina odores do tambor.",
        ],
      },
      {
        heading: "2. Limpe a borracha de vedação",
        paragraphs: [
          "Em máquinas de abertura frontal, a borracha da porta acumula água, fiapos e mofo. Limpe as dobras com um pano úmido e solução de água com vinagre, secando bem ao final.",
        ],
      },
      {
        heading: "3. Gaveta de sabão e filtro",
        paragraphs: [
          "Remova a gaveta de sabão e lave em água corrente para tirar o acúmulo de produto. Limpe também o filtro da bomba (quando acessível), onde ficam presos objetos e fiapos.",
        ],
      },
      {
        heading: "4. Mantenha seca após o uso",
        paragraphs: [
          "Deixe a porta e a gaveta entreabertas após lavar para arejar e evitar mofo. Não deixe roupa molhada parada dentro do tambor por longos períodos.",
        ],
      },
      {
        heading: "Com que frequência limpar",
        paragraphs: [
          "Faça a higienização do tambor uma vez por mês e a limpeza da borracha e gaveta a cada duas semanas. Manutenção preventiva reduz chamados e evita reparos caros. Se já houver mau cheiro persistente ou vazamento, a ServitecPoa atende a domicílio em Porto Alegre.",
        ],
      },
    ],
    faqs: [
      {
        question: "Posso usar água sanitária para limpar a máquina de lavar?",
        answer:
          "É possível em pequena quantidade, mas o vinagre branco é mais seguro para borrachas e componentes. Evite misturar produtos e siga sempre as orientações do fabricante.",
      },
      {
        question: "Limpar a máquina resolve o mau cheiro na roupa?",
        answer:
          "Na maioria dos casos, sim. Se o cheiro persistir mesmo após a higienização, pode haver acúmulo no filtro, na bomba ou biofilme interno — situação que pede avaliação técnica.",
      },
    ],
    relatedServices: ["conserto-maquina-de-lavar-porto-alegre"],
  },
  {
    slug: "fogao-cooktop-nao-acende-causas-solucao-porto-alegre",
    title: "Fogão ou cooktop não acende: causas e solução",
    seoTitle: "Fogão/cooktop não acende: causas e solução em Porto Alegre",
    seoDescription:
      "Fogão ou cooktop não acende ou a chama apaga? Veja as causas (vela de ignição, válvula, registro) e quando chamar assistência técnica em Porto Alegre.",
    excerpt:
      "A faísca não sai ou a chama não mantém? Entenda as causas mais comuns e os cuidados de segurança.",
    image: "/blog/blog-fogao-nao-acende.png",
    publishedAt: "2026-06-22",
    updatedAt: "2026-06-29",
    readTime: "6 min",
    tags: [
      "fogão não acende",
      "cooktop não acende",
      "vela de ignição",
      "assistência técnica Porto Alegre",
    ],
    sections: [
      {
        paragraphs: [
          "Quando o fogão ou cooktop não acende, o problema pode estar na ignição, na alimentação de gás ou nos queimadores. Antes de tudo, atenção à segurança: se sentir cheiro de gás, feche o registro e ventile o ambiente.",
        ],
      },
      {
        heading: "1. Vela de ignição suja ou úmida",
        paragraphs: [
          "Resíduos de comida, gordura ou umidade na vela de ignição impedem a faísca. Limpe a vela e a tampa do queimador, garantindo que estejam secos e bem encaixados.",
        ],
      },
      {
        heading: "2. Queimador entupido",
        paragraphs: [
          "Furos do queimador obstruídos atrapalham a saída de gás e a formação da chama. A limpeza cuidadosa com escova fina costuma resolver, sem usar objetos que alarguem os furos.",
        ],
      },
      {
        heading: "3. Chama que não se mantém",
        paragraphs: [
          "Se a chama acende mas apaga ao soltar o botão, a falha geralmente está no termopar (sensor de segurança) ou na válvula. Esse sistema corta o gás quando não detecta chama e exige reparo técnico.",
        ],
      },
      {
        heading: "4. Ignição elétrica e cooktops",
        paragraphs: [
          "Em cooktops, falhas no módulo de ignição, no acendimento automático ou na fiação impedem a faísca. Em modelos de indução, o problema é eletrônico e requer diagnóstico especializado.",
        ],
      },
      {
        heading: "Segurança em primeiro lugar",
        paragraphs: [
          "Vazamentos de gás são perigosos. Não insista em acender se houver cheiro de gás e não tente reparar a parte interna por conta própria. A ServitecPoa atende fogões e cooktops, inclusive linha premium, a domicílio em Porto Alegre com garantia de 90 dias.",
        ],
      },
    ],
    faqs: [
      {
        question: "Por que o fogão solta faísca mas não acende?",
        answer:
          "Normalmente é queimador entupido, peça mal encaixada ou baixa pressão de gás. Verifique o encaixe e a limpeza; se persistir, pode ser a válvula ou o registro, que pedem avaliação técnica.",
      },
      {
        question: "Cooktop de indução não liga tem conserto?",
        answer:
          "Sim. Falhas em placa eletrônica, sensores e painel touch de cooktops de indução têm reparo. Por serem componentes específicos, o diagnóstico técnico é essencial.",
      },
    ],
    relatedServices: ["conserto-fogao-cooktop-premium-porto-alegre"],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const tags = new Set(post.tags ?? []);
  const services = new Set(post.relatedServices);

  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      const sharedTags = (candidate.tags ?? []).filter((tag) => tags.has(tag)).length;
      const sharedServices = candidate.relatedServices.filter((s) => services.has(s)).length;
      return { candidate, score: sharedTags * 2 + sharedServices * 3 };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}
