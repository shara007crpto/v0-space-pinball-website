import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Space Pinball | The Ultimate Gaming Memecoin",
  description:
    "Join the Space Pinball revolution! Play, earn, and explore the cosmos with the most exciting gaming memecoin in the universe.",
  generator: "v0.app",
  keywords: "memecoin, space pinball, gaming, cryptocurrency, blockchain game",
  openGraph: {
    title: "Space Pinball | The Ultimate Gaming Memecoin",
    description: "Join the Space Pinball revolution! Play, earn, and explore the cosmos.",
    images: ["/images/space-pinball-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <div className="stars-bg"></div>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
