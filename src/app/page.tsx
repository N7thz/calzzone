import { FormLogin } from "@/components/form-login"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calzzone | Login"
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <FormLogin />
    </div>
  )
}
