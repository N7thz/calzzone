'use client'

import { FormType } from "@/@types"
import { FormCard } from "./form-card"
import { useRouter } from "next/navigation"

export const Main = () => {

    const { push } = useRouter()

    async function login(data: FormType) {

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        response.status === 200 &&  push('/home')

        console.log(response)
    }

    return (

        <main className='w-full h-full flex justify-center items-center pt-56'>
            <FormCard
                title="login"
                option="cadastrar"
                link="/register"
                onSubmitFunction={login}
            />
        </main>
    )
}
