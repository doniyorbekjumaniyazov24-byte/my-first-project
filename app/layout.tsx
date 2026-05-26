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
        <meta name="google-site-verification" content="nODkNnsIsinEQYKx6Eojl-imRJ7u2RZKmb4ua5Uj5Os" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}