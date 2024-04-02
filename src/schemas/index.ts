import { z } from "zod"

export const formSchema = z.object({
    email: z
        .string()
        .email({
            message: "The format of the email is invalid"
        })
        .nonempty({
            message: "The email is invalid."
        }),
    password: z
        .string()
        .nonempty({
            message: "Password is required."
        })
        .min(6, {
            message: "Minimum is 6 characters."
        })
})