'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, Users, Globe, Smartphone, Monitor, MessageSquare } from 'lucide-react'
import type { VisitorLog, EventLog } from '@/lib/vis-tracker'

export default function DashboardPage() {
    const [visitors, setVisitors] = useState<VisitorLog[]>([])
    const [events, setEvents] = useState<EventLog[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        fetchVisitors()
        const interval = setInterval(fetchVisitors, 10000) // Refresh every 30s
        return () => clearInterval(interval)
    }, [])

    const fetchVisitors = async () => {
        try {
            const res = await fetch('/api/visitors')
            if (res.status === 401) {
                router.push('/admin/login')
                return
            }
            const data = await res.json()
            setVisitors(data)

            // Fetch events
            const eventsRes = await fetch('/api/visitors/events')
            if (eventsRes.ok) {
                const eventsData = await eventsRes.json()
                setEvents(eventsData)
            }
        } catch (error) {
            console.error('Error fetching visitors:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        await fetch('/api/auth', { method: 'DELETE' })
        router.push('/admin/login')
    }

    // Stats calculation
    const totalVisitors = visitors.length // Simple count for now, ideally unique
    const uniqueIPs = new Set(visitors.map(v => v.ip)).size
    const mobileCount = visitors.filter(v => v.device.toLowerCase().includes('mobile')).length
    const desktopCount = visitors.length - mobileCount
    const whatsappClicks = events.filter(e => e.name === 'whatsapp_click').length

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-[#1E3A5F]">ServitecPoa Monitor</h1>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={handleLogout}
                                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                                title="Sair"
                            >
                                <LogOut className="w-5 h-5 mr-2" />
                                Sair
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Total de Acessos</p>
                                <p className="text-2xl font-bold text-gray-800">{loading ? '...' : totalVisitors}</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-full">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">IPs Únicos</p>
                                <p className="text-2xl font-bold text-gray-800">{loading ? '...' : uniqueIPs}</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-full">
                                <Globe className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Mobile</p>
                                <p className="text-2xl font-bold text-gray-800">{loading ? '...' : mobileCount}</p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-full">
                                <Smartphone className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">Desktop</p>
                                <p className="text-2xl font-bold text-gray-800">{loading ? '...' : desktopCount}</p>
                            </div>
                            <div className="p-3 bg-orange-50 rounded-full">
                                <Monitor className="w-6 h-6 text-orange-600" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 font-medium">WhatsApp</p>
                                <p className="text-2xl font-bold text-gray-800">{loading ? '...' : whatsappClicks}</p>
                            </div>
                            <div className="p-3 bg-red-50 rounded-full">
                                <MessageSquare className="w-6 h-6 text-red-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Visitors Table */}
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Visitantes Recentes</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data/Hora</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localização (IP)</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dispositivo / SO</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Navegador</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Página</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {visitors.map((log, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(log.timestamp).toLocaleString('pt-BR')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div>{log.city !== 'Unknown' ? `${log.city}, ${log.country}` : 'Desconhecido'}</div>
                                            <div className="text-xs text-gray-400">{log.ip}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="font-medium">{log.device || 'Desktop'}</div>
                                            <div className="text-xs">{log.os}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {log.browser}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="truncate max-w-xs" title={log.path}>{log.path}</div>
                                            <div className="text-xs text-gray-400 truncate max-w-xs" title={log.referer}>{log.referer !== 'direct' ? log.referer : 'Direto'}</div>
                                        </td>
                                    </tr>
                                ))}
                                {visitors.length === 0 && !loading && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            Nenhum visitante registrado ainda.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    )
}
