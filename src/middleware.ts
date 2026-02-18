import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logVisitor, VisitorLog } from '@/lib/vis-tracker'
import { UAParser } from 'ua-parser-js'

export async function middleware(request: NextRequest) {
    // Skip during build
    if (process.env.NEXT_PHASE === 'phase-action-build') {
        return NextResponse.next()
    }

    // Skip static assets, API auth routes, and internal next paths
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/api/') ||
        request.nextUrl.pathname.startsWith('/admin') || // Don't track admin dashboard
        request.nextUrl.pathname.includes('favicon.ico') ||
        request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js)$/)
    ) {
        return NextResponse.next()
    }

    // We will fire and forget the tracking request to our own API
    // This avoids blocking the main response
    const trackingData = {
        ip: request.headers.get('x-forwarded-for') || 'unknown',
        city: request.headers.get('x-vercel-ip-city') || 'Unknown',
        country: request.headers.get('x-vercel-ip-country') || 'Unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
        path: request.nextUrl.pathname,
        referer: request.headers.get('referer') || 'direct',
        utmSource: request.nextUrl.searchParams.get('utm_source') || undefined,
        utmMedium: request.nextUrl.searchParams.get('utm_medium') || undefined,
        utmCampaign: request.nextUrl.searchParams.get('utm_campaign') || undefined,
        utmTerm: request.nextUrl.searchParams.get('utm_term') || undefined,
    }

    // Extract browser/os/device info
    const parser = new UAParser(trackingData.userAgent)
    const result = parser.getResult()

    const logEntry: VisitorLog = {
        ...trackingData,
        timestamp: new Date().toISOString(),
        browser: `${result.browser.name || 'Unknown'} ${result.browser.version || ''}`,
        os: `${result.os.name || 'Unknown'} ${result.os.version || ''}`,
        device: `${result.device.vendor || ''} ${result.device.model || ''} (${result.device.type || 'Desktop'})`.trim(),
    }

    // Call logVisitor directly and await to ensure it completes in the Edge environment
    await logVisitor(logEntry).catch(err => console.error('Tracking failed', err))

    return NextResponse.next()
}

export const config = {
    matcher: '/:path*',
}
