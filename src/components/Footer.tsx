import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock } from 'lucide-react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="ServitecPoa Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">ServitecPoa</h3>
                <p className="text-[#FF8C00]">Assistência Técnica | Parceiro Electrolux</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Assistência técnica de Porto Alegre há 15 anos oferecendo serviços especializados em eletrodomésticos. 
              Nossa equipe de técnicos qualificados garante reparo rápido e eficiente para seus equipamentos.
            </p>
            <div className="flex items-center space-x-2 text-[#FF8C00]">
              <span className="font-semibold">Parceiro:</span>
              <span className="text-white">Electrolux</span>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Siga-nos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61561994063751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF8C00] transition-colors"
                  aria-label="Facebook ServitecPoa"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/servitecpoaoficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF8C00] transition-colors"
                  aria-label="Instagram ServitecPoa"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://wa.me/555140638129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF8C00] transition-colors"
                  aria-label="WhatsApp ServitecPoa"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF8C00]">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-[#FF8C00]" />
                <span>(51) 4063-8129</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-[#FF8C00] mt-1" />
                <div>
                  <p>Rua São Simão, 505</p>
                  <p>Jardim do Salso</p>
                  <p>Porto Alegre - RS</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-[#FF8C00]" />
                <div>
                  <p>Seg - Sex: 8h30 às 12h - 13h30 às 18h</p>
                  <p>Sáb: 9h às 12h - 13h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF8C00]">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Geladeiras e Freezers</li>
              <li>Máquinas de Lavar</li>
              <li>Lava e Seca</li>
              <li>Lava-louças</li>
              <li>Fogões e Cooktops</li>
              <li>Micro-ondas</li>
              <li>Secadoras</li>
              <li>Coifas e Depuradores</li>
              <li>Purificadores de Água</li>
              <li>Eletroportáteis</li>
              <li>Aspirador Central</li>
              <li>Instalação de Coifa</li>
              <li>Instalação de Eletrodomésticos</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 ServitecPoa. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
