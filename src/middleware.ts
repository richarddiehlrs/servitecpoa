import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Skip during build
    if (process.env.NEXT_PHASE === 'phase-action-build') {
        return NextResponse.next()
    }

    // Skip static assets, API auth routes, and internal next paths
    if (
        request.nextUrl.pathname.startsWith('/_next') ||
        request.nextUrl.pathname.startsWith('/api/') || // Don't track API calls to avoid noise
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
    }

    // In a real edge environment we can't write to filesystem directly from middleware
    // So we call an internal API route to handle the logging (which runs in Node runtime)
    fetch(`${request.nextUrl.origin}/api/visitors`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(trackingData),
    }).catch(err => console.error('Tracking failed', err))

    return NextResponse.next()
}

export const config = {
    matcher: '/:path*',
}
