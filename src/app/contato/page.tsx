'use client'

import { useState } from 'react'
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    equipamento: '',
    problema: '',
    mensagem: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Gostaria de solicitar um orçamento:
    
*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Email:* ${formData.email}
*Equipamento:* ${formData.equipamento}
*Problema:* ${formData.problema}
*Mensagem:* ${formData.mensagem || 'Não informado'}`

    const whatsappUrl = `https://wa.me/555140638129?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const equipamentos = [
    'Geladeira/Freezer',
    'Máquina de Lavar',
    'Lava e Seca',
    'Lava-louças',
    'Fogão/Cooktop',
    'Micro-ondas',
    'Secadora',
    'Coifa/Depurador',
    'Forno Elétrico',
    'Purificador de Água',
    'Eletroportáteis (Cafeteira, Liquidificador, etc)',
    'Aspirador Central Electrolux Beam',
    'Instalação de Coifa',
    'Instalação de Eletrodomésticos em Geral',
    'Outro'
  ]

  return (
    <div>
      <Breadcrumbs items={[{ label: 'Contato' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2D4A73] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em
              <span className="text-[#FF8C00]"> Contato</span>
            </h1>
            <p className="text-xl text-gray-300">
              Solicite seu orçamento sem compromisso. Atendemos toda Porto Alegre!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Solicite seu Orçamento
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e entraremos em contato rapidamente
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="(51) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="equipamento" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Equipamento *
                  </label>
                  <select
                    id="equipamento"
                    name="equipamento"
                    required
                    value={formData.equipamento}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Selecione o equipamento</option>
                    {equipamentos.map((eq, index) => (
                      <option key={index} value={eq}>{eq}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="problema" className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição do Problema *
                  </label>
                  <input
                    type="text"
                    id="problema"
                    name="problema"
                    required
                    value={formData.problema}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Ex: Não está gelando, faz ruído, não liga..."
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem Adicional
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Informações adicionais sobre o problema..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF8C00] hover:bg-[#E67C00] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-[#1E3A5F] text-white rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#FF8C00] mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <p className="text-gray-300">(51) 4063-8129</p>
                      <p className="text-sm text-[#FF8C00]">Atendimento de Segunda a Sábado</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#FF8C00] mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Endereço</h4>
                      <p className="text-gray-300">Rua São Simão, 505</p>
                      <p className="text-gray-300">Jardim do Salso</p>
                      <p className="text-gray-300">Porto Alegre - RS</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#FF8C00] mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                      <p className="text-gray-300">Segunda a Sexta: 8h30 às 12h - 13h30 às 18h</p>
                      <p className="text-gray-300">Sábado: 9h às 12h - 13h às 18h</p>
                      <p className="text-sm text-[#FF8C00]">Domingo: Fechado</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#FF8C00] mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-gray-300">contato@servitecpoa.com.br</p>
                      <p className="text-sm text-[#FF8C00]">Respondemos em até 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Áreas de Atendimento</h3>
                <p className="text-gray-600 mb-4">
                  Atendemos domicílio em toda Porto Alegre e região metropolitana:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Centro</div>
                  <div>• Zona Norte</div>
                  <div>• Zona Sul</div>
                  <div>• Zona Leste</div>
                  <div>• Zona Oeste</div>
                  <div>• Moinhos de Vento</div>
                  <div>• Bela Vista</div>
                  <div>• Petrópolis</div>
                  <div>• Menino Deus</div>
                  <div>• Auxiliadora</div>
                  <div>• Jardim Botânico</div>
                  <div>• E muito mais...</div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  * Consulte disponibilidade para outras regiões
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Como Chegar</h2>
              <p className="text-gray-600">Rua São Simão, 505 - Jardim do Salso, Porto Alegre - RS</p>
            </div>
            
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Mapa Interativo</p>
                <p>Rua São Simão, 505 - Jardim do Salso</p>
                <p className="text-sm mt-2">
                  Integração com Google Maps será implementada aqui
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-gray-800 mb-2">Transporte Público</h4>
                <p className="text-sm text-gray-600">Várias linhas de ônibus passam próximo ao local</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-gray-800 mb-2">Estacionamento</h4>
                <p className="text-sm text-gray-600">Vagas disponíveis na rua</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-gray-800 mb-2">Localização</h4>
                <p className="text-sm text-gray-600">Fácil acesso por todas as zonas da cidade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Emergência? Atendimento Rápido!
          </h2>
          <p className="text-lg mb-6">
            Para casos urgentes, ligue diretamente. Faremos o possível para atender no mesmo dia.
          </p>
          <a
            href="tel:5140638129"
            className="bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Ligar Agora: (51) 4063-8129
          </a>
        </div>
      </section>
    </div>
  )
}
