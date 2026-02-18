'use client'

import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import {
    LogOut, Users, Globe, Smartphone, Monitor, MessageSquare,
    Download, Trash2, TrendingUp, Calendar, Clock, Search, Phone
} from 'lucide-react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, LineChart, Line, AreaChart, Area
} from 'recharts'
import type { VisitorLog, EventLog } from '@/lib/vis-tracker'

export default function DashboardPage() {
    const [visitors, setVisitors] = useState<VisitorLog[]>([])
    const [events, setEvents] = useState<EventLog[]>([])
    const [loading, setLoading] = useState(true)
    const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month'>('week')
    const router = useRouter()

    useEffect(() => {
        fetchVisitors()
        const interval = setInterval(fetchVisitors, 10000) // Refresh every 10s
        return () => clearInterval(interval)
    }, [])

    const fetchVisitors = async () => {
        try {
            const res = await fetch('/api/visitors', { cache: 'no-store' })
            if (res.status === 401) {
                router.push('/admin/login')
                return
            }
            const data = await res.json()
            setVisitors(data)

            // Fetch events
            const eventsRes = await fetch('/api/visitors/events', { cache: 'no-store' })
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

    const handleClearLogs = async () => {
        if (confirm('Tem certeza que deseja limpar todos os logs? Esta ação não pode ser desfeita.')) {
            try {
                const res = await fetch('/api/visitors', { method: 'DELETE' })
                if (res.ok) {
                    setVisitors([])
                    setEvents([])
                    alert('Logs limpos com sucesso!')
                }
            } catch (err) {
                console.error('Failed to clear logs', err)
            }
        }
    }

    const handleDownloadLogs = () => {
        const dataStr = JSON.stringify({ visitors, events }, null, 2)
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
        const exportFileDefaultName = `logs_servitec_${new Date().toISOString().split('T')[0]}.json`
        const linkElement = document.createElement('a')
        linkElement.setAttribute('href', dataUri)
        linkElement.setAttribute('download', exportFileDefaultName)
        linkElement.click()
    }

    // Stats calculation
    const now = new Date().getTime()
    const fiveMinutesAgo = now - (5 * 60 * 1000)

    const onlineNow = useMemo(() => {
        const uniqueIPsOnline = new Set(
            visitors
                .filter(v => new Date(v.timestamp).getTime() > fiveMinutesAgo)
                .map(v => v.ip)
        )
        return uniqueIPsOnline.size
    }, [visitors, fiveMinutesAgo])

    const totalVisitors = visitors.length
    const uniqueIPs = new Set(visitors.map(v => v.ip)).size
    const mobileCount = visitors.filter(v => v.device.toLowerCase().includes('mobile')).length
    const desktopCount = visitors.length - mobileCount
    const whatsappClicks = events.filter(e => e.name === 'whatsapp_click').length
    const callClicks = events.filter(e => e.name === 'call_click').length

    // Chart Data Preparation
    const chartData = useMemo(() => {
        const groupedData: { [key: string]: number } = {}
        const today = new Date()

        // Define number of points based on range
        const points = timeRange === 'day' ? 24 : timeRange === 'week' ? 7 : 30

        for (let i = points - 1; i >= 0; i--) {
            const date = new Date()
            if (timeRange === 'day') {
                date.setHours(today.getHours() - i)
                const label = `${date.getHours()}:00`
                groupedData[label] = 0
            } else {
                date.setDate(today.getDate() - i)
                const label = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
                groupedData[label] = 0
            }
        }

        visitors.forEach(v => {
            const vDate = new Date(v.timestamp)
            let label = ''
            if (timeRange === 'day') {
                // Only count if from last 24h
                if (now - vDate.getTime() < 24 * 60 * 60 * 1000) {
                    label = `${vDate.getHours()}:00`
                }
            } else {
                label = vDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
            }
            if (groupedData[label] !== undefined) {
                groupedData[label]++
            }
        })

        return Object.entries(groupedData).map(([name, count]) => ({ name, acessos: count }))
    }, [visitors, timeRange, now])

    const getRefererLabel = (referer: string) => {
        if (!referer || referer === 'direct') return 'Acesso Direto'
        if (referer.includes('googleadservices.com')) return 'Google Ads'
        if (referer.includes('google.')) return 'Google Search'
        if (referer.includes('facebook.com')) return 'Facebook'
        if (referer.includes('instagram.com')) return 'Instagram'
        if (referer.includes('wa.me') || referer.includes('whatsapp.com')) return 'WhatsApp'
        try {
            const url = new URL(referer)
            return url.hostname
        } catch {
            return referer
        }
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                                <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-xl font-bold text-[#1E3A5F]">ServitecPoa Intelligence</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleDownloadLogs}
                                className="hidden sm:flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Exportar
                            </button>
                            <button
                                onClick={handleLogout}
                                className="flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                <span className="hidden sm:inline">Sair</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Real-time Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Visão Geral</h2>
                        <p className="text-gray-500">Acompanhe o desempenho do seu site em tempo real.</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700 font-semibold">{onlineNow}</span>
                        <span className="text-green-600 text-sm">Usuários online agora</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                <Users className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Total</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Total de Acessos</p>
                        <p className="text-2xl font-bold text-gray-800">{loading ? '...' : totalVisitors}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
                                <Globe className="w-6 h-6 text-indigo-600" />
                            </div>
                            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Únicos</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">IPs Únicos</p>
                        <p className="text-2xl font-bold text-gray-800">{loading ? '...' : uniqueIPs}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                <MessageSquare className="w-6 h-6 text-green-600" />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Zap</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Cliques WhatsApp</p>
                        <p className="text-2xl font-bold text-gray-800">{loading ? '...' : whatsappClicks}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
                                <Phone className="w-6 h-6 text-yellow-600" />
                            </div>
                            <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Ligar</span>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Cliques Ligar</p>
                        <p className="text-2xl font-bold text-gray-800">{loading ? '...' : callClicks}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group transition-all hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors">
                                <Monitor className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="flex gap-1 text-[10px] items-center">
                                <Smartphone className="w-3 h-3 text-gray-400" /> {mobileCount} / <Monitor className="w-3 h-3 text-gray-400" /> {desktopCount}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 font-medium">Mobile</p>
                        <div className="flex items-end gap-2">
                            <p className="text-2xl font-bold text-gray-800">{Math.round((mobileCount / (totalVisitors || 1)) * 100)}%</p>
                            <span className="text-xs text-gray-400 mb-1">Acessos</span>
                        </div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 gap-8 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#1E3A5F]" />
                                <h3 className="text-lg font-bold text-gray-800">Tráfego por Período</h3>
                            </div>
                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                {(['day', 'week', 'month'] as const).map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setTimeRange(r)}
                                        className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${timeRange === r
                                            ? 'bg-white text-[#1E3A5F] shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {r === 'day' ? '24 Horas' : r === 'week' ? '7 Dias' : '30 Dias'}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorAcessos" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1E3A5F" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#1E3A5F" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 11, fill: '#64748B' }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fontSize: 11, fill: '#64748B' }}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        itemStyle={{ color: '#1E3A5F', fontWeight: 'bold' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="acessos"
                                        stroke="#1E3A5F"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorAcessos)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Recent Visitors Table */}
                <div className="bg-white shadow-sm rounded-xl border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-[#F8FAFC]">
                        <h2 className="text-lg font-bold text-gray-800">Visitantes Recentes</h2>
                        <button
                            onClick={handleClearLogs}
                            className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center bg-white px-3 py-1.5 rounded-lg border border-red-100 shadow-sm transition-all"
                        >
                            <Trash2 className="w-3.5 h-3.5 mr-1.5" />
                            Limpar Base
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-100">
                            <thead className="bg-[#F8FAFC]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Acesso</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Local / IP</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Dispositivo</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Origem / Canal</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Página</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {visitors.map((log, index) => {
                                    const refLabel = getRefererLabel(log.referer)
                                    const isGoogle = refLabel === 'Google Search' || log.utmSource === 'google'

                                    const isOnline = new Date(log.timestamp).getTime() > fiveMinutesAgo

                                    return (
                                        <tr key={index} className={`transition-colors ${isOnline ? 'bg-green-50/30' : 'hover:bg-gray-50'}`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    {isOnline && (
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" title="Online agora" />
                                                    )}
                                                    <div className="flex flex-col">
                                                        <div className="text-sm font-semibold text-gray-700">
                                                            {new Date(log.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                                        </div>
                                                        <div className="text-[10px] text-gray-400">
                                                            {new Date(log.timestamp).toLocaleDateString('pt-BR')}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-700 font-medium">
                                                    {log.city && log.city !== 'Unknown' ? `${decodeURIComponent(log.city).replace(/%/g, ' ')}, ${log.country}` : 'Localização Indisponível'}
                                                </div>
                                                <div className="text-xs text-gray-400">{log.ip}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    {log.device.toLowerCase().includes('mobile') ? (
                                                        <Smartphone className="w-4 h-4 text-purple-500" />
                                                    ) : (
                                                        <Monitor className="w-4 h-4 text-blue-500" />
                                                    )}
                                                    <div className="text-sm text-gray-600">
                                                        <span>{log.os.split(' ')[0]}</span>
                                                        <span className="text-gray-300 mx-1">/</span>
                                                        <span className="text-xs text-gray-400">{log.browser.split(' ')[0]}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col gap-1.5">
                                                    <div className={`text-xs font-bold px-2 py-0.5 rounded-full w-fit flex items-center gap-1 ${isGoogle ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'
                                                        }`}>
                                                        {isGoogle && <Search className="w-3 h-3" />}
                                                        {refLabel}
                                                    </div>

                                                    {/* Tracking Pills */}
                                                    <div className="flex gap-1 flex-wrap">
                                                        {log.utmSource && (
                                                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                                                                {log.utmSource}
                                                            </span>
                                                        )}
                                                        {log.utmTerm && (
                                                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                                                                Palavra: {log.utmTerm}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <div className="truncate max-w-[200px] text-gray-600 font-medium bg-gray-50 px-2 py-1 rounded border border-gray-100" title={log.path}>
                                                    {log.path === '/' ? 'Home' : log.path.split('/').pop()?.replace(/-/g, ' ')}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                                {visitors.length === 0 && !loading && (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                            <Clock className="w-12 h-12 text-gray-200 mx-auto mb-4" />
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
