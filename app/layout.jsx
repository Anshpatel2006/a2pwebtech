import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "A2PWebTech - Empowering Your Business with Powerful Websites",
  description:
    "Professional web development startup specializing in business websites, e-commerce, landing pages, and custom dashboards. Security-first development with expert team.",
  keywords: "web development, website design, e-commerce, landing pages, cybersecurity, full stack development",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
