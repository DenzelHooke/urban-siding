import './styles/globals.scss'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Urban Siding',
  description: 'The Best Siding Company In B.C.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
