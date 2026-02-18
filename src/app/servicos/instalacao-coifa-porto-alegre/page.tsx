import type { Metadata } from 'next'
import { Phone, Wrench, Clock, CheckCircle, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instalação de Coifa Porto Alegre | ServitecPoa - Especialista',
  description: 'Instalação de coifa em Porto Alegre. Especialista em instalação de coifas, depuradores e exaustores. Atendimento domiciliar, instalação profissional, garantia 90 dias. (51) 4063-8129',
  keywords: 'instalação coifa Porto Alegre, instalação depurador, instalação exaustor, assistência técnica coifa, técnico coifa Porto Alegre, instalação coifa domicílio, instalação profissional coifa, garantia instalação coifa, coifa não funciona',
  openGraph: {
    title: 'Instalação de Coifa Porto Alegre | ServitecPoa',
    description: 'Especialista em instalação de coifa em Porto Alegre. Atendimento domiciliar, instalação profissional, garantia 90 dias.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function InstalacaoCoifaPage() {
  const problemas = [
    'Não aspira',
    'Fazendo barulho',
    'Não liga',
    'Vazamento de ar',
    'Painel não funciona',
    'Erro no display',
    'Consumo excessivo',
    'Não ventila',
    'Filtros entupidos',
    'Motor queimado'
  ]

  const marcas = [
    'Electrolux', 'Brastemp', 'Consul', 'Samsung', 'Britânia', 'Midea',
    'Mondial', 'Whirlpool', 'LG', 'Panasonic', 'Continental', 'Prosdócimo',
    'Colormaq', 'Esmaltec', 'Atlas', 'Fischer', 'Bosch', 'Electrolux'
  ]

  const bairros = [
    'Centro', 'Moinhos de Vento', 'Petrópolis', 'Boa Vista', 'Cidade Baixa',
    'Higienópolis', 'Chácara das Pedras', 'Passo d\'Areia', 'Bela Vista',
    'Mont\'Serrat', 'Jardim Botânico', 'Rio Branco', 'Auxiliadora',
    'Três Figueiras', 'Menino Deus', 'Bom Fim', 'Jardim do Salso'
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Instalação de Coifa em
              <span className="text-[#FF8C00]"> Porto Alegre</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Especialista em instalação de coifas, depuradores e exaustores.
              Atendimento domiciliar em toda Porto Alegre com garantia de 90 dias.
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
                href="https://wa.me/555140638129?text=Olá! Preciso de instalação de coifa em Porto Alegre"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas Comuns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Problemas que Resolvemos
              </h2>
              <p className="text-xl text-gray-600">
                Especialistas em instalação e conserto de coifa com 15 anos de experiência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemas.map((problema, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#FF8C00]">
                  <div className="flex items-center mb-3">
                    <Wrench className="w-6 h-6 text-[#FF8C00] mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">{problema}</h3>
                  </div>
                  <p className="text-gray-600">
                    Diagnóstico preciso e reparo especializado para {problema.toLowerCase()}.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marcas Atendidas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Marcas que Atendemos em Porto Alegre
              </h2>
              <p className="text-xl text-gray-600">
                Instalação de coifa de todas as principais marcas com peças originais
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {marcas.map((marca, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center border-l-4 border-[#FF8C00]">
                  <span className="font-semibold text-gray-800">{marca}</span>
                </div>
              ))}
            </div>

            {/* Informações Locais */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Por que Escolher a ServitecPoa para Instalação de Coifa?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#FF8C00] mb-3">🏆 Especialistas em Porto Alegre</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 15 anos de experiência em instalação de coifa</li>
                    <li>• Técnicos certificados pelas principais marcas</li>
                    <li>• Atendimento em todos os bairros de Porto Alegre</li>
                    <li>• Instalação profissional com garantia de 90 dias</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#FF8C00] mb-3">⚡ Atendimento Rápido</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Instalação no mesmo dia</li>
                    <li>• Orçamento gratuito</li>
                    <li>• Atendimento de emergência</li>
                    <li>• Suporte técnico completo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Por que Escolher a ServitecPoa?
              </h2>
              <p className="text-xl text-gray-600">
                A melhor opção para instalação de coifa em Porto Alegre
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instalação Rápida</h3>
                <p className="text-gray-600">Instalação no mesmo dia para sua conveniência</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Instalação Profissional</h3>
                <p className="text-gray-600">Técnicos especializados em instalação de coifa</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Garantia 90 Dias</h3>
                <p className="text-gray-600">Garantia completa em todas as instalações</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Atendimento Domiciliar</h3>
                <p className="text-gray-600">Vamos até sua casa em toda Porto Alegre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atendimento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Atendemos em Todos os Bairros de Porto Alegre
              </h2>
              <p className="text-xl text-gray-600">
                Instalação de coifa domiciliar em toda a cidade
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {bairros.map((bairro, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 text-center border-l-4 border-[#FF8C00]">
                  <span className="font-semibold text-gray-800">{bairro}</span>
                </div>
              ))}
            </div>

            {/* Informações Específicas de Porto Alegre */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Instalação de Coifa em Porto Alegre - RS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏠</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Atendimento Domiciliar</h4>
                  <p className="text-gray-600">Vamos até sua casa em qualquer bairro de Porto Alegre para instalação de coifa</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚙️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Instalação Profissional</h4>
                  <p className="text-gray-600">Técnicos especializados garantem instalação perfeita e segura</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🛡️</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Garantia 90 Dias</h4>
                  <p className="text-gray-600">Todos as instalações de coifa possuem garantia de 90 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de Instalação de Coifa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tenha uma coifa funcionando perfeitamente! Ligue agora e agende sua instalação profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:5140638129"
              className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar: (51) 4063-8129
            </Link>
            <Link
              href="https://wa.me/555140638129?text=Olá! Preciso de instalação de coifa em Porto Alegre"
              target="_blank"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
