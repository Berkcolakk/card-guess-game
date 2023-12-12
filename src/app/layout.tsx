import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AntdConfig from '@/providers/AntdConfig'
import Head from 'next/head'
import Main from '@/layouts/Main'
import Footer from '@/layouts/Footer'
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

      <body className={`${inter.className} m-0 min-h-screen flex flex-col bg-main text-white`}>
        <AntdConfig>
          <Main>
            {children}
          </Main>
          <Footer />
        </AntdConfig>
      </body>
    </html>
  )
}
