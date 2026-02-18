'use client'

import { useEffect } from 'react'

export default function CallTracker() {
    useEffect(() => {
        const handleCallClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const link = target.closest('a')

            if (link && link.href && link.href.startsWith('tel:')) {
                // Track the call event
                fetch('/api/events', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: 'call_click', path: window.location.pathname }),
                }).catch(err => console.error('Failed to track call click', err))

                // Optional: Google Ads conversion for calls if needed
                // if (typeof window !== 'undefined' && window.gtag) {
                //   window.gtag('event', 'conversion', { 'send_to': '...' });
                // }
            }
        }

        document.addEventListener('click', handleCallClick)
        return () => document.removeEventListener('click', handleCallClick)
    }, [])

    return null
}
