'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { YoutubeApiResponse } from '~/types'
import { VideoCard } from '~/components/video-card'
import { searchResultsData } from '~/data/searchResults'

import Loading from './loading'

const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/search'
const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!

async function fetchYoutubeData(searchQuery: string): Promise<YoutubeApiResponse> {
  const maxResults = 25
  const part = 'snippet'
  const type = 'video'
  const order = 'relevance'
  const fields =
    'items(id(videoId),snippet(publishedAt,channelId,title,description,thumbnails,channelTitle))'

  const res = await fetch(
    `${YOUTUBE_PLAYLIST_API}?key=${apiKey}&maxResults=${maxResults}&part=${part}&type=${type}&order=${order}&q=${encodeURIComponent(
      searchQuery
    )}&fields=${fields}`
  )

  return await res.json()
}

export default function Results(): JSX.Element {
  const [searchResults, setSearchResults] = useState<YoutubeApiResponse | null>(searchResultsData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  const searchParams = useSearchParams()
  const searchQueryParam = searchParams.get('search_query') ?? ''

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchYoutubeData(searchQueryParam)
        setSearchResults(data)
        setLoading(false)
      } catch (error) {
        setError('Error fetching data from YouTube API')
        setLoading(false)
      }
    }

    if (searchQueryParam) {
      setSearchQuery(searchQueryParam)
      fetchData()
    }
  }, [searchQueryParam])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
        <div className="grid grid-cols-1 gap-y-8">
          {searchResults?.items?.map((video, i) => (
            <VideoCard key={i} video={video} isRow />
          ))}
        </div>
      </div>
    </div>
  )
}
