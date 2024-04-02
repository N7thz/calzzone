"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { CardNoStyle } from "@/components/card-no-style"
import { Button } from "@/components/ui/button"
import { RotateCcwSquare } from "lucide-react"

export const CardPreview = () => {

    const [isActive, setIsActive] = useState(false)

    return (
        <Card
            className="w-2/3 min-h-[480px] flex flex-col items-center gap-3 p-4 border-primary relative transition-all"
        >
            <CardHeader>
                <CardTitle
                    className="text-2xl text-center capitalize"
                >
                    preview
                </CardTitle>
            </CardHeader>
            <CardNoStyle isActive={isActive} />
            <Button
                size={"icon"}
                onClick={() => setIsActive(!isActive)}
                className="absolute bottom-3 right-3"
            >
                <RotateCcwSquare />
            </Button>
        </Card>
    )
}
