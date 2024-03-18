'use client'

import { useState } from "react"
import { FormType } from "@/@types"
import { FormCard } from "./form-card"
import { Animation } from "./animation"
import { Alert } from "./alert-modal"
import { Check, XCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export const Register = () => {

    const { push } = useRouter()

    const [isCreated, setIsCreated] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    async function createUser(data: FormType) {

        const response = await fetch('/api/create-user', {
            method: 'POST',
            body: JSON.stringify(data)
        })

        if (response.status === 201) {

            setIsCreated(true)

            setTimeout(() => {

                setIsCreated(false)
                push('/')
            }, 2000)
            
        } else {

            setIsError(true)
            setErrorMessage(response.statusText)
            setTimeout(() =>  setIsError(false), 3000)
        }

        console.log(response)
    }

    return (

        <>
            <FormCard
                title="cadastrar"
                option="login"
                link="/"
                onSubmitFunction={createUser}
            />
            {
                isCreated &&
                <Animation
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -200 }}
                    transition={{ duration: .5 }}
                    className='absolute top-32 z-50'
                >
                    <Alert
                        title="Sucesso"
                        message="O usuário foi criado com sucesso."
                        Icon={Check}
                        variant="default"
                        iconColor="text-primary"
                        className="border-primary"
                    />
                </Animation>
            }
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
                        message={errorMessage}
                        Icon={XCircle}
                        variant="destructive"
                        iconColor="text-red-600"
                    />
                </Animation>
            }
        </>
    )
}
