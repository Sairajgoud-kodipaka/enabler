import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GCC as a Service",
  description: "Build, Operate, and Grow — Without the Hassle",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
