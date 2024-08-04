import { FormRegister } from "@/components/form-register"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Calzzone | Register"
}

export default function Page() {

    return (

        <div className="min-h-screen flex items-center justify-center">
            <FormRegister />
        </div>
    )
}