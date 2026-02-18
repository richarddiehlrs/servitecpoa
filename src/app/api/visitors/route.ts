import { NextRequest, NextResponse } from 'next/server'
import { logVisitor, getVisitors, VisitorLog } from '@/lib/vis-tracker'
import { UAParser } from 'ua-parser-js'
import { cookies } from 'next/headers'

// POST: Log a new visitor
export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        // Enrich with UA Parser on the server side
        const parser = new UAParser(data.userAgent)
        const result = parser.getResult()

        const logEntry: VisitorLog = {
            timestamp: new Date().toISOString(),
            ip: data.ip,
            city: data.city,
            country: data.country,
            userAgent: data.userAgent,
            browser: `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`,
            os: `${result.os.name || 'Unknown'} ${result.os.version || ''}`,
            device: `${result.device.vendor || ''} ${result.device.model || ''} (${result.device.type || 'Desktop'})`.trim(),
            path: data.path,
            referer: data.referer
        }

        await logVisitor(logEntry)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('API Log Error:', error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}

// GET: Retrieve visitors (Protected)
export async function GET(_request: NextRequest) {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session || session.value !== 'authenticated') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const visitors = await getVisitors()
    return NextResponse.json(visitors)
}

// DELETE: Clear all logs (Protected)
export async function DELETE(_request: NextRequest) {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session || session.value !== 'authenticated') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { clearLogs } = await import('@/lib/vis-tracker')
    await clearLogs()
    return NextResponse.json({ success: true })
}
