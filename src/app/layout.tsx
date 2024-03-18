import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/theme-provider'
import './globals.css'
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calzzone cards',
  description: 'Business card site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
