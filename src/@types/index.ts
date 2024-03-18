import { ComponentProps, ReactNode } from 'react'
import { z } from 'zod'
import { formSchema } from '@/schemas'
import { 
    VariantLabels, TargetAndTransition, Transition, AnimationControls, Target 
} from 'framer-motion'
import { LucideIcon } from 'lucide-react'

export type FormType = z.infer<typeof formSchema>

export interface AnimationProps extends ComponentProps<"div"> {
	children: ReactNode
	initial?: boolean | Target | VariantLabels
	whileInView?: VariantLabels | TargetAndTransition
	exit?: TargetAndTransition | VariantLabels
	transition?: Transition
	animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}

export interface AlertProps extends ComponentProps<'div'> {

    title: string
    message: string
    Icon: LucideIcon
    iconColor: "text-red-600" | "text-primary"
    variant: "default" | "destructive" | null | undefined
}