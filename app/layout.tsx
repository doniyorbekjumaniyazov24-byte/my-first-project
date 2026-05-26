import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: 'Doniyor Jumaniyazov | Portfolio',
  description: 'Amaliy matematika bo\'yicha talaba, matematika va informatika o\'qituvchisi...',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <head>
        {/* Mana shu yerga shundoq tashlaysan: */}
        <meta name="google-site-verification" content="SYZl3xfsY3Q10siy92tkQ-X0aNhF43eNxz0H68h7dZY" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}