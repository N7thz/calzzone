"use client"

import { api } from "@/hooks/use-service"
import { User } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { ReactNode, createContext, useContext } from "react"

export interface CardContextProps {
    user?: User
}

const CardContext = createContext({} as CardContextProps)

export function CardProvider({ children }: { children: ReactNode }) {

    const { data: user } = useQuery({
        queryKey: ["get-authorization"],
        queryFn: async () => {

            const url = "/get-authorization"

            const response: User = await api
                .get(url)
                .then(res => res.data)
                .catch(err => console.log(err))

            return response
        }
    })

    const value: CardContextProps = { user }

    return (

        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => useContext(CardContext)