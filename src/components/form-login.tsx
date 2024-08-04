"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { setCookie } from "cookies-next"
import { Eye, EyeOff, XCircle } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormLoginType } from "@/@types"
import { FormLoginSchema } from "@/schemas"
import { loginUser } from "@/hooks/use-service"
import { useRouter } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Toaster } from "./toaster"
import { Separator } from "./ui/separator"
import Link from "next/link"

export const FormLogin = () => {

    const [isVisible, setIsVisible] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)

    const { push } = useRouter()

    const Icon = isVisible ? Eye : EyeOff

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormLoginType>({
        resolver: zodResolver(FormLoginSchema)
    })

    function login(data: FormLoginType) {
        loginUser(data)
            .then(res => {
                const { data: { token }, status } = res

                if (status === 200) {
                    setCookie("token", token)
                    push("/home")
                }
            })
            .catch(() => {
                setIsError(true)
                setTimeout(() => setIsError(false), 2000)
            })
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(login)}
                className="w-1/3"
            >
                <Card className="drop-shadow-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            Login
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <Label className="mb-2">Email</Label>
                            <Input {...register("email")} />
                            {
                                errors.email &&
                                <span className="mt-2 text-destructive">
                                    {errors.email.message}
                                </span>
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label className="mb-2">Password</Label>
                            <div className="relative">
                                <Input
                                    type={isVisible ? "password" : "text"}
                                    {...register("password")}
                                />
                                <Icon
                                    className="absolute top-[34%] right-2 size-4"
                                    onClick={() => setIsVisible(!isVisible)}
                                />
                            </div>
                            {
                                errors.password &&
                                <span className="mt-2 text-destructive">
                                    {errors.password.message}
                                </span>
                            }
                        </div>
                        <div
                            className="flex w-full justify-around items-center italic"
                        >
                            <Separator className="w-2/5 px-2" />
                            <span>
                                ou
                            </span>
                            <Separator className="w-2/5 px-2" />
                        </div>
                        <Link
                            href="/register"
                            className="w-full flex justify-center text-primary hover:underline italic"
                        >
                            <span>
                                Cadastrar
                            </span>
                        </Link>
                    </CardContent>
                    <CardFooter className="w-full flex justify-end">
                        <Button type="submit">
                            Confirm
                        </Button>
                    </CardFooter>
                </Card>
            </form>
            {
                isError &&
                <Toaster
                    variant="destructive"
                    toaster_title="Error"
                    toaster_message="Invalid email or password"
                    className="absolute bottom-4 right-4"
                >
                    <XCircle />
                </Toaster>
            }
        </>
    )
}
