import {
    CardHeader, CardTitle, CardContent, CardDescription, Card
} from "./ui/card"
import { AvatarUser } from "./avatar-user"
import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import { Input } from "./ui/input"
import { PreviewCover } from "./preview-cover"

export const ContentCardHorizontal = () => {

    const [file, setFile] = useState<File | null>(null)

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0])
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".png", ".gif"]
        }
    })


    return (

        <Card className="h-[240px] w-[340px] overflow-hidden flex flex-col">
            {
                file
                    ? (
                        <PreviewCover
                            file={file}
                            setFile={setFile}
                        />
                    )
                    : (
                        <CardHeader
                            {...getRootProps()}
                            className="h-1/3 border-b border-muted relative group border-dashed p-0"
                        >
                            <p
                                className="m-auto invisible group-hover:visible italic"
                            >
                                {
                                    isDragActive ? "Release to add" : "Click to submit or drag here"
                                }

                            </p>
                            <AvatarUser
                                className="absolute -bottom-[20%] left-8 scale-150"
                            />
                            <Input
                                {...getInputProps()}
                                className="hidden"
                            />
                        </CardHeader>
                    )
            }
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
                </div>
            </CardContent>
        </Card>
    )
}
