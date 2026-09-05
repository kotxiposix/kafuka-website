import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "KAFF - Kafuka African Film Festival",
  description: "KAFUKA - Em breve, de Cabo Verde para o Mundo!",
  icons: {
    icon: "/kafuka_icon_white.png",
    apple: "/kafuka_icon_white.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`bg-charcoal ${inter.className}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
