import React, { ReactNode } from 'react'

import { cn } from '~/lib/utils'

import { Navbar } from './_components/navbar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className={cn('min-h-screen flex flex-col bg-slate-100')}>
      <Navbar />
      <main className="flex-1 flex overflow-y-hidden">{children}</main>
    </div>
  )
}
