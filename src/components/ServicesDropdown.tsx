'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Serviços
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>
      
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-2">
            <Link
              href="/servicos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E3A5F] transition-colors"
            >
              Todos os Serviços
            </Link>
            <div className="border-t border-gray-100 my-2"></div>
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-[#1E3A5F] mb-2">Por Localização:</p>
              <Link
                href="/servicos/jardim-do-salso"
                className="block py-1 text-sm text-gray-600 hover:text-[#FF8C00] transition-colors"
              >
                Jardim do Salso
              </Link>
              <Link
                href="/servicos/centro-porto-alegre"
                className="block py-1 text-sm text-gray-600 hover:text-[#FF8C00] transition-colors"
              >
                Centro Porto Alegre
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
