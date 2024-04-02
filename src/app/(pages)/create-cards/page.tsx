import { Metadata } from "next"
import {
    Card, CardHeader, CardTitle, CardContent, CardDescription
} from "@/components/ui/card"
import { CardPreview } from "@/components/card-preview"
import { CardOptions } from "@/components/card-options"

export const metadata: Metadata = {
    title: "Calzzone | Create Cards"
}

export default function Page() {

    return (

        <div className="min-h-screen flex justify-center items-center pt-20">
            <Card className="w-10/12 h-full border-primary">
                <CardHeader>
                    <CardTitle>
                        Create your cards
                    </CardTitle>
                    <CardDescription>
                        Customize your cards to make them your own
                    </CardDescription>
                </CardHeader>
                <CardContent
                    className="h-full p-4 m-6 rounded-md flex gap-4 relative "
                >
                    <CardOptions />
                    <CardPreview />
                </CardContent>
            </Card>
        </div>
    )
}