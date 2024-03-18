'use client'

import { FC } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
    Card, CardHeader, CardTitle, CardContent, CardFooter
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { FormType } from '@/@types'
import { formSchema } from '@/schemas'

export interface FormCardProps {
    title: string
    option: string
    link: string
    onSubmitFunction: (data: FormType) => void
}

export const FormCard: FC<FormCardProps> = ({
    title, option, link, onSubmitFunction
}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(formSchema)
    })

    return (

        <Card className='border border-primary relative'>
            <CardHeader>
                <CardTitle className='text-3xl capitalize'>
                    {title}
                </CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <CardContent className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2.5 capitalize'>
                        <Label
                            htmlFor='email'
                            className='text-lg'
                        >
                            email:
                        </Label>
                        <Input
                            id='email'
                            className={
                                errors.email &&
                                'border-red-600'
                            }
                            {...register('email')}
                        />
                        <span
                            className='text-red-600 text-sm text-center italic normal-case'
                        >
                            {
                                errors.email &&
                                errors.email.message
                            }
                        </span>
                    </div>
                    <div className='flex flex-col gap-2.5 capitalize'>
                        <Label
                            htmlFor='password'
                            className='text-lg'
                        >
                            password:
                        </Label>
                        <Input
                            id='password'
                            className={
                                errors.password &&
                                'border-red-600'
                            }
                            {...register('password')}
                        />
                        <span
                            className='text-red-600 text-sm text-center italic normal-case'
                        >
                            {
                                errors.password &&
                                errors.password.message
                            }
                        </span>
                    </div>
                    <div
                        className='flex w-full justify-around items-center italic'
                    >
                        <Separator className='w-2/5 px-2' />
                        <span>
                            ou
                        </span>
                        <Separator className='w-2/5 px-2' />
                    </div>
                    <Link
                        href={link}
                        className='text-center text-primary hover:underline italic'
                    >
                        {option}
                    </Link>
                </CardContent>
                <CardFooter className='flex justify-end'>
                    <Button
                        variant="outline"
                        className='text-lg border-primary'
                        type='submit'
                    >
                        {title}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}