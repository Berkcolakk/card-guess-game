import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AntdConfig from '@/providers/AntdConfig'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yu-Gi-Oh Card Guess',
  description: 'Yu-Gi-Oh Card Guess!',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon.svg',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={`${inter.className} m-0 h-[100dvh] bg-main text-white`}>
        <AntdConfig>
          {children}
        </AntdConfig>
      </body>
    </html>
  )
}
