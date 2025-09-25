import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { Header } from "../components/layout/header"
import { Footer } from "../components/layout/footer"
import { Toaster } from "../components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevBlog - Modern Web Development Blog",
  description:
    "A modern blog built with Next.js, TypeScript, and Tailwind CSS. Sharing insights about web development and technology.",
  keywords: ["blog", "web development", "nextjs", "typescript", "tailwind css"],
  authors: [{ name: "DevBlog Team" }],
  openGraph: {
    title: "DevBlog - Modern Web Development Blog",
    description: "Sharing insights about web development and technology.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
