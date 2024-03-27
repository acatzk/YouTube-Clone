import React, { ReactNode } from 'react'

import { Navbar } from './_components/navbar'
import { Sidebar } from './_components/sidebar'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex overflow-y-hidden">
        <div className="flex-1 flex">
          <Sidebar />
          {children}
        </div>
      </main>
    </div>
  )
}
