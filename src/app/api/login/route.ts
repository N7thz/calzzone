import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

    const body: User = await request.json()

    const user = await prisma.user.findFirst({
        where: {
            email: body.email
        }
    })

    console.log(user)

    if (user) return new NextResponse(
        'user finded',
        {
            status: 200,
            statusText: 'sucess'
        }
    )
}   