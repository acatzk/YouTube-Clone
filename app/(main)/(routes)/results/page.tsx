'use client'

import React from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { YoutubeApiResponse } from '~/types'

async function fetchYoutubeData(searchQuery: string): Promise<YoutubeApiResponse> {
  const apiKey = process.env.YOUTUBE_API_KEY!
  const maxResults = 25
  const part = 'snippet'
  const type = 'video'
  const order = 'relevance'
  const fields =
    'items(id(videoId),snippet(publishedAt,channelId,title,description,thumbnails,channelTitle))'

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&maxResults=${maxResults}&part=${part}&type=${type}&order=${order}&q=${encodeURIComponent(
      searchQuery
    )}&fields=${fields}`
  )
  const data: YoutubeApiResponse = await res.json()
  return data
}

export default function Results(): JSX.Element {
  const router = useRouter()
  const params = useSearchParams()

  return (
    <div>
      Hello search: <pre>{JSON.stringify({ params }, null, 2)}</pre>
    </div>
  )
}
