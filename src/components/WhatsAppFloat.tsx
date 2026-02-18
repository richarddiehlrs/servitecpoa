'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000)
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = '555140638129' // Número oficial da ServitecPoa
  const message = 'Olá! Gostaria de solicitar um orçamento para assistência técnica.'

  const handleWhatsAppClick = () => {
    // Record the event
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'whatsapp_click', path: window.location.pathname }),
    }).catch(err => console.error('Failed to track whatsapp click', err))

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 max-w-xs animate-bounce">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-gray-800">Precisa de ajuda?</p>
              <p className="text-xs text-gray-600">Fale conosco pelo WhatsApp!</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <X size={14} />
            </button>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  )
}
