import { z } from 'zod'

export const formSchema = z.object({
    email: z
        .string()
        .email({
            message: 'o formato do email é inválido'
        })
        .nonempty({
            message: 'o email é obrigatório.'
        }),
    password: z
        .string()
        .nonempty({
            message: 'a senha é obrigatória.'
        })
        .min(6, {
            message: 'o minimo é 6 caracteres'
        })
})