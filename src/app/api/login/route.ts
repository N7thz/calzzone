import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

    const { email, password }: User = await request.json()

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    const passwordHash = await hash(password, 6)

    if (user && passwordHash === user.password) {
        return new NextResponse(
            'user finded',
            {
                status: 200,
                statusText: 'sucess'
            }
        )
    } else {

        return new NextResponse(
            'error',
            {
                status: 400,
                statusText: 'Invalid email or password'
            }
        )
    }
}   