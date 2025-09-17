'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150) // 150ms de delay
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-700 hover:text-[#1E3A5F] font-medium transition-colors flex items-center">
        Serviços
        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            <Link
              href="/servicos"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#1E3A5F] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Todos os Serviços
            </Link>
            <div className="border-t border-gray-100 my-2"></div>
            <div className="px-4 py-2">
              <p className="text-sm font-semibold text-[#1E3A5F] mb-2">Por Localização:</p>
              <Link
                href="/servicos/jardim-do-salso"
                className="block py-1 text-sm text-gray-600 hover:text-[#FF8C00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Jardim do Salso
              </Link>
              <Link
                href="/servicos/centro-porto-alegre"
                className="block py-1 text-sm text-gray-600 hover:text-[#FF8C00] transition-colors"
                onClick={() => setIsOpen(false)}
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
