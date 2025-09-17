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
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
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
              <p className="text-sm font-semibold text-[#1E3A5F] mb-2">Por Bairro:</p>
              <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                <Link
                  href="/servicos/jardim-do-salso"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Jardim do Salso
                </Link>
                <Link
                  href="/servicos/centro-porto-alegre"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Centro
                </Link>
                <Link
                  href="/servicos/boa-vista"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Boa Vista
                </Link>
                <Link
                  href="/servicos/chacara-das-pedras"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Chácara das Pedras
                </Link>
                <Link
                  href="/servicos/cidade-baixa"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cidade Baixa
                </Link>
                <Link
                  href="/servicos/moinhos-de-vento"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Moinhos de Vento
                </Link>
                <Link
                  href="/servicos/higienopolis"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Higienópolis
                </Link>
                <Link
                  href="/servicos/passo-dareia"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Passo d&apos;Areia
                </Link>
                <Link
                  href="/servicos/bela-vista"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Bela Vista
                </Link>
                <Link
                  href="/servicos/montserrat"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Mont&apos;Serrat
                </Link>
                <Link
                  href="/servicos/jardim-botanico"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Jardim Botânico
                </Link>
                <Link
                  href="/servicos/rio-branco"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Rio Branco
                </Link>
                <Link
                  href="/servicos/auxiliadora"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Auxiliadora
                </Link>
                <Link
                  href="/servicos/petropolis"
                  className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Petrópolis
                </Link>
                        <Link
                          href="/servicos/tres-figueiras"
                          className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Três Figueiras
                        </Link>
                        <Link
                          href="/servicos/menino-deus"
                          className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Menino Deus
                        </Link>
                        <Link
                          href="/servicos/bom-fim"
                          className="block py-1 text-xs text-gray-600 hover:text-[#FF8C00] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Bom Fim
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        }
