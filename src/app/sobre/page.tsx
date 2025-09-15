import { Clock, Users, Award, Shield, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Sobre Nós | ServitecPoa - 15 Anos de Experiência',
  description: 'Conheça a história da ServitecPoa, única assistência técnica oficial de Porto Alegre. 15 anos de experiência em eletrodomésticos. Técnicos qualificados e parceria Electrolux.',
  keywords: 'sobre servitecpoa, história empresa, assistência técnica porto alegre, técnicos qualificados, parceiro electrolux, jardim do salso, instalação eletrodomésticos, 15 anos experiência'
}

export default function SobrePage() {
  const values = [
    {
      icon: <Clock className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Experiência',
      description: '15 anos no mercado de assistência técnica, acumulando conhecimento e expertise'
    },
    {
      icon: <Users className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Equipe Qualificada',
      description: 'Técnicos certificados e constantemente atualizados com as novas tecnologias'
    },
    {
      icon: <Award className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Parceria Electrolux',
      description: 'Assistência técnica com acesso a peças originais e treinamento oficial'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#FF8C00]" />,
      title: 'Garantia e Qualidade',
      description: 'Todos os serviços com garantia de 90 dias e compromisso com a excelência'
    }
  ]

  const achievements = [
    'Mais de 10.000 equipamentos reparados',
    'Parceria com Electrolux',
    '98% de satisfação dos clientes',
    'Atendimento em toda Porto Alegre',
    'Equipe de técnicos certificados',
    'Peças originais garantidas'
  ]

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Sobre Nós' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a
              <span className="text-[#FF8C00]"> ServitecPoa</span>
            </h1>
            <p className="text-xl text-gray-300">
              Única assistência técnica oficial de Porto Alegre com 15 anos dedicados à excelência em eletrodomésticos
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Nossa História
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
                  <p>
                    Fundada em 2009, a <strong className="text-[#1E3A5F]">ServitecPoa</strong> nasceu 
                    com o propósito de oferecer serviços de assistência técnica de alta qualidade 
                    para eletrodomésticos em Porto Alegre e região metropolitana.
                  </p>
                  <p>
                    Ao longo de <strong className="text-[#FF8C00]">15 anos</strong>, construímos 
                    uma sólida reputação baseada na confiança, qualidade e comprometimento com 
                    nossos clientes. Nossa equipe de técnicos especializados passou por constante 
                    capacitação para acompanhar as evoluções tecnológicas do mercado.
                  </p>
                  <p>
                    Como <strong className="text-[#1E3A5F]">parceiros Electrolux</strong>, 
                    temos acesso às peças originais e aos mais recentes treinamentos técnicos, 
                    garantindo que seus eletrodomésticos recebam o melhor cuidado possível.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossos Números</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF8C00] mb-2">15+</div>
                    <div className="text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF8C00] mb-2">10k+</div>
                    <div className="text-gray-600">Equipamentos Reparados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF8C00] mb-2">98%</div>
                    <div className="text-gray-600">Satisfação dos Clientes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#FF8C00] mb-2">100%</div>
                    <div className="text-gray-600">Peças Originais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os pilares que sustentam nosso compromisso com a excelência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Missão</h3>
                <p className="text-gray-700">
                  Oferecer serviços de assistência técnica de excelência, 
                  prolongando a vida útil dos eletrodomésticos de nossos clientes 
                  com soluções eficientes e duradouras.
                </p>
              </div>
              <div className="text-center p-8 bg-orange-50 rounded-lg">
                <h3 className="text-2xl font-bold text-[#FF8C00] mb-4">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecida como a principal referência em assistência técnica 
                  de eletrodomésticos em Porto Alegre, expandindo nossos serviços 
                  para toda a região sul do Brasil.
                </p>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">Valores</h3>
                <p className="text-gray-700">
                  Comprometimento, qualidade, honestidade, respeito ao cliente 
                  e busca constante pela excelência em todos os nossos serviços 
                  e relacionamentos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-[#1E3A5F] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Nossos Diferenciais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-[#2D4A73] rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#FF8C00] flex-shrink-0" />
                  <span className="text-left">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Profissionais qualificados e dedicados ao seu atendimento
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Técnicos Especializados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Qualificações:</h4>
                  <ul className="space-y-2 text-gray-600 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Certificação técnica em eletrodomésticos
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Treinamento oficial Electrolux
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Atualização constante em novas tecnologias
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Experiência mínima de 5 anos
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Compromissos:</h4>
                  <ul className="space-y-2 text-gray-600 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Atendimento cordial e profissional
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Diagnóstico preciso e honesto
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Uso exclusivo de peças originais
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Garantia de 90 dias em todos os serviços
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FF8C00] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confie na Nossa Experiência
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            15 anos cuidando dos seus eletrodomésticos com qualidade e confiança. 
            Entre em contato e comprove nosso diferencial!
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
              className="border-2 border-white hover:bg-white hover:text-[#FF8C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
