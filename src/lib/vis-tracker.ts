import fs from 'fs'
import path from 'path'

const DB_PATH = path.join(process.cwd(), 'data', 'visitors.json')
const DB_EVENTS_PATH = path.join(process.cwd(), 'data', 'events.json')

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
}

export interface EventLog {
    timestamp: string
    name: string
    ip: string
    path: string
}

function ensureDir() {
    const dir = path.dirname(DB_PATH)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

export function logVisitor(data: VisitorLog) {
    try {
        ensureDir()
        let logs: VisitorLog[] = []

        if (fs.existsSync(DB_PATH)) {
            const fileContent = fs.readFileSync(DB_PATH, 'utf-8')
            try {
                logs = JSON.parse(fileContent)
            } catch (e) {
                console.error('Error parsing visitors DB, resetting:', e)
                logs = []
            }
        }

        // Keep only last 1000 logs to prevent file from growing too large in this simple implementation
        if (logs.length > 1000) {
            logs = logs.slice(-999)
        }

        logs.push(data)
        fs.writeFileSync(DB_PATH, JSON.stringify(logs, null, 2))
    } catch (error) {
        console.error('Failed to log visitor:', error)
    }
}

export function getVisitors(): VisitorLog[] {
    try {
        if (!fs.existsSync(DB_PATH)) {
            return []
        }
        const fileContent = fs.readFileSync(DB_PATH, 'utf-8')
        const logs = JSON.parse(fileContent)
        return logs.reverse() // Newest first
    } catch (error) {
        console.error('Failed to read visitors:', error)
        return []
    }
}

export function logEvent(data: EventLog) {
    try {
        const dir = path.dirname(DB_EVENTS_PATH)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }

        let events: EventLog[] = []
        if (fs.existsSync(DB_EVENTS_PATH)) {
            const fileContent = fs.readFileSync(DB_EVENTS_PATH, 'utf-8')
            try {
                events = JSON.parse(fileContent)
            } catch (e) {
                events = []
            }
        }

        events.push(data)
        fs.writeFileSync(DB_EVENTS_PATH, JSON.stringify(events, null, 2))
    } catch (error) {
        console.error('Failed to log event:', error)
    }
}

export function getEvents(): EventLog[] {
    try {
        if (!fs.existsSync(DB_EVENTS_PATH)) {
            return []
        }
        const fileContent = fs.readFileSync(DB_EVENTS_PATH, 'utf-8')
        return JSON.parse(fileContent).reverse()
    } catch (error) {
        return []
    }
}
