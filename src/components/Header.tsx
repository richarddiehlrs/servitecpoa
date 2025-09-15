'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#1E3A5F] text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(51) 4063-8129</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Rua São Simão, 505 - Jardim do Salso</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-[#FF8C00] font-semibold">
              15 Anos de Experiência
            </div>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61561994063751"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF8C00] transition-colors"
                aria-label="Facebook ServitecPoa"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/servitecpoaoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF8C00] transition-colors"
                aria-label="Instagram ServitecPoa"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="ServitecPoa Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1E3A5F]">ServitecPoa</h1>
              <p className="text-sm text-[#FF8C00]">Única Assistência Técnica Oficial | Parceiro Electrolux</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors">
              Início
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors">
              Serviços
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors">
              Sobre Nós
            </Link>
            <Link href="/depoimentos" className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors">
              Depoimentos
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors">
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="tel:5140638129"
              className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Ligar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#1E3A5F] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/servicos"
                className="text-gray-700 hover:text-[#1E3A5F] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-[#1E3A5F] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/depoimentos"
                className="text-gray-700 hover:text-[#1E3A5F] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </Link>
              <Link
                href="/contato"
                className="text-gray-700 hover:text-[#1E3A5F] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="tel:5140638129"
                className="bg-[#FF8C00] hover:bg-[#E67C00] text-white px-6 py-2 rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Ligar Agora
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
