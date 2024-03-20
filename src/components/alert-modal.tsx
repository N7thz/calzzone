import { FC } from "react"
import {
    Alert as AlertBox, AlertDescription, AlertTitle
} from "@/components/ui/alert"
import { twMerge } from "tailwind-merge"
import { AlertProps } from "@/@types"

export const Alert: FC<AlertProps> = ({
    message, title, variant, className, Icon, iconColor
}) => {

    return (

        <AlertBox
            className={twMerge(
                'flex items-center gap-2 bg-zinc-50 dark:bg-zinc-950',
                className
            )}
            variant={variant}
        >
            <Icon size={28} className={iconColor}/>
            <div>
                <AlertTitle className="text-xl">
                    {title}
                </AlertTitle>
                <AlertDescription>
                    {message}
                </AlertDescription>
            </div>
        </AlertBox>
    )
}
