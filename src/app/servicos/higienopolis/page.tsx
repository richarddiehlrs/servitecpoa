import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Assistência Técnica Higienópolis | ServitecPoa - Porto Alegre',
  description: 'Assistência técnica de eletrodomésticos em Higienópolis, Porto Alegre. Conserto de geladeiras, máquinas de lavar, fogões, micro-ondas. Atendimento em domicílio, técnicos qualificados, garantia 90 dias.',
  keywords: 'assistência técnica higienópolis, conserto eletrodomésticos higienópolis, técnico geladeira higienópolis, reparo máquina lavar higienópolis, instalação coifa higienópolis, porto alegre, servitecpoa'
}

export default function HigienopolisPage() {
  const services = [
    {
      name: 'Conserto de Geladeiras',
      description: 'Reparo completo em geladeiras e freezers em Higienópolis',
      icon: '❄️',
      problems: ['Não gela', 'Vazamento', 'Barulho excessivo', 'Não liga']
    },
    {
      name: 'Conserto de Máquinas de Lavar',
      description: 'Assistência técnica especializada em lavadoras no bairro',
      icon: '👕',
      problems: ['Não centrifuga', 'Vazamento', 'Não liga', 'Ciclo incompleto']
    },
    {
      name: 'Conserto de Fogões',
      description: 'Reparo de fogões e cooktops em Higienópolis',
      icon: '🔥',
      problems: ['Bocas não acendem', 'Forno não aquece', 'Vazamento gás', 'Chamas fracas']
    },
    {
      name: 'Instalação de Coifas',
      description: 'Instalação profissional de coifas e depuradores',
      icon: '💨',
      problems: ['Instalação em parede', 'Conexão elétrica', 'Sistema exaustão', 'Nivelamento']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Assistência Técnica em
              <span className="text-[#FF8C00]"> Higienópolis</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Serviços especializados em eletrodomésticos no bairro Higienópolis, Porto Alegre. 
              Atendimento em domicílio, técnicos qualificados e garantia de 90 dias.
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
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                  Atendimento em Higienópolis
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-[#FF8C00]" />
                    <div>
                      <p className="font-semibold">Nossa Sede:</p>
                      <p className="text-gray-600">Rua São Simão, 505 - Jardim do Salso</p>
                      <p className="text-gray-600">Porto Alegre - RS</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-[#FF8C00]" />
                    <div>
                      <p className="font-semibold">Telefone:</p>
                      <p className="text-gray-600">(51) 4063-8129</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                  Por que Escolher a ServitecPoa?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF8C00]" />
                    <span>Atendimento em domicílio em Higienópolis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF8C00]" />
                    <span>15 anos de experiência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF8C00]" />
                    <span>Peças originais Electrolux</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF8C00]" />
                    <span>Garantia de 90 dias</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FF8C00]" />
                    <span>Técnicos qualificados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços em Higienópolis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Atendemos todos os tipos de eletrodomésticos com qualidade e agilidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Problemas comuns:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {service.problems.map((problem, idx) => (
                      <li key={idx}>{problem}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contato"
                  className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
                >
                  Solicitar Orçamento
                  <Phone className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF8C00] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de Assistência Técnica em Higienópolis?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender você no bairro. 
            Orçamento sem compromisso!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:5140638129"
              className="bg-white hover:bg-gray-100 text-[#FF8C00] px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (51) 4063-8129
            </Link>
            <Link
              href="/contato"
              className="border-2 border-white hover:bg-white hover:text-[#FF8C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
