import type { Metadata } from 'next'
import { Phone, Wrench, Clock, Star, CheckCircle, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conserto de Geladeira Porto Alegre | ServitecPoa - Especialista',
  description: 'Conserto de geladeira em Porto Alegre. Especialista em reparo de geladeiras, freezers e refrigeradores. Atendimento domiciliar, peças originais, garantia 90 dias. (51) 4063-8129',
  keywords: 'conserto geladeira Porto Alegre, reparo geladeira, conserto freezer, conserto refrigerador, assistência técnica geladeira, técnico geladeira Porto Alegre, conserto geladeira domicílio, peças geladeira, garantia conserto geladeira, geladeira não gelando',
  openGraph: {
    title: 'Conserto de Geladeira Porto Alegre | ServitecPoa',
    description: 'Especialista em conserto de geladeira em Porto Alegre. Atendimento domiciliar, peças originais, garantia 90 dias.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function ConsertoGeladeiraPage() {
  const problemas = [
    'Não está gelando',
    'Gelando demais',
    'Fazendo barulho',
    'Não liga',
    'Vazando água',
    'Luz não acende',
    'Porta não fecha',
    'Gelo no freezer',
    'Erro no painel',
    'Consumo excessivo'
  ]

  const marcas = [
    'Electrolux', 'Brastemp', 'Consul', 'Whirlpool', 'LG', 'Samsung',
    'Panasonic', 'Midea', 'Continental', 'Prosdócimo', 'Colormaq'
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
              Conserto de Geladeira em
              <span className="text-[#FF8C00]"> Porto Alegre</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Especialista em reparo de geladeiras, freezers e refrigeradores. 
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
                href="https://wa.me/555140638129?text=Olá! Preciso de conserto de geladeira em Porto Alegre"
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
                Especialistas em conserto de geladeira com 15 anos de experiência
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
                Marcas que Atendemos
              </h2>
              <p className="text-xl text-gray-600">
                Conserto de geladeira de todas as principais marcas
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {marcas.map((marca, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                  <span className="font-semibold text-gray-800">{marca}</span>
                </div>
              ))}
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
                A melhor opção para conserto de geladeira em Porto Alegre
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Atendimento Rápido</h3>
                <p className="text-gray-600">Atendimento no mesmo dia para casos urgentes</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Peças Originais</h3>
                <p className="text-gray-600">Peças originais e de primeira qualidade</p>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8C00] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Garantia 90 Dias</h3>
                <p className="text-gray-600">Garantia completa em todos os reparos</p>
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
                Conserto de geladeira domiciliar em toda a cidade
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {bairros.map((bairro, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-4 text-center">
                  <span className="font-semibold text-gray-800">{bairro}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua Geladeira com Problema?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não perca seus alimentos! Ligue agora e tenha sua geladeira funcionando perfeitamente.
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
              href="https://wa.me/555140638129?text=Olá! Preciso de conserto de geladeira em Porto Alegre"
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
