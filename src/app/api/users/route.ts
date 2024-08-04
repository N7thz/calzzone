import { prisma } from "@/lib/prisma"
import { User } from "@prisma/client"
import { hash } from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    console.log(request)

    const { email, password }: User = await request.json()

    const isUserAlreadyExist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    console.log(isUserAlreadyExist)

    if (isUserAlreadyExist) {
        return NextResponse.json("email already exist", {
            status: 400
        })
    }

    const user = await prisma.user.create({
        data: {
            email,
            password: await hash(password, 6)
        }
    })

    console.log(user)

    return NextResponse.json(user)
}