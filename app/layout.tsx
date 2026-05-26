import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Next.js metadata konfiguratsiyasi
export const metadata: Metadata = {
  title: 'Doniyor Jumaniyazov | Portfolio',
  description: "Amaliy matematika bo'yicha talaba, matematika va informatika o'qituvchisi",
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      {/* Google aytganidek, meta tegi aynan shu yerda, head ichida bo'ladi */}
      <head>
        <meta name="google-site-verification" content="SYZl3xfsY3Q10siy92tkQ-X0aNhF43eNxz0H68h7dZY" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}