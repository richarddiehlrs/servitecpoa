import Link from 'next/link'
import { Home, Phone, Wrench } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="text-center max-w-lg mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-4xl">🤔</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Página não encontrada
                    </h1>

                    <p className="text-gray-600 mb-8 text-lg">
                        Ops! A página que você está procurando não existe ou foi movida.
                    </p>

                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center justify-center w-full bg-[#1E3A5F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#2D4A73] transition-colors"
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Voltar para Hhome
                        </Link>

                        <Link
                            href="/servicos"
                            className="flex items-center justify-center w-full bg-white border-2 border-[#FF8C00] text-[#FF8C00] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFF5E6] transition-colors"
                        >
                            <Wrench className="w-5 h-5 mr-2" />
                            Ver Nossos Serviços
                        </Link>

                        <div className="pt-4 border-t border-gray-100 mt-4">
                            <p className="text-sm text-gray-500 mb-2">Precisa de ajuda urgente?</p>
                            <Link
                                href="tel:5140638129"
                                className="text-[#FF8C00] font-bold hover:underline flex items-center justify-center"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                (51) 4063-8129
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
