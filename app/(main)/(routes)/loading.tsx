'use client'

import React from 'react'

import { VideoCard } from '~/components/video-card'

export default function Loading(): JSX.Element {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mb-6 ">
          {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <VideoCard.Skeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
