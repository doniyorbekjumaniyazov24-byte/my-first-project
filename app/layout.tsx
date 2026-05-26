import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doniyor Jumaniyazov | Portfolio',
  description: "Amaliy matematika bo'yicha talaba, matematika va informatika o'qituvchisi",
  verification: {
    google: 'SYZl3xfsY3Q10siy92tkQ-X0aNhF43eNxz0H68h7dZY',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}