import { useState } from "react"
import { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Aside } from "@/components/aside"
import { MainCard } from "@/components/main-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDropzone } from "react-dropzone"
import { Dropzone } from "@/components/dropzone"

export const metadata: Metadata = {
    title: "Calzzone | Home"
}

export default function Page() {

    return (

        <div
            className="min-h-screen flex justify-center items-center"
        >
            <Card
                className="w-10/12 max-h-[600px] border-primary"
            >
                <CardHeader>
                    <CardTitle>
                        Olá nome
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-6">
                    <Aside />
                    <MainCard />
                </CardContent>
            </Card>
        </div>
    )
}