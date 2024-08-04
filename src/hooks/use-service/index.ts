import axios from "axios"
import { getCookie } from "cookies-next"
import { loginUser } from "./login"
import { postUser } from "./users"

const token = getCookie("token")

export const api = axios.create({
    baseURL: "/api",
    headers: {
        Authorization: token
    }
})

export {
    loginUser,
    postUser
}