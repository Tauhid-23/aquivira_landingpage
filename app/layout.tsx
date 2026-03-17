import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AquiVira - Pure Water, Naturally | Clay Water Purifier for Bangladesh",
  description:
    "Clean, safe, and beautiful drinking water with AquiVira. A modern clay-based water purifier that removes heavy metals and microbes—100% plastic-free and electricity-free.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
    shortcut: "/icon-light-32x32.png",
  },
  openGraph: {
    title: "AquiVira - Pure Water, Naturally",
    description: "Clean, safe, and beautiful drinking water with AquiVira. A modern clay-based water purifier for Bangladesh.",
    url: "https://www.aquivira.com",
    siteName: "AquiVira",
    images: [
      {
        url: "/aquivira-logo.png",
        width: 1200,
        height: 630,
        alt: "AquiVira Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AquiVira - Pure Water, Naturally",
    description: "Clean, safe, and beautiful drinking water with AquiVira.",
    images: ["/aquivira-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon-light-32x32.png" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
