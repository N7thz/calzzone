"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Animation } from "./animation"
import { Card } from "./ui/card"

interface Options {

    id: number,
    value: string,
    slug: string
}

export const Select = () => {

    const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false)
    const [optionSelected, setOptionSelect] = useState<Options | null>(null)

    const options: Options[] = [
        { id: 1, value: "rounded-none", slug: "none" },
        { id: 2, value: "rounded-sm", slug: "small" },
        { id: 3, value: "rounded-md", slug: "mid" },
        { id: 4, value: "rounded-lg", slug: "large" },
        { id: 5, value: "rounded-xl", slug: "extra large" }
    ]

    return (

        <Card className="p-1 flex flex-col gap-2 rounded-md">
            <Input
                placeholder="Select a border radius"
                readOnly
                onClick={() => setIsOpenOptions(!isOpenOptions)}
                className="border-none placeholder:text-primary-foreground cursor-pointer"
            />
            {
                isOpenOptions &&
                <Card className="flex flex-col gap-2 p-1 border-none">
                    {
                        options.map((option, index) => {

                            const { id, slug } = option

                            return (
                                <Animation
                                    key={id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{
                                        duration: 0.3, delay: index * 0.1
                                    }}
                                >
                                    <Input
                                        key={index}
                                        value={slug}
                                        readOnly
                                        className="text-primary-foreground cursor-pointer"
                                        onClick={() => setOptionSelect(option)}
                                    />
                                </Animation>
                            )
                        })
                    }
                </Card>
            }
        </Card>
    )
}
