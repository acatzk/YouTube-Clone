'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import { YoutubeApiResponse } from '~/types'

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
  const [searchResults, setSearchResults] = useState<YoutubeApiResponse | null>(null)
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

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && searchResults && (
        <div>
          <h1>Search Results for {searchQuery}</h1>
          {/* Render your search results here */}
          <pre>{JSON.stringify(searchResults, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
