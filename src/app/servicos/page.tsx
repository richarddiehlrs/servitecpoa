import Link from 'next/link'
import { Phone, CheckCircle, Wrench, Clock, Shield } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Serviços de Assistência Técnica | ServitecPoa - Porto Alegre',
  description: 'Conheça todos os serviços da única assistência técnica oficial da ServitecPoa: geladeiras, máquinas de lavar, fogões, micro-ondas, lava-louças, purificadores de água, eletroportáteis e mais. Técnicos especializados em Porto Alegre.',
  keywords: 'assistência técnica geladeira, conserto máquina lavar, reparo fogão, micro-ondas, lava-louças, secadora, coifa, purificador água, eletroportáteis, cafeteira, liquidificador, instalação coifa porto alegre, instalação eletrodomésticos, aspirador central electrolux beam, jardim do salso, Porto Alegre'
}

export default function ServicosPage() {
  const services = [
    {
      name: 'Geladeiras e Freezers',
      icon: '❄️',
      description: 'Assistência técnica completa para geladeiras, freezers e refrigeradores',
      problems: [
        'Não está gelando adequadamente',
        'Fazendo ruído excessivo',
        'Vazamento de água',
        'Porta não veda corretamente',
        'Compressor não funciona',
        'Sistema de degelo com defeito'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Samsung', 'LG', 'Todas as marcas']
    },
    {
      name: 'Máquinas de Lavar Roupas',
      icon: '👕',
      description: 'Reparo especializado em máquinas de lavar, centrífugas e tanquinhos',
      problems: [
        'Não está lavando corretamente',
        'Não centrifuga',
        'Vazamento de água',
        'Não liga ou para durante o ciclo',
        'Problemas na bomba de drenagem',
        'Timer ou placa eletrônica com defeito'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Samsung', 'LG', 'Todas as marcas']
    },
    {
      name: 'Lava e Seca',
      icon: '🔄',
      description: 'Assistência técnica especializada em máquinas lava e seca',
      problems: [
        'Não está lavando adequadamente',
        'Não seca as roupas',
        'Ciclo não completa',
        'Vazamento de água',
        'Ruídos anormais',
        'Problemas no painel de controle'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Samsung', 'LG', 'Todas as marcas']
    },
    {
      name: 'Lava-louças',
      icon: '🍽️',
      description: 'Manutenção e reparo de lava-louças residenciais e comerciais',
      problems: [
        'Não está lavando adequadamente',
        'Problemas na drenagem',
        'Vazamento de água',
        'Não liga ou não completa o ciclo',
        'Problemas no sistema de secagem',
        'Ruídos anormais durante funcionamento'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Bosch', 'Todas as marcas']
    },
    {
      name: 'Fogões e Cooktops',
      icon: '🔥',
      description: 'Assistência técnica para fogões, cooktops e fornos elétricos/a gás',
      problems: [
        'Queimadores não acendem',
        'Forno não aquece corretamente',
        'Problemas no acendimento automático',
        'Vazamento de gás',
        'Timer ou termostato com defeito',
        'Problemas elétricos'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Dako', 'Atlas', 'Todas as marcas']
    },
    {
      name: 'Micro-ondas',
      icon: '📻',
      description: 'Reparo de micro-ondas de todas as marcas e potências',
      problems: [
        'Não aquece os alimentos',
        'Não liga ou display não funciona',
        'Porta não fecha corretamente',
        'Prato não gira',
        'Ruídos estranhos',
        'Problemas no painel de controle'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Panasonic', 'Samsung', 'Todas as marcas']
    },
    {
      name: 'Secadoras de Roupas',
      icon: '🌪️',
      description: 'Manutenção de secadoras de roupas elétricas e a gás',
      problems: [
        'Não está secando adequadamente',
        'Superaquecimento',
        'Não liga ou para durante o ciclo',
        'Tambor não gira',
        'Problemas no sistema de ventilação',
        'Timer com defeito'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Samsung', 'Todas as marcas']
    },
    {
      name: 'Coifas e Depuradores',
      icon: '💨',
      description: 'Reparo e manutenção de coifas, depuradores e exaustores',
      problems: [
        'Motor não funciona',
        'Pouca sucção',
        'Ruído excessivo',
        'Lâmpadas queimadas',
        'Problemas no painel de controle',
        'Filtros entupidos'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Suggar', 'Todas as marcas']
    },
    {
      name: 'Fornos Elétricos',
      icon: '🔥',
      description: 'Assistência técnica para fornos elétricos e de embutir',
      problems: [
        'Não aquece corretamente',
        'Termostato com defeito',
        'Resistências queimadas',
        'Timer não funciona',
        'Porta não fecha bem',
        'Problemas no painel digital'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Fischer', 'Todas as marcas']
    },
    {
      name: 'Purificadores de Água',
      icon: '💧',
      description: 'Assistência técnica para purificadores e filtros de água',
      problems: [
        'Água com gosto ou odor estranho',
        'Pouco fluxo de água',
        'Vazamentos',
        'Não gela a água',
        'Filtro entupido',
        'Problemas na bomba'
      ],
      brands: ['Electrolux', 'IBBL', 'Latina', 'Colormaq', 'Todas as marcas']
    },
    {
      name: 'Eletroportáteis em Geral',
      icon: '🔌',
      description: 'Reparo de diversos eletroportáteis para casa e cozinha',
      problems: [
        'Não liga ou para de funcionar',
        'Superaquecimento',
        'Problemas no motor',
        'Cabo ou plugue danificado',
        'Peças quebradas',
        'Funcionamento irregular'
      ],
      brands: ['Electrolux', 'Philips', 'Mondial', 'Black & Decker', 'Todas as marcas']
    },
    {
      name: 'Aspirador Central Electrolux Beam',
      icon: '🏠',
      description: 'Assistência técnica especializada em sistemas de aspiração central',
      problems: [
        'Perda de sucção',
        'Motor não funciona',
        'Problemas na tubulação',
        'Entupimentos no sistema',
        'Ruídos anormais',
        'Falhas no painel de controle'
      ],
      brands: ['Electrolux Beam', 'Sistemas centrais importados']
    },
    {
      name: 'Instalação de Coifa',
      icon: '🔧',
      description: 'Instalação profissional de coifas e depuradores',
      problems: [
        'Instalação em parede ou ilha',
        'Conexão elétrica adequada',
        'Sistema de exaustão',
        'Dutos e tubulações',
        'Nivelamento e fixação',
        'Teste de funcionamento'
      ],
      brands: ['Electrolux', 'Brastemp', 'Consul', 'Suggar', 'Todas as marcas']
    },
    {
      name: 'Instalação de Eletrodomésticos em Geral',
      icon: '⚙️',
      description: 'Instalação completa de eletrodomésticos com garantia de serviço',
      problems: [
        'Conexões elétricas adequadas',
        'Instalação hidráulica',
        'Nivelamento e fixação',
        'Teste de funcionamento',
        'Orientações de uso',
        'Garantia de instalação'
      ],
      brands: ['Todas as marcas de eletrodomésticos']
    }
  ]

  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Diagnóstico Especializado',
      description: 'Avaliação técnica precisa para identificar a causa do problema'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Garantia de 90 Dias',
      description: 'Todos os serviços possuem garantia estendida'
    },
    {
      icon: <Clock className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Atendimento Rápido',
      description: 'Agendamento no mesmo dia, quando possível'
    }
  ]

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Serviços' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços de
              <span className="text-[#FF8C00]"> Assistência Técnica</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Única assistência técnica oficial de Porto Alegre. Reparo especializado em todos os tipos de eletrodomésticos com 15 anos de experiência
            </p>
            <Link
              href="tel:5140638129"
                className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Solicitar Orçamento: (51) 4063-8129
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Especialistas em Todos os Eletrodomésticos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe de técnicos qualificados atende todos os tipos de eletrodomésticos 
              com peças originais e garantia estendida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {service.name}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Problemas que resolvemos:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.problems.map((problem, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {problem}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Marcas atendidas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand, idx) => (
                        <span key={idx} className="bg-blue-100 text-[#1E3A5F] px-3 py-1 rounded-full text-sm">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contato"
                    className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu Eletrodoméstico com Problema?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe especializada está pronta para diagnosticar e resolver qualquer problema. 
            Orçamento especializado e oficial!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:5140638129"
              className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora: (51) 4063-8129
            </Link>
            <Link
              href="/contato"
              className="border-2 border-white hover:bg-white hover:text-[#1E3A5F] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Solicitar Orçamento Online
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Atendemos Toda Porto Alegre
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Nossa equipe atende domicílio em todos os bairros de Porto Alegre e região metropolitana
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Principais Regiões Atendidas:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
                <div>Centro</div>
                <div>Zona Norte</div>
                <div>Zona Sul</div>
                <div>Zona Leste</div>
                <div>Zona Oeste</div>
                <div>Moinhos de Vento</div>
                <div>Bela Vista</div>
                <div>Petrópolis</div>
                <div>Menino Deus</div>
                <div>Auxiliadora</div>
                <div>Jardim Botânico</div>
                <div>E muito mais...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
