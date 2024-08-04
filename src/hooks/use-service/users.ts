import { FormLoginType } from "@/@types"
import { AxiosResponse } from "axios"
import { api } from "."
import { User } from "@prisma/client"

const url = "/users"

export function postUser({
    email, password
}: FormLoginType): Promise<AxiosResponse<User>> {
    
    return api.post(url, { email, password })
}