export type ServiceDetailContent = {
  slug: string;
  problems: string[];
  brands: string[];
  process: { title: string; description: string }[];
  paragraphs: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: ServiceDetailContent[] = [
  {
    slug: "conserto-geladeira-freezer-porto-alegre",
    problems: [
      "Geladeira não gela ou congela em excesso",
      "Vazamento de água no interior ou atrás do equipamento",
      "Barulho excessivo no compressor ou ventilador",
      "Geladeira desliga sozinha ou não liga",
      "Formação de gelo excessivo no freezer",
      "Porta com vedação comprometida",
      "Display ou painel eletrônico com falha",
    ],
    brands: ["Brastemp", "Consul", "Electrolux", "Samsung", "LG", "Sub-Zero", "Gorenje"],
    process: [
      {
        title: "Diagnóstico no local",
        description:
          "O técnico avalia sintomas, histórico do equipamento e realiza testes de temperatura, compressor e sistema elétrico.",
      },
      {
        title: "Orçamento transparente",
        description:
          "Apresentamos o valor do reparo, peças necessárias e prazo estimado antes de iniciar qualquer intervenção.",
      },
      {
        title: "Reparo com peças originais",
        description:
          "Substituímos componentes defeituosos com peças de qualidade e testamos o funcionamento completo.",
      },
      {
        title: "Garantia de 90 dias",
        description:
          "Todo conserto de geladeira ou freezer inclui garantia formal, com suporte pós-serviço.",
      },
    ],
    paragraphs: [
      "Problemas em geladeiras e freezers podem comprometer alimentos, gerar desperdício e aumentar o consumo de energia. Na ServitecPoa, atuamos como assistência técnica de eletrodomésticos especializada em refrigeração residencial e linha premium em Porto Alegre.",
      "Atendemos modelos frost free, duplex, side by side, embutidos e importados de alta performance. Nossos técnicos identificam falhas em termostato, sensor, ventoinha, válvula, placa eletrônica, sistema de degelo e vedação — causas comuns de mau funcionamento.",
      "O atendimento é realizado no conforto da sua casa, com agendamento nos turnos da manhã ou tarde. Se o reparo exigir peça específica, informamos prazo e custo com clareza, sem surpresas.",
    ],
    faqs: [
      {
        question: "Quanto tempo leva para consertar uma geladeira em Porto Alegre?",
        answer:
          "Reparos simples, como troca de termostato ou vedação, costumam ser feitos na primeira visita. Casos com placa ou compressor podem exigir peça com prazo de 3 a 7 dias úteis.",
      },
      {
        question: "Vale a pena consertar geladeira antiga?",
        answer:
          "Depende do diagnóstico. Avaliamos custo do reparo versus idade e eficiência do equipamento, sempre com recomendação honesta ao cliente.",
      },
    ],
  },
  {
    slug: "conserto-maquina-de-lavar-porto-alegre",
    problems: [
      "Máquina não centrifuga ou centrifuga fraco",
      "Não enche ou não drena água",
      "Vazamento durante o ciclo de lavagem",
      "Barulho forte na centrifugação",
      "Painel com erro ou não liga",
      "Roupas saindo manchadas ou com mau cheiro",
      "Porta ou tampa com defeito de travamento",
    ],
    brands: ["Brastemp", "Consul", "Electrolux", "Samsung", "LG"],
    process: [
      {
        title: "Inspeção completa",
        description:
          "Verificamos bomba, motor, correia, placa, sensores, mangueiras e sistema de drenagem.",
      },
      {
        title: "Teste de ciclo",
        description:
          "Simulamos lavagem e centrifugação para confirmar a causa raiz do problema.",
      },
      {
        title: "Reparo especializado",
        description:
          "Corrigimos falhas mecânicas e eletrônicas com peças adequadas à marca e modelo.",
      },
      {
        title: "Entrega testada",
        description:
          "Só finalizamos após validar enchimento, lavagem, drenagem e centrifugação.",
      },
    ],
    paragraphs: [
      "A máquina de lavar é um dos eletrodomésticos mais essenciais do lar. Quando apresenta falhas, o dia a dia da família é prejudicado. A ServitecPoa oferece conserto de máquina de lavar em Porto Alegre com visita técnica a domicílio.",
      "Trabalhamos com lavadoras automáticas, semiautomáticas e tanquinhos das principais marcas. Problemas em bomba d'água, filtro, amortecedor, rolamento, placa de potência e trava de porta são diagnosticados com equipamentos adequados.",
      "Nossa equipe tem experiência de mais de 15 anos em assistência técnica de eletrodomésticos, com foco em solução definitiva — não apenas paliativa.",
    ],
    faqs: [
      {
        question: "A máquina está balançando muito na centrifugação. O que pode ser?",
        answer:
          "Geralmente é amortecedor, rolamento, nivelamento incorreto ou sobrecarga. O técnico identifica a causa na visita.",
      },
      {
        question: "Consertam máquina de lavar com código de erro no painel?",
        answer:
          "Sim. Decodificamos o erro conforme o fabricante e verificamos placa, sensores, válvulas e motor.",
      },
    ],
  },
  {
    slug: "conserto-lava-e-seca-porto-alegre",
    problems: [
      "Não seca ou seca parcialmente as roupas",
      "Demora excessiva nos ciclos",
      "Cheiro de mofo ou umidade no tambor",
      "Erro no display ou trava na porta",
      "Barulho anormal durante secagem",
      "Consumo de energia elevado",
      "Vazamento de água ou condensação",
    ],
    brands: ["Samsung", "LG", "Electrolux", "Brastemp", "Consul"],
    process: [
      {
        title: "Análise do sistema de lavagem e secagem",
        description:
          "Avaliamos aquecimento, fluxo de ar, sensores de umidade, resistência e placa eletrônica.",
      },
      {
        title: "Limpeza e manutenção preventiva",
        description:
          "Quando necessário, realizamos limpeza de filtros, dutos e componentes que afetam a secagem.",
      },
      {
        title: "Substituição de peças",
        description:
          "Trocamos elementos defeituosos com peças compatíveis e de procedência confiável.",
      },
      {
        title: "Teste de ciclo completo",
        description:
          "Validamos lavagem e secagem antes de concluir o atendimento.",
      },
    ],
    paragraphs: [
      "A lava e seca combina duas funções em um único equipamento, o que exige manutenção técnica mais especializada. Falhas no sistema de secagem são comuns e podem estar ligadas a sensor, resistência, ventilação ou placa.",
      "A ServitecPoa é referência em conserto de lava e seca em Porto Alegre, com atendimento a domicílio para diagnóstico preciso. Atendemos modelos front load e combinações das marcas mais vendidas no Brasil.",
      "Além do reparo, orientamos sobre uso correto e cuidados que prolongam a vida útil do aparelho — como limpeza do filtro de fiapos e ciclos de higienização.",
    ],
    faqs: [
      {
        question: "Por que minha lava e seca lava mas não seca?",
        answer:
          "Pode ser falha na resistência, sensor de umidade, ventoinha, filtro obstruído ou problema na placa. O diagnóstico presencial confirma a causa.",
      },
      {
        question: "É possível consertar lava e seca no mesmo dia?",
        answer:
          "Reparos simples com peça disponível podem ser concluídos na visita. Casos que exigem componente específico têm prazo informado previamente.",
      },
    ],
  },
  {
    slug: "conserto-lava-loucas-porto-alegre",
    problems: [
      "Louça saindo suja ou com resíduos",
      "Máquina não drena ou apresenta vazamento",
      "Erro no painel ou ciclo interrompido",
      "Barulho durante a lavagem",
      "Não aquece a água adequadamente",
      "Porta não fecha ou vedação com defeito",
      "Mau cheiro interno persistente",
    ],
    brands: ["Brastemp", "Electrolux", "Samsung", "Consul", "Bertazzoni", "Gorenje"],
    process: [
      {
        title: "Diagnóstico hidráulico e elétrico",
        description:
          "Verificamos bomba, braços aspersores, aquecedor, sensores e sistema de drenagem.",
      },
      {
        title: "Identificação da causa",
        description:
          "Determinamos se o problema é mecânico, elétrico ou por mau uso/manutenção.",
      },
      {
        title: "Reparo com peças adequadas",
        description:
          "Substituímos componentes defeituosos e ajustamos o funcionamento do ciclo.",
      },
      {
        title: "Teste com ciclo real",
        description:
          "Executamos lavagem completa para garantir resultado satisfatório.",
      },
    ],
    paragraphs: [
      "O lava-louças economiza tempo e água, mas qualquer falha compromete a rotina da cozinha. Oferecemos conserto de lava-louças em Porto Alegre para modelos de piso, embutidos e linha premium.",
      "Atendemos residências com equipamentos nacionais e importados, incluindo modelos integrados a projetos de cozinha planejada. Problemas em bomba de drenagem, válvula de entrada, aquecedor e placa eletrônica são resolvidos com diagnóstico técnico.",
      "Nosso atendimento a domicílio evita o transtorno de transportar o equipamento. O técnico leva ferramentas e peças mais comuns para agilizar o reparo.",
    ],
    faqs: [
      {
        question: "Lava-louças embaixo da bancada também é atendido?",
        answer:
          "Sim. Consertamos modelos embutidos e de piso, com acesso técnico adequado ao gabinete.",
      },
      {
        question: "O mau cheiro pode ser resolvido com manutenção?",
        answer:
          "Na maioria dos casos, sim. Limpeza de filtros, bomba e mangueiras resolve. Se houver peça danificada, indicamos a troca.",
      },
    ],
  },
  {
    slug: "conserto-fogao-cooktop-premium-porto-alegre",
    problems: [
      "Queimadores com chama irregular ou não acendem",
      "Cooktop de indução sem reconhecer panelas",
      "Forno não aquece ou aquece desigual",
      "Painel touch com falha",
      "Cheiro de gás ou escape",
      "Vidro trincado ou suporte danificado",
      "Erro em forno elétrico embutido",
    ],
    brands: ["Bertazzoni", "Gorenje", "Lofra", "Smeg", "Fulgor", "Electrolux", "Brastemp"],
    process: [
      {
        title: "Avaliação de segurança",
        description:
          "Priorizamos verificação de vazamentos, ignição e componentes elétricos antes de qualquer reparo.",
      },
      {
        title: "Diagnóstico por marca",
        description:
          "Cada fabricante premium tem particularidades. Aplicamos procedimento técnico específico.",
      },
      {
        title: "Reparo ou instalação corretiva",
        description:
          "Corrigimos falhas em queimadores, válvulas, módulos de ignição, placa de indução e forno.",
      },
      {
        title: "Teste final de funcionamento",
        description:
          "Validamos acendimento, chama, temperatura e segurança operacional.",
      },
    ],
    paragraphs: [
      "Fogões e cooktops premium exigem técnico com experiência em linha built-in e importada. A ServitecPoa é referência em Porto Alegre para marcas como Bertazzoni, Gorenje, Lofra e outras de alto padrão.",
      "Atendemos cooktops a gás, elétricos e de indução, além de fornos embutidos e combinados. Falhas de ignição, válvula, termopar, módulo eletrônico e sensores são diagnosticadas com rigor técnico.",
      "Trabalhamos com foco em segurança — essencial em equipamentos a gás. Todos os reparos incluem garantia de 90 dias e orientação de uso.",
    ],
    faqs: [
      {
        question: "Vocês atendem cooktop de indução importado?",
        answer:
          "Sim. Temos experiência com marcas premium e diagnóstico de placas, sensores e módulos de indução.",
      },
      {
        question: "É possível instalar cooktop novo junto com o conserto?",
        answer:
          "Sim. Oferecemos instalação profissional de cooktops, fornos e coifas com garantia.",
      },
    ],
  },
  {
    slug: "conserto-secadora-porto-alegre",
    problems: [
      "Secadora não aquece",
      "Roupas saindo úmidas após o ciclo",
      "Barulho excessivo ou tambor travado",
      "Erro no painel ou ciclo interrompido",
      "Cheiro de queimado durante secagem",
      "Porta não fecha corretamente",
      "Consumo de energia acima do normal",
    ],
    brands: ["Brastemp", "Electrolux", "Samsung", "LG", "Consul"],
    process: [
      {
        title: "Inspeção do sistema de aquecimento",
        description:
          "Verificamos resistência, termostato, fusível térmico, motor e correia.",
      },
      {
        title: "Checagem de ventilação",
        description:
          "Avaliamos dutos, filtros e fluxo de ar — essenciais para secagem eficiente.",
      },
      {
        title: "Reparo com peças de qualidade",
        description:
          "Substituímos componentes defeituosos conforme especificação do fabricante.",
      },
      {
        title: "Ciclo de teste",
        description:
          "Executamos secagem completa para confirmar temperatura e tempo adequados.",
      },
    ],
    paragraphs: [
      "A secadora agiliza a rotina doméstica, especialmente em dias chuvosos em Porto Alegre. Quando falha, o acúmulo de roupa úmida vira um problema imediato.",
      "Realizamos conserto de secadora elétrica e a gás a domicílio, com diagnóstico de aquecimento, rotação, sensores e placa. Atendemos modelos nacionais das principais marcas.",
      "Problemas ignorados podem evoluir para danos maiores no motor ou sistema elétrico. Recomendamos agendar visita técnica ao primeiro sinal de mau funcionamento.",
    ],
    faqs: [
      {
        question: "Secadora demora muito para secar. É normal?",
        answer:
          "Não necessariamente. Pode indicar filtro entupido, resistência fraca ou sensor com defeito. O técnico identifica na visita.",
      },
      {
        question: "Consertam secadora a gás em apartamento?",
        answer:
          "Sim, desde que o equipamento esteja instalado conforme normas de segurança. Avaliamos no local.",
      },
    ],
  },
  {
    slug: "conserto-coifa-depurador-porto-alegre",
    problems: [
      "Coifa com sucção fraca ou sem ventilação",
      "Barulho excessivo no motor",
      "Iluminação queimada ou painel com falha",
      "Filtro saturado ou sistema obstruído",
      "Vibração ou instalação instável",
      "Gordura acumulada afetando desempenho",
      "Coifa importada com módulo eletrônico defeituoso",
    ],
    brands: ["Falmec", "Eletromec", "Tecno", "Crissair", "Evol", "Brastemp", "Electrolux"],
    process: [
      {
        title: "Avaliação do sistema de exaustão",
        description:
          "Medimos sucção, verificamos dutos, motor, filtro e instalação.",
      },
      {
        title: "Diagnóstico elétrico",
        description:
          "Testamos motor, capacitor, iluminação e controles de velocidade.",
      },
      {
        title: "Manutenção ou reparo",
        description:
          "Substituímos peças, limpamos componentes e ajustamos a instalação.",
      },
      {
        title: "Verificação final",
        description:
          "Confirmamos sucção adequada e funcionamento silencioso.",
      },
    ],
    paragraphs: [
      "A coifa mantém a cozinha livre de odores, fumaça e gordura. Quando perde eficiência, o conforto e a segurança do ambiente são comprometidos.",
      "A ServitecPoa instala e conserta coifas e depuradores em Porto Alegre, incluindo marcas importadas como Falmec, Eletromec e Tecno. Atendemos modelos de parede, ilha e embutidos.",
      "Além do reparo, orientamos sobre limpeza de filtros e manutenção periódica — essencial para prolongar a vida útil do equipamento.",
    ],
    faqs: [
      {
        question: "A coifa faz barulho mas não aspira. O que fazer?",
        answer:
          "Pode ser filtro saturado, duto obstruído ou motor com desgaste. Agende diagnóstico para evitar queima do motor.",
      },
      {
        question: "Instalam coifa nova comprada separadamente?",
        answer:
          "Sim. Fazemos instalação profissional com fixação segura e teste de exaustão.",
      },
    ],
  },
  {
    slug: "conserto-adega-climatizada-porto-alegre",
    problems: [
      "Temperatura fora da faixa ideal para vinhos",
      "Umidade inadequada no interior",
      "Compressor funcionando sem parar",
      "Barulho excessivo ou vibração",
      "Display com erro ou desligamento automático",
      "Iluminação interna com defeito",
      "Vedação comprometida afetando climatização",
    ],
    brands: ["Eletromec", "Crissair", "Evol", "Brastemp", "Electrolux"],
    process: [
      {
        title: "Leitura de temperatura e umidade",
        description:
          "Verificamos estabilidade climática e histórico de variações no equipamento.",
      },
      {
        title: "Diagnóstico do sistema de refrigeração",
        description:
          "Analisamos compressor, sensor, placa, ventilação e vedação.",
      },
      {
        title: "Reparo especializado",
        description:
          "Corrigimos falhas com peças adequadas para adegas climatizadas.",
      },
      {
        title: "Calibração e teste",
        description:
          "Ajustamos temperatura e umidade conforme especificação do fabricante.",
      },
    ],
    paragraphs: [
      "Adegas climatizadas protegem a qualidade dos vinhos com controle preciso de temperatura e umidade. Qualquer oscilação pode comprometer o envelhecimento e o sabor.",
      "A ServitecPoa oferece manutenção e conserto de adega climatizada em Porto Alegre, com técnicos familiarizados com modelos residenciais e de maior capacidade.",
      "Problemas em sensor, placa, compressor e vedação são comuns e exigem diagnóstico técnico. Atendemos a domicílio para evitar movimentação do equipamento.",
    ],
    faqs: [
      {
        question: "Qual a temperatura ideal para adega de vinhos?",
        answer:
          "Geralmente entre 12°C e 18°C, conforme tipo de vinho. Após o reparo, calibramos conforme o fabricante.",
      },
      {
        question: "A adega está gelando demais. Tem conserto?",
        answer:
          "Sim. Pode ser termostato, sensor ou placa. O diagnóstico identifica o componente responsável.",
      },
    ],
  },
  {
    slug: "instalacao-eletrodomesticos-porto-alegre",
    problems: [
      "Cooktop ou forno embutido precisa de instalação segura",
      "Coifa nova sem fixação adequada",
      "Troca de eletrodoméstico exige adequação elétrica",
      "Necessidade de nivelamento e vedação corretos",
      "Instalação de linha premium com exigências do fabricante",
      "Dúvidas sobre garantia do fabricante após instalação",
      "Remanejamento de equipamento na cozinha",
    ],
    brands: ["Bertazzoni", "Gorenje", "Falmec", "Electrolux", "Brastemp", "Samsung", "LG"],
    process: [
      {
        title: "Vistoria do local",
        description:
          "Avaliamos ponto elétrico, gás, ventilação e medidas do nicho ou bancada.",
      },
      {
        title: "Instalação conforme normas",
        description:
          "Fixamos, conectamos e nivelamos o equipamento seguindo manual do fabricante.",
      },
      {
        title: "Teste de funcionamento",
        description:
          "Verificamos acendimento, aquecimento, exaustão e segurança operacional.",
      },
      {
        title: "Garantia do serviço",
        description:
          "A instalação profissional inclui garantia de 90 dias sobre o serviço executado.",
      },
    ],
    paragraphs: [
      "A instalação correta de eletrodomésticos evita acidentes, perda de garantia e mau funcionamento prematuro. A ServitecPoa realiza instalação profissional em Porto Alegre para cooktops, fornos, coifas e demais equipamentos.",
      "Atendemos tanto linha residencial quanto premium built-in. Cada marca tem requisitos específicos de fixação, ventilação e conexão — seguimos o padrão técnico de cada fabricante.",
      "Se você comprou um equipamento novo ou está reformando a cozinha, nossa equipe garante instalação segura com teste completo e orientação de uso.",
    ],
    faqs: [
      {
        question: "A instalação anula a garantia do fabricante?",
        answer:
          "Não, quando feita corretamente. Instalação profissional preserva a garantia do produto.",
      },
      {
        question: "Preciso comprar material de instalação?",
        answer:
          "Informamos no orçamento o que está incluso. Itens específicos do seu projeto são combinados previamente.",
      },
    ],
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((detail) => detail.slug === slug);
}
