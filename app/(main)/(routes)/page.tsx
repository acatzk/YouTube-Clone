import React from 'react'

import { videos } from '~/data/videos'
import { YoutubeApiResponse } from '~/types'
import { VideoCard } from '~/components/video-card'

// const YOUTUBE_PLAYLIST_API = 'https://www.googleapis.com/youtube/v3/search'

// async function getYoutubeData(): Promise<YoutubeApiResponse> {
//   const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!
//   const maxResults = 25 // Number of videos to fetch
//   const part = 'snippet' // Snippet data (includes title, thumbnails, etc.)
//   const type = 'video' // Searching for videos
//   const order = 'date' // Get the most recent videos
//   const fields =
//     'items(id(videoId),snippet(publishedAt,channelId,title,description,thumbnails,channelTitle))' // Specify the fields we want to receive
//   const res = await fetch(
//     `${YOUTUBE_PLAYLIST_API}?key=${apiKey}&maxResults=${maxResults}&part=${part}&type=${type}&order=${order}&fields=${fields}`
//   )

//   return await res.json()
// }

export default async function Home(): Promise<JSX.Element> {
  // const videos = await getYoutubeData()

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mb-6 ">
          {videos?.items?.map((video, i) => (
            <VideoCard key={i} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}
