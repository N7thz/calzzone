import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { twMerge } from "tailwind-merge"
import { ThemeProvider } from "@/context/theme-provider"
import { CardProvider } from "@/context/card-context"
import { Header } from "@/components/header"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Calzzone cards",
  description: "Business card site",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={twMerge(
          inter.className,
          "bg-background-image bg-cover"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <CardProvider>
            <Header />
            {children}
          </CardProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
