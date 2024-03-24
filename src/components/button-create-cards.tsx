'use client'

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

export const ButtonCreateCards = () => {

    const { push } = useRouter()

    return (

        <Button onClick={() => push('/create-cards')}>
            add cards
        </Button>
    )
}
