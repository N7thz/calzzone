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

export const FormLoginSchema = z.object({
    email: z.string()
        .email({
            message: "Invalid email"
        })
        .max(255, {
            message: "text is much large"
        }),
    password: z.string()
        .min(6, {
            message: "Password too short"
        })
        .max(255, {
            message: "text is much large"
        })
})

export const FormRegisterSchema = z.object({
    email: z.string()
        .email({
            message: "Invalid email"
        })
        .max(255, {
            message: "text is much large"
        }),
    password: z.string()
        .min(6, {
            message: "Password too short"
        })
        .max(255, {
            message: "text is much large"
        }),
    confirm_password: z.string()
        .min(6, {
            message: "Password too short"
        })
        .max(255, {
            message: "text is much large"
        })
})