import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import '~/styles/globals.css'
import { cn } from '~/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

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
      <body className={cn('min-h-screen bg-slate-100', fontSans.variable)}>{children}</body>
    </html>
  )
}
