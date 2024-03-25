import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtube API',
  description: 'Sun Asterisk Testing API'
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
