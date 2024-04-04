"use client"

import { Dispatch, SetStateAction, useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Upload, X } from "lucide-react"
import { twMerge } from "tailwind-merge"
import Image from "next/image"

interface HasFileProps {
    file: File,
    setFile: Dispatch<SetStateAction<File | null>>
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

    if (file) return (
        <HasFile
            file={file}
            setFile={setFile}
        />
    )

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

const HasFile = ({ file, setFile }: HasFileProps) => {

    const { name, size } = file
    const url = URL.createObjectURL(file)

    return (
        <Card className="flex items-center">

            <Image
                src={url}
                width={120}
                height={120}
                alt=""
            />

            <CardHeader>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardDescription>
                    {(size / 1000).toFixed(2)} kb
                </CardDescription>
            </CardHeader>
            <CardContent>
                <X
                    className="hover:text-primary hover:scale-105 duration-200"
                    onClick={() => setFile(null)}
                />
            </CardContent>
        </Card>
    )
}