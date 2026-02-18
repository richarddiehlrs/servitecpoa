import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logVisitor, VisitorLog } from '@/lib/vis-tracker'
import { UAParser } from 'ua-parser-js'

export async function middleware(request: NextRequest) {
    // Skip during build
    if (process.env.NEXT_PHASE === 'phase-action-build') {
        return NextResponse.next()
    }

    // Skip prefetch requests from Next.js
    const isPrefetch = request.headers.get('next-purpose') === 'prefetch' ||
        request.headers.get('purpose') === 'prefetch' ||
        request.headers.get('x-middleware-prefetch') === '1';

    // Skip static assets, API auth routes, internal next paths, and bot probes
    const isAsset = request.nextUrl.pathname.match(/\.(jpg|jpeg|png|gif|svg|css|js|webp|ico|avif|woff|woff2|json|xml|txt)$/);

    if (
        isPrefetch ||
        isAsset ||
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/api/') ||
        request.nextUrl.pathname.startsWith('/admin')
    ) {
        return NextResponse.next()
    }

    // Session-based de-duplication (30 minutes)
    // This ensures we only log the START of a visit/session, not every single click
    const sessionCookieName = 'v_session_tracked';
    if (request.cookies.has(sessionCookieName)) {
        return NextResponse.next()
    }

    const response = NextResponse.next();
    // Set cookie for 30 minutes to mark this session as already logged
    response.cookies.set(sessionCookieName, '1', {
        maxAge: 60 * 30,
        path: '/',
        sameSite: 'lax'
    });

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

    return response
}

export const config = {
    matcher: '/:path*',
}
