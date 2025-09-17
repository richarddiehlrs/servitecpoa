import { Metadata } from 'next'
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidade | ServitecPoa - Assistência Técnica',
  description: 'Política de privacidade da ServitecPoa. Saiba como coletamos, usamos e protegemos suas informações pessoais.',
  keywords: 'política de privacidade, privacidade, dados pessoais, LGPD, servitecpoa, assistência técnica porto alegre'
}

export default function PrivacidadePage() {
  const sections = [
    {
      icon: <Eye className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Coleta de Informações',
      content: 'Coletamos informações que você nos fornece diretamente, como nome, telefone, endereço e detalhes sobre seus eletrodomésticos quando solicita nossos serviços.'
    },
    {
      icon: <Database className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Uso das Informações',
      content: 'Utilizamos suas informações para fornecer serviços de assistência técnica, agendar visitas, processar pagamentos e melhorar nossos serviços.'
    },
    {
      icon: <Lock className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Proteção de Dados',
      content: 'Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.'
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#FF8C00]" />,
      title: 'Seus Direitos',
      content: 'Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais, conforme previsto na Lei Geral de Proteção de Dados (LGPD).'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Política de
              <span className="text-[#FF8C00]"> Privacidade</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Transparência e proteção dos seus dados pessoais são fundamentais para a ServitecPoa
            </p>
            <div className="flex items-center justify-center space-x-2 text-[#FF8C00]">
              <Shield className="w-6 h-6" />
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
                A ServitecPoa Assistência Técnica ("nós", "nosso" ou "empresa") respeita sua privacidade e está comprometida em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nossos serviços.
              </p>
              <p className="text-gray-700">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e outras legislações aplicáveis de proteção de dados.
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
              
              {/* Data Collection */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">2. Informações que Coletamos</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">2.1 Informações Fornecidas por Você:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Nome completo e dados de contato (telefone, e-mail, endereço)</li>
                  <li>Informações sobre eletrodomésticos que necessitam de reparo</li>
                  <li>Histórico de serviços solicitados</li>
                  <li>Comunicações e correspondências conosco</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">2.2 Informações Coletadas Automaticamente:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dados de navegação em nosso site (cookies, endereço IP)</li>
                  <li>Informações sobre o dispositivo utilizado</li>
                  <li>Dados de uso do Google Analytics</li>
                </ul>
              </div>

              {/* Data Usage */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">3. Como Utilizamos suas Informações</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Finalidades Principais:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Prestação de serviços de assistência técnica</li>
                      <li>Agendamento e coordenação de visitas</li>
                      <li>Processamento de pagamentos</li>
                      <li>Comunicação sobre serviços</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Finalidades Secundárias:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Melhoria dos nossos serviços</li>
                      <li>Análise de tendências e estatísticas</li>
                      <li>Marketing e comunicações promocionais</li>
                      <li>Cumprimento de obrigações legais</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Protection */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">4. Proteção e Segurança dos Dados</h2>
                
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Lock className="w-8 h-8 text-[#FF8C00] mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Acesso Não Autorizado</h4>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-8 h-8 text-[#FF8C00] mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Alteração Indevida</h4>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Database className="w-8 h-8 text-[#FF8C00] mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-800">Perda de Dados</h4>
                  </div>
                </div>
              </div>

              {/* User Rights */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">5. Seus Direitos</h2>
                
                <p className="text-gray-700 mb-4">
                  Conforme a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <UserCheck className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Acesso</h4>
                      <p className="text-gray-600 text-sm">Solicitar informações sobre seus dados</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Correção</h4>
                      <p className="text-gray-600 text-sm">Corrigir dados incorretos ou incompletos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Database className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Portabilidade</h4>
                      <p className="text-gray-600 text-sm">Transferir dados para outro fornecedor</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-[#FF8C00] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Exclusão</h4>
                      <p className="text-gray-600 text-sm">Solicitar remoção dos seus dados</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-[#FF8C00] text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">6. Contato</h2>
                <p className="mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
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
                    <p>E-mail: contato@servitecpoa.com.br</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
