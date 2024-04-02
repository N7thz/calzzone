import { prisma } from "@/lib/prisma"
import { User } from "@prisma/client"
import { compare } from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {

    const { email, password }: User = await request.json()

    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) {

        return new NextResponse(
            "error",
            {
                status: 400,
                statusText: "Invalid email or password"
            }
        )
    }

    const isPasswordCorretly = await compare(password, user.password)

    if (user && isPasswordCorretly) {

        return new NextResponse(
            "sucess",
            {
                status: 200
            }
        )
    }
}   