import {
    CardHeader, CardTitle, CardContent, CardDescription, Card
} from "@/components/ui/card"
import { AvatarUser } from "./avatar-user"

export const ContentCardHorizontal = () => {

    return (

        <Card className="h-[240px] w-[340px] overflow-hidden flex flex-col">
            <CardHeader
                className="h-1/3 border-b border-muted relative bg-red-300"
            >
                <AvatarUser
                    className="absolute -bottom-[20%] scale-150"
                />
            </CardHeader>
            <CardContent
                className="h-2/3 flex flex-col justify-center capitalize gap-3 pt-12"
            >
                <CardTitle>
                    name
                </CardTitle>
                <CardDescription>
                    description
                </CardDescription>
                <div className="text-sm flex flex-col gap-2">
                    <span>
                        link 1
                    </span>
                    <span>
                        link 2
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}
