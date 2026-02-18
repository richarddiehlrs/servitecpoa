import { NextRequest, NextResponse } from 'next/server'
import { getDynamicPassword, createSession, deleteSession } from '@/lib/auth'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { username, password } = body

        if (username !== 'servitecpoa') {
            return NextResponse.json({ success: false, message: 'Usuário inválido' }, { status: 401 })
        }

        const currentPassword = getDynamicPassword()
        if (password !== currentPassword) {
            return NextResponse.json({ success: false, message: 'Senha inválida' }, { status: 401 })
        }

        await createSession()
        return NextResponse.json({ success: true })
    } catch (_error) {
        return NextResponse.json({ success: false, message: 'Erro interno' }, { status: 500 })
    }
}

export async function DELETE(_request: NextRequest) {
    await deleteSession()
    return NextResponse.json({ success: true })
}
