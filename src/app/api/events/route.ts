import { NextRequest, NextResponse } from 'next/server'
import { logEvent, EventLog } from '@/lib/vis-tracker'

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        const eventEntry: EventLog = {
            timestamp: new Date().toISOString(),
            name: data.name,
            ip: request.headers.get('x-forwarded-for') || 'unknown',
            path: data.path || '/'
        }

        await logEvent(eventEntry)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('API Event Error:', error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
