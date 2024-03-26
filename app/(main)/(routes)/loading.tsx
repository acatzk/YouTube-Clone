import React from 'react'

import { Spinner } from '~/components/spinner'

export default function Loading(): JSX.Element {
  return (
    <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
      <div className="flex items-items justify-center">
        <Spinner size="lg" />
      </div>
    </div>
  )
}
