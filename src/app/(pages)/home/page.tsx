"use client"

import { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useCard } from "@/context/card-context"

// export const metadata: Metadata = {
//     title: "Calzzone | Home"
// }

export default function Page() {

    const { user } = useCard()

    console.log(user)

    if (!user) return

    const { email } = user

    return (

        <div
            className="min-h-screen flex justify-center items-center"
        >
            <Card
                className="w-10/12 max-h-[600px] border-primary"
            >
                <CardHeader>
                    <CardTitle>
                        Olá { email }
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-6">
                </CardContent>
            </Card>
        </div>
    )
}