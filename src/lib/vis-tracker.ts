import { kv } from '@vercel/kv'

export interface VisitorLog {
    timestamp: string
    ip: string
    city?: string
    country?: string
    userAgent: string
    browser: string
    os: string
    device: string
    path: string
    referer: string
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    utmTerm?: string
}

export interface EventLog {
    timestamp: string
    name: string
    ip: string
    path: string
}

const VISITORS_KEY = 'visitors_log'
const EVENTS_KEY = 'events_log'
const MAX_LOGS = 1000

export async function logVisitor(data: VisitorLog) {
    try {
        // Push to the list in Redis
        await kv.lpush(VISITORS_KEY, data)
        // Trim to keep only the last MAX_LOGS
        await kv.ltrim(VISITORS_KEY, 0, MAX_LOGS - 1)
    } catch (error) {
        console.error('Failed to log visitor to KV:', error)
    }
}

export async function getVisitors(): Promise<VisitorLog[]> {
    try {
        const logs = await kv.lrange<VisitorLog>(VISITORS_KEY, 0, -1)
        return logs || []
    } catch (error) {
        console.error('Failed to read visitors from KV:', error)
        return []
    }
}

export async function logEvent(data: EventLog) {
    try {
        await kv.lpush(EVENTS_KEY, data)
        await kv.ltrim(EVENTS_KEY, 0, MAX_LOGS - 1)
    } catch (error) {
        console.error('Failed to log event to KV:', error)
    }
}

export async function getEvents(): Promise<EventLog[]> {
    try {
        const events = await kv.lrange<EventLog>(EVENTS_KEY, 0, -1)
        return events || []
    } catch (error) {
        console.error('Failed to read events from KV:', error)
        return []
    }
}

export async function clearLogs() {
    try {
        await kv.del(VISITORS_KEY)
        await kv.del(EVENTS_KEY)
    } catch (error) {
        console.error('Failed to clear logs in KV:', error)
    }
}
