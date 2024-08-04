import {
    ComponentProps,
    Dispatch,
    ReactNode,
    SetStateAction
} from "react"
import { formSchema } from "@/schemas"
import {
    VariantLabels, TargetAndTransition, Transition, AnimationControls, Target
} from "framer-motion"
import { LucideIcon } from "lucide-react"
import { FormLoginSchema, FormRegisterSchema } from "@/schemas"
import { User } from "@prisma/client"
import { z } from "zod"

export type FormType = z.infer<typeof formSchema>

export interface StyleProps extends ComponentProps<"div"> { }

export interface AnimationProps extends ComponentProps<"div"> {
    children: ReactNode
    initial?: boolean | Target | VariantLabels
    whileInView?: VariantLabels | TargetAndTransition
    exit?: TargetAndTransition | VariantLabels
    transition?: Transition
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}

export interface AlertProps extends ComponentProps<"div"> {

    title: string
    message: string
    Icon: LucideIcon
    iconColor: "text-red-600" | "text-primary"
    variant: "default" | "destructive" | null | undefined
}

export type FormLoginType = z.infer<typeof FormLoginSchema>
export type FormRegisterType = z.infer<typeof FormRegisterSchema>

export interface loginUserResponse {
    token: string
    user: User
}

export interface ToasterProps extends ComponentProps<"div"> {
    toaster_title: string
    toaster_message: string
    variant: "default" | "destructive" | undefined
}


export interface DialogProps extends ComponentProps<"div"> {
    trigger: ReactNode
    title?: string
    description?: string
}

export interface ContextProps {
    params: {
        id: string
    }
}

export interface SquareProps {
    id: string,
    isX: boolean
    isO: boolean
}