import { Dispatch, SetStateAction } from "react"
import { CardHeader} from "./ui/card"
import { X } from "lucide-react"
import Image from "next/image"
import { AvatarUser } from "./avatar-user"

interface HasFileProps {
    file: File
    setFile: Dispatch<SetStateAction<File | null>>
}

export const PreviewCover = ({ file, setFile }: HasFileProps) => {

    const url = URL.createObjectURL(file)

    return (

        <CardHeader
            className="h-1/3 border-b border-muted p-0 group relative"
        >
            <Image
                src={url}
                width={120}
                height={120}
                alt=""
                className="w-full h-full"
            />
            <AvatarUser
                className="absolute -bottom-[20%] left-8 scale-150"
            />
            <X
                className="text-muted-foreground hover:text-primary-foreground hover:scale-105 duration-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover:visible"
                onClick={() => setFile(null)}
            />
        </CardHeader>
    )
}
