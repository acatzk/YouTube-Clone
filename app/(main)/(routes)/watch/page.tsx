'use client'

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { video } from '~/data/video'
import { ChannelItem, VideoItem, YoutubeChannelResponse, YoutubeVideoResponse } from '~/types'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false
})

export default function Watch(): JSX.Element {
  const [videoData, setVideoData] = useState<VideoItem | null>(null)
  const [channelData, setChannelData] = useState<ChannelItem | null>(null)
  const [relatedVideos, setRelatedVideos] = useState<VideoItem[]>([])

  const searchParams = useSearchParams()
  const videoId = searchParams.get('v') ?? ''

  // useEffect(() => {
  //   if (videoId && typeof videoId === 'string') {
  //     fetchVideoData(videoId)
  //   }
  // }, [videoId])

  // const fetchVideoData = async (videoId: string) => {
  //   try {
  //     const videoResponse = await fetch(
  //       `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  //     )
  //     const videoData: YoutubeVideoResponse = await videoResponse.json()
  //     if (videoData.items.length > 0) {
  //       setVideoData(videoData.items[0])

  //       // Fetch channel details
  //       const channelId = videoData.items[0].snippet.channelId
  //       fetchChannelData(channelId)

  //       // Fetch related videos
  //       // TODO: Fetch related videos
  //     }
  //   } catch (error) {
  //     console.error('Error fetching video data:', error)
  //   }
  // }

  // const fetchChannelData = async (channelId: string) => {
  //   try {
  //     const channelResponse = await fetch(
  //       `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
  //     )
  //     const channelData: YoutubeChannelResponse = await channelResponse.json()
  //     if (channelData.items.length > 0) {
  //       setChannelData(channelData.items[0])
  //     }
  //   } catch (error) {
  //     console.error('Error fetching channel data:', error)
  //   }
  // }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full flex h-[2000px]">
        <div className="flex-1 p-4">
          <div className="bg-black rounded-2xl relative">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              playing
              loop
              controls
              light={false}
              width="100%"
              height="70vh"
              style={{
                overflow: 'hidden',
                borderRadius: '50px'
              }}
            />
          </div>
          s<div>Video Details</div>
        </div>
        <div className="w-0 md:w-[350px] p-4">
          <div>Video Suggstion List</div>
        </div>
      </div>
    </div>
  )
}
