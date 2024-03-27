import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto as FontSans } from 'next/font/google'

import '~/styles/globals.css'
import { cn } from '~/lib/utils'
import { ProgressbarProvider } from '~/components/providers/progressbar-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '100'
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
      <body className={cn(fontSans.variable)}>
        {children}
        <ProgressbarProvider />
      </body>
    </html>
  )
}
