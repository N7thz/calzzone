import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'

export async function POST(request: NextRequest) {

    const { email, password: passwordString }: User = await request.json()

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (user) {

        return new
            NextResponse(
                'The email already exist. try again more later.',
                {
                    status: 400,
                    statusText: 'The email already exist.'
                }
            )

    } else {

        const password = await hash(passwordString, 6)

        await prisma.user.create({
            data: {
                email,
                password
            }
        })

        return new NextResponse('Created task', {
            status: 201
        })
    }
}   