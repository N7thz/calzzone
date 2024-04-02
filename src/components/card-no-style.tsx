import { Card } from "@/components/ui/card"
import { ContentCardHorizontal } from "./content-card-horizontal"
import { ContentCardVertical } from "./content-card-vertical"
import { ComponentProps } from "react"

interface CardNoStyleProps extends ComponentProps<"div"> {
    isActive: boolean
}

export const CardNoStyle = ({ isActive, className }: CardNoStyleProps) => {

    if (isActive) {
        return (
            <div className={className}>
                <ContentCardVertical />
            </div>
        )
    } else {
        return (
            <div className={className}>
                <ContentCardHorizontal />
            </div>
        )
    }
}
