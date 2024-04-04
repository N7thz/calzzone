import { StyleProps } from "@/@types"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "./ui/avatar"

export const AvatarUser = ({ className }: StyleProps) => {

    return (

        <Avatar className={className}>
            <AvatarImage
                src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png"
                alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
