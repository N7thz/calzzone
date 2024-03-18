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

    if (user) {

        return new
            NextResponse(
                'O email informado já existe,tente novamente com um email diferente.',
                {
                    status: 400,
                    statusText: 'O email informado ja existe.'
                }
            )

    } else {

        await prisma.user.create({
            data: body
        })

        return new NextResponse('Created task', {
            status: 201
        })
    }
}   