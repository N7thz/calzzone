'use client'

import { useState } from 'react'
import { FormType } from '@/@types'
import { FormCard } from './form-card'
import { useRouter } from 'next/navigation'
import { Animation } from './animation'
import { Alert } from './alert-modal'
import { XCircle } from 'lucide-react'

export const Main = () => {

    const { push } = useRouter()
    const [isError, setIsError] = useState<boolean>(false)

    async function login(data: FormType) {

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.status === 200) {
            push('/home')
        } else if (response.status === 400) {

            setIsError(true) 

            setTimeout(() => setIsError(false), 3000)
        }

        console.log(response.status, response.statusText)
    }

    return (

        <main className='w-full h-full flex justify-center items-center pt-56'>
            <FormCard
                title='login'
                option='cadastrar'
                link='/register'
                onSubmitFunction={login}
            />

            {
                isError &&
                <Animation
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -200 }}
                    transition={{ duration: .5 }}
                    className='absolute top-32 z-50'
                >
                    <Alert
                        title="Error"
                        message="Email ou senha inválidos"
                        Icon={XCircle}
                        variant="destructive"
                        iconColor="text-red-600"
                    />
                </Animation>
            }
        </main>
    )
}
