import Link from 'next/link'
import HeroBanner from '@/components/HeroBanner'
import { 
  Clock, 
  Shield, 
  Users, 
  Phone,
  CheckCircle,
  MapPin,
  Award
} from 'lucide-react'

export default function Home() {
  const services = [
    {
      name: 'Geladeiras e Freezers',
      description: 'Reparo completo em geladeiras, freezers e refrigeradores de todas as marcas',
      icon: '❄️'
    },
    {
      name: 'Máquinas de Lavar',
      description: 'Conserto de máquinas de lavar roupas, centrífugas e tanquinhos',
      icon: '👕'
    },
    {
      name: 'Lava e Seca',
      description: 'Assistência técnica especializada em máquinas lava e seca',
      icon: '🔄'
    },
    {
      name: 'Lava-louças',
      description: 'Manutenção e reparo de lava-louças residenciais e comerciais',
      icon: '🍽️'
    },
    {
      name: 'Fogões e Cooktops',
      description: 'Assistência técnica para fogões, cooktops e fornos elétricos/a gás',
      icon: '🔥'
    },
    {
      name: 'Micro-ondas',
      description: 'Reparo de micro-ondas de todas as marcas e potências',
      icon: '📻'
    },
    {
      name: 'Secadoras',
      description: 'Manutenção de secadoras de roupas elétricas e a gás',
      icon: '🌪️'
    },
    {
      name: 'Purificadores de Água',
      description: 'Assistência técnica para purificadores e filtros de água',
      icon: '💧'
    },
    {
      name: 'Eletroportáteis',
      description: 'Reparo de eletroportáteis em geral: cafeteiras, liquidificadores, batedeiras',
      icon: '🔌'
    },
    {
      name: 'Aspirador Central',
      description: 'Assistência técnica especializada em aspiradores centrais Electrolux Beam',
      icon: '🏠'
    },
    {
      name: 'Instalação de Coifa',
      description: 'Instalação profissional de coifas e depuradores de todas as marcas',
      icon: '🔧'
    },
    {
      name: 'Instalação de Eletrodomésticos',
      description: 'Instalação completa de eletrodomésticos em geral com garantia',
      icon: '⚙️'
    }
  ]

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-[#FF8C00]" />,
      title: '15 Anos de Experiência',
      description: 'Mais de uma década oferecendo serviços de qualidade em Porto Alegre'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Garantia dos Serviços',
      description: 'Todos os nossos reparos possuem garantia de 90 dias'
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Técnicos Qualificados',
      description: 'Profissionais certificados e especializados em eletrodomésticos'
    },
    {
      icon: <Award className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Parceiro Electrolux',
      description: 'Assistência técnica com peças originais pedidos direto de fábrica'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D4A73] to-[#1E3A5F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Assistência Técnica 
              <span className="text-[#FF8C00]"> Oficial</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Única assistência técnica oficial de Porto Alegre. 15 anos de experiência em reparo de eletrodomésticos. 
              Técnicos qualificados e peças originais.
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
                href="/servicos"
                className="border-2 border-white hover:bg-white hover:text-[#1E3A5F] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Carousel */}
      <HeroBanner />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que escolher a ServitecPoa?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos a única assistência técnica oficial de eletrodomésticos em Porto Alegre
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Atendemos todos os tipos de eletrodomésticos com qualidade e agilidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/contato"
                    className="text-[#FF8C00] hover:text-[#E67C00] font-semibold inline-flex items-center"
                  >
                    Solicitar Orçamento
                    <CheckCircle className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="bg-[#1E3A5F] hover:bg-[#2D4A73] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de assistência técnica
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Vocês atendem em domicílio?",
                  answer: "Sim! Realizamos atendimento em domicílio em toda Porto Alegre. Nossa equipe vai até sua casa para diagnóstico e reparo dos seus eletrodomésticos."
                },
                {
                  question: "Qual é o prazo para reparo dos equipamentos?",
                  answer: "O prazo varia conforme a complexidade do problema e disponibilidade de peças. Em média, reparos simples são concluídos em 24-48h, enquanto casos mais complexos podem levar de 3 a 7 dias úteis."
                },
                {
                  question: "Vocês trabalham com peças originais?",
                  answer: "Sim! Como parceiros Electrolux, temos acesso direto às peças originais da fábrica. Para outras marcas, priorizamos sempre peças originais ou de primeira qualidade."
                },
                {
                  question: "O orçamento tem custo?",
                  answer: "Realizamos diagnóstico especializado com uma taxa de avaliação. Caso você aprove o serviço, este valor é abatido do total do reparo."
                },
                {
                  question: "Quais marcas vocês atendem?",
                  answer: "Atendemos todas as principais marcas: Electrolux, Brastemp, Consul, Samsung, LG, Bosch, Fischer, Suggar e muitas outras."
                },
                {
                  question: "Vocês oferecem garantia dos serviços?",
                  answer: "Sim! Todos os nossos reparos possuem garantia de 90 dias, garantindo sua tranquilidade e a qualidade do nosso trabalho."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF8C00] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de Assistência Técnica?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nossa equipe de técnicos especializados está pronta para atender você. 
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
              Como Chegar
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nossa Localização
              </h2>
              <p className="text-xl text-gray-600">
                Estamos no bairro Jardim do Salso, atendendo toda Porto Alegre
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-[#FF8C00]" />
                      <div>
                        <p className="font-semibold">Endereço:</p>
                        <p className="text-gray-600">Rua São Simão, 505 - Jardim do Salso</p>
                        <p className="text-gray-600">Porto Alegre - RS</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#FF8C00]" />
                      <div>
                        <p className="font-semibold">Telefone:</p>
                        <p className="text-gray-600">(51) 4063-8129</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#FF8C00]" />
                      <div>
                        <p className="font-semibold">Horário de Funcionamento:</p>
                        <p className="text-gray-600">Segunda a Sexta: 8h30 às 12h - 13h30 às 18h</p>
                        <p className="text-gray-600">Sábado: 9h às 12h - 13h às 18h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-300 rounded-lg h-64 lg:h-80 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Mapa interativo será carregado aqui</p>
                  <p className="text-sm">Rua São Simão, 505 - Jardim do Salso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}