'use client'

import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import { Navbar } from './_components/navbar'
import { Sidebar } from './_components/sidebar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const pathname = usePathname()
  const isWatchVideo = pathname.includes('/watch')

  return (
    <div className="min-h-screen h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex overflow-y-hidden">
        <div className="flex-1 flex">
          {!isWatchVideo && <Sidebar />}
          {children}
        </div>
      </main>
    </div>
  )
}
