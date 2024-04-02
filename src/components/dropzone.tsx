"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, X } from "lucide-react"
import { twMerge } from "tailwind-merge"

interface HasFileProps {
    file: File
}

export const Dropzone = () => {

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

    console.log(file)

    if (file) return <HasFile file={file} />

    return (

        <Label className="w-1/3">
            <Card
                {...getRootProps()}
                className={twMerge(
                    "w-full min-h-[300px] flex flex-col justify-center items-center border-4 border-dashed hover:scale-105 duration-200 cursor-pointer",
                    isDragActive
                        ? "border-primary"
                        : "border-muted"
                )}
            >
                <Upload
                    className={twMerge(
                        "scale-150 mb-5",
                        isDragActive && "text-primary"
                    )}
                />
                <CardTitle className="text-muted-foreground italic">
                    {
                        isDragActive ? "Solte para adicionar" : "Clique para enviar ou arraste até aqui"
                    }
                </CardTitle>
                <Input
                    {...getInputProps()}
                    className="hidden"
                />
            </Card>
        </Label>
    )
}

const HasFile = ({ file }: HasFileProps) => {

    const { name, size } = file

    return (
        <Card className="flex items-center">
            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardDescription>
                    {size}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <X />
            </CardContent>
        </Card>
    )
}