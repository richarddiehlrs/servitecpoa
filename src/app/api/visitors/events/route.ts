import { NextRequest, NextResponse } from 'next/server'
import { getEvents } from '@/lib/vis-tracker'
import { cookies } from 'next/headers'

export async function GET(_request: NextRequest) {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')

    if (!session || session.value !== 'authenticated') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const events = getEvents()
    return NextResponse.json(events)
}
