import { Metadata } from 'next'
import { FileText, Scale, Users, Shield, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Termos de Uso | ServitecPoa - Assistência Técnica',
  description: 'Termos de uso e condições de serviço da ServitecPoa. Conheça nossos termos e condições para prestação de serviços.',
  keywords: 'termos de uso, condições de serviço, termos e condições, servitecpoa, assistência técnica porto alegre'
}

export default function TermosPage() {
  const sections = [
    {
      icon: <Users className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Aceitação dos Termos',
      content: 'Ao utilizar nossos serviços, você concorda com estes termos e condições. Leia atentamente antes de solicitar nossos serviços.'
    },
    {
      icon: <Scale className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Responsabilidades',
      content: 'Definimos claramente as responsabilidades da empresa e do cliente para garantir um serviço transparente e de qualidade.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Garantias',
      content: 'Oferecemos garantia de 90 dias em todos os nossos serviços, com condições claras e transparentes para sua tranquilidade.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Limitações',
      content: 'Estabelecemos limitações de responsabilidade de forma justa e transparente, sempre priorizando a qualidade do serviço.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Termos de
              <span className="text-[#FF8C00]"> Uso</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Condições claras e transparentes para a prestação de nossos serviços de assistência técnica
            </p>
            <div className="flex items-center justify-center space-x-2 text-[#FF8C00]">
              <FileText className="w-6 h-6" />
              <span className="font-semibold">Última atualização: Janeiro de 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Introdução</h2>
              <p className="text-gray-700 mb-4">
                Estes Termos de Uso ("Termos") regem o uso dos serviços oferecidos pela ServitecPoa Assistência Técnica ("Empresa", "nós" ou "nosso"), empresa especializada em assistência técnica de eletrodomésticos em Porto Alegre.
              </p>
              <p className="text-gray-700">
                Ao solicitar nossos serviços, você ("Cliente" ou "usuário") concorda em cumprir e estar vinculado a estes Termos. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h3 className="text-xl font-semibold text-[#1E3A5F] ml-3">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-8">
              
              {/* Services */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">2. Serviços Oferecidos</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Descrição dos Serviços:</h3>
                <p className="text-gray-700 mb-4">
                  A ServitecPoa oferece serviços especializados de assistência técnica para eletrodomésticos, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Conserto e reparo de geladeiras e freezers</li>
                  <li>Assistência técnica para máquinas de lavar e lava e seca</li>
                  <li>Reparo de fogões, cooktops e fornos</li>
                  <li>Conserto de micro-ondas e eletroportáteis</li>
                  <li>Instalação de coifas e depuradores</li>
                  <li>Instalação de eletrodomésticos em geral</li>
                  <li>Conserto de purificadores de água</li>
                  <li>Assistência técnica para aspirador central Electrolux Beam</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Área de Atendimento:</h3>
                <p className="text-gray-700">
                  Atendemos em domicílio em toda Porto Alegre, incluindo Jardim do Salso, Centro, Zona Norte, Sul, Leste e Oeste, e demais bairros da capital gaúcha.
                </p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">3. Responsabilidades das Partes</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">3.1 Responsabilidades da Empresa:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Prestar serviços com qualidade e profissionalismo</li>
                      <li>Utilizar peças originais ou de primeira qualidade</li>
                      <li>Respeitar prazos acordados</li>
                      <li>Fornecer garantia de 90 dias nos serviços</li>
                      <li>Manter sigilo sobre informações do cliente</li>
                      <li>Apresentar orçamento prévio quando solicitado</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">3.2 Responsabilidades do Cliente:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Fornecer informações corretas sobre o equipamento</li>
                      <li>Permitir acesso ao local do serviço</li>
                      <li>Efetuar pagamento conforme acordado</li>
                      <li>Comunicar problemas ou dúvidas prontamente</li>
                      <li>Respeitar as condições de garantia</li>
                      <li>Manter o equipamento em condições adequadas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing and Payment */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">4. Preços e Pagamento</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">4.1 Orçamento:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Orçamento gratuito para diagnóstico inicial</li>
                  <li>Preços podem variar conforme complexidade do serviço</li>
                  <li>Valores incluem mão de obra e peças (quando aplicável)</li>
                  <li>Orçamento válido por 30 dias</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">4.2 Formas de Pagamento:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">À Vista:</h4>
                    <p className="text-gray-600">Dinheiro, PIX ou cartão de débito</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Parcelado:</h4>
                    <p className="text-gray-600">Cartão de crédito (consulte condições)</p>
                  </div>
                </div>
              </div>

              {/* Warranty */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">5. Garantia</h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-green-800">Garantia de 90 Dias</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Todos os nossos serviços possuem garantia de 90 dias, cobrindo defeitos de mão de obra e peças instaladas.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">5.1 Condições da Garantia:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Garantia válida apenas para o defeito original reparado</li>
                  <li>Cliente deve comunicar problemas dentro do prazo</li>
                  <li>Garantia não cobre danos por uso inadequado</li>
                  <li>Peças com defeito de fabricação têm garantia do fornecedor</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">5.2 Exclusões da Garantia:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Danos causados por acidentes ou uso inadequado</li>
                  <li>Desgaste natural de peças</li>
                  <li>Modificações não autorizadas no equipamento</li>
                  <li>Falta de manutenção preventiva</li>
                </ul>
              </div>

              {/* Limitations */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">6. Limitações de Responsabilidade</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                    <h3 className="text-lg font-semibold text-yellow-800">Importante</h3>
                  </div>
                  <p className="text-yellow-700">
                    Nossa responsabilidade está limitada ao valor do serviço prestado, exceto em casos de dolo ou negligência comprovada.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">6.1 Limitações:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Não nos responsabilizamos por danos indiretos ou lucros cessantes</li>
                  <li>Responsabilidade limitada ao valor do serviço contratado</li>
                  <li>Cliente deve fazer backup de dados antes de reparos</li>
                  <li>Equipamentos muito antigos podem ter limitações de reparo</li>
                </ul>
              </div>

              {/* Contact and Support */}
              <div className="bg-[#FF8C00] text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">7. Contato e Suporte</h2>
                <p className="mb-4">
                  Para esclarecimentos sobre estes Termos de Uso ou suporte técnico, entre em contato conosco:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">ServitecPoa Assistência Técnica</h3>
                    <p>Rua São Simão, 505 - Jardim do Salso</p>
                    <p>Porto Alegre - RS, 91040-000</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Contato</h3>
                    <p>Telefone: (51) 4063-8129</p>
                    <p>WhatsApp: (51) 4063-8129</p>
                    <p>E-mail: contato@servitecpoa.com.br</p>
                  </div>
                </div>
              </div>

              {/* Final Provisions */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">8. Disposições Finais</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">8.1 Alterações:</h3>
                <p className="text-gray-700 mb-4">
                  Estes Termos podem ser alterados a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação em nosso site.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">8.2 Lei Aplicável:</h3>
                <p className="text-gray-700 mb-4">
                  Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca de Porto Alegre/RS.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">8.3 Aceitação:</h3>
                <p className="text-gray-700">
                  Ao solicitar nossos serviços, você declara ter lido, compreendido e aceito integralmente estes Termos de Uso.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
