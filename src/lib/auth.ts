import { cookies } from 'next/headers'

export function getDynamicPassword(): string {
    const date = new Date()
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    return `servitec${day}${month}`
}

export async function createSession() {
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
}

export async function getSession() {
    const cookieStore = await cookies()
    return cookieStore.get('admin_session')
}
