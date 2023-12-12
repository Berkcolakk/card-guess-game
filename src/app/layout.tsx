import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AntdConfig from '@/providers/AntdConfig'
import Head from 'next/head'
import Main from '@/layouts/Main'
import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Card Oracle',
  description: 'Game Time with Knowledge Cards!',
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

      <body className={`${inter.className} m-auto min-h-screen flex flex-col bg-main text-white max-w-[120rem] `}>
        <AntdConfig>
          <Header />
          <Main>
            {children}
          </Main>
        </AntdConfig>
      </body>
    </html>
  )
}
