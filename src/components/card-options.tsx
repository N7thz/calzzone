import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export const CardOptions = () => {
    
    return (

        <Card
            className="w-1/3 flex flex-col gap-3 p-4 border-primary"
        >
            <CardHeader>
                <CardTitle className="text-2xl text-center capitalize">
                    options
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 capitalize">
                    <Label className="pl-1">
                        name:
                    </Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-2 capitalize">
                    <Label className="pl-1">
                        description:
                    </Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-2 capitalize">
                    <Label className="pl-1">
                        link:
                    </Label>
                    <div className="flex gap-1">
                        <Input />
                        <Button size="icon">
                            <Plus />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
