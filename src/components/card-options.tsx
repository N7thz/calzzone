import {
    Card, CardHeader, CardTitle, CardContent
} from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Plus } from "lucide-react"
import { Select } from "./select"
import { ScrollArea } from "./ui/scroll-area"

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
            <ScrollArea className=" max-h-[400px]">
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
                    <div className="flex flex-col gap-3 capitalize">
                        <Label className="pl-1">
                            border radius:
                        </Label>
                        <Select />
                    </div>
                    <div className="flex flex-col gap-3 capitalize">
                        <Label className="pl-1">
                            border color:
                        </Label>
                        <Input type="color"/>
                    </div>
                    <div className="flex flex-col gap-3 capitalize">
                        <Label className="pl-1">
                            letters color:
                        </Label>
                        <Input type="color" />
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
            </ScrollArea>
        </Card>
    )
}