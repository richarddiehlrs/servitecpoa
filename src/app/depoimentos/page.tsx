import Link from 'next/link'
import { Star, Quote, Phone, CheckCircle } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Depoimentos e Avaliações | ServitecPoa - Porto Alegre',
  description: 'Veja os depoimentos de nossos clientes satisfeitos. Única assistência técnica oficial de Porto Alegre com mais de 15 anos de experiência em eletrodomésticos e avaliações positivas.',
  keywords: 'depoimentos servitecpoa, avaliações assistência técnica, clientes satisfeitos, porto alegre, eletrodomésticos, electrolux'
}

export default function DepoimentosPage() {
  const depoimentos = [
    {
      nome: "Maria Silva",
      servico: "Reparo de Geladeira",
      avaliacao: 5,
      comentario: "Excelente atendimento! O técnico foi muito profissional e conseguiu resolver o problema da minha geladeira rapidamente. Recomendo muito!",
      data: "Março 2024"
    },
    {
      nome: "João Santos",
      servico: "Conserto de Máquina de Lavar",
      avaliacao: 5,
      comentario: "Serviço de primeira qualidade. A máquina ficou funcionando perfeitamente após o reparo. Técnico muito competente e pontual.",
      data: "Fevereiro 2024"
    },
    {
      nome: "Ana Costa",
      servico: "Reparo de Micro-ondas",
      avaliacao: 5,
      comentario: "Atendimento excepcional! Além de resolver o problema, o técnico me deu dicas importantes para conservar melhor o aparelho.",
      data: "Janeiro 2024"
    },
    {
      nome: "Carlos Oliveira",
      servico: "Instalação de Coifa",
      avaliacao: 5,
      comentario: "Instalação perfeita da coifa. Equipe muito profissional, chegaram no horário marcado e deixaram tudo limpo. Muito satisfeito!",
      data: "Dezembro 2023"
    },
    {
      nome: "Luciana Pereira",
      servico: "Conserto de Lava-louças",
      avaliacao: 5,
      comentario: "Já é a segunda vez que uso os serviços da ServitecPoa. Sempre muito eficientes e honestos. Preço justo e qualidade garantida.",
      data: "Novembro 2023"
    },
    {
      nome: "Roberto Mendes",
      servico: "Reparo de Fogão",
      avaliacao: 5,
      comentario: "Técnico muito experiente, identificou o problema rapidamente e fez o reparo com peças originais. Fogão funcionando perfeitamente!",
      data: "Outubro 2023"
    }
  ]

  const estatisticas = [
    {
      numero: "98%",
      label: "Clientes Satisfeitos",
      descricao: "Avaliação média dos nossos clientes"
    },
    {
      numero: "10.000+",
      label: "Equipamentos Reparados",
      descricao: "Mais de 15 anos de experiência"
    },
    {
      numero: "90 dias",
      label: "Garantia dos Serviços",
      descricao: "Tranquilidade e confiança"
    },
    {
      numero: "24-48h",
      label: "Prazo Médio de Reparo",
      descricao: "Agilidade no atendimento"
    }
  ]

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Depoimentos' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Depoimentos dos
              <span className="text-[#FF8C00]"> Nossos Clientes</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Única assistência técnica oficial de Porto Alegre. Veja o que nossos clientes falam sobre nossos serviços
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-[#FF8C00] text-[#FF8C00]" />
              ))}
              <span className="text-2xl font-bold ml-4">4.9/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {estatisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-2">
                    {stat.numero}
                  </div>
                  <div className="text-lg font-semibold text-[#FF8C00] mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {stat.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">O que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mais de 15 anos de experiência refletidos na satisfação dos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="absolute -top-4 -left-4 bg-[#FF8C00] rounded-full p-3">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    &ldquo;{depoimento.comentario}&rdquo;
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#1E3A5F]">{depoimento.nome}</div>
                  <div className="text-sm text-[#FF8C00] font-medium">{depoimento.servico}</div>
                  <div className="text-sm text-gray-500">{depoimento.data}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Por que Somos a Escolha Certa?</h2>
              <p className="text-gray-600">
                Nosso compromisso é com a excelência e satisfação total dos nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FF8C00] rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Técnicos Qualificados</h3>
                  <p className="text-gray-600">
                    Equipe de profissionais certificados com mais de 15 anos de experiência no mercado
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF8C00] rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Peças Originais</h3>
                  <p className="text-gray-600">
                    Como parceiros Electrolux, garantimos peças originais direto da fábrica
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF8C00] rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Garantia Estendida</h3>
                  <p className="text-gray-600">
                    Todos os nossos serviços possuem garantia de 90 dias para sua tranquilidade
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FF8C00] rounded-full p-3 flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Atendimento Domiciliar</h3>
                  <p className="text-gray-600">
                    Vamos até sua casa em toda Porto Alegre com horário agendado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1E3A5F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seja Nosso Próximo Cliente Satisfeito!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de clientes que confiam na ServitecPoa para cuidar dos seus eletrodomésticos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:5140638129"
                className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (51) 4063-8129
              </Link>
              <Link
                href="/contato"
                className="border-2 border-white hover:bg-white hover:text-[#1E3A5F] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
