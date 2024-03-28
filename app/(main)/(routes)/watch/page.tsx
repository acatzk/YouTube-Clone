'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { CircleCheck } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { useScreenCondition } from '~/hooks/use-screen-size'
import { ChannelItem, VideoItem, YoutubeChannelResponse, YoutubeVideoResponse } from '~/types'
import { Button } from '~/components/ui/button'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false
})

export default function Watch(): JSX.Element {
  const [videoData, setVideoData] = useState<VideoItem | null>(null)
  const [channelData, setChannelData] = useState<ChannelItem | null>(null)
  const isMediumSize = useScreenCondition('(max-width: 768px)')

  const searchParams = useSearchParams()
  const videoId = searchParams.get('v') ?? ''

  useEffect(() => {
    if (videoId && typeof videoId === 'string') {
      fetchVideoData(videoId)
    }
  }, [videoId])

  const fetchVideoData = async (videoId: string) => {
    try {
      const videoResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      )
      const videoData: YoutubeVideoResponse = await videoResponse.json()
      if (videoData.items.length > 0) {
        setVideoData(videoData.items[0])

        // Fetch channel details
        const channelId = videoData.items[0].snippet.channelId
        fetchChannelData(channelId)

        // Fetch related videos
        // TODO: Fetch related videos
      }
    } catch (error) {
      console.error('Error fetching video data:', error)
    }
  }

  const fetchChannelData = async (channelId: string) => {
    try {
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
      )
      const channelData: YoutubeChannelResponse = await channelResponse.json()
      if (channelData.items.length > 0) {
        setChannelData(channelData.items[0])
      }
    } catch (error) {
      console.error('Error fetching channel data:', error)
    }
  }

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
                borderRadius: '25px'
              }}
            />
          </div>
          {/* Title */}
          <h1 className="py-2 text-slate-800 font-bold text-xl">{videoData?.snippet.title}</h1>
          {/* Channle Info */}
          <div className="flex items-center space-x-6">
            <div className="text-slate-700 hover:text-gray-800 flex items-center gap-x-2">
              <Image
                width={20}
                height={20}
                src={videoData?.snippet?.thumbnails?.standard?.url!}
                className="w-10 h-10 rounded-full border bg-cover"
                alt="avatar"
              />
              <div>
                <div className="inline-flex items-center space-x-1">
                  <h4 className="font-medium">{videoData?.snippet.channelTitle}</h4>
                  <CircleCheck className="w-4 h-4 text-white" fill="#848484" />
                </div>
                <p className="text-xs text-slate-600">100K Subscriber</p>
              </div>
            </div>
            <Button className="rounded-full">Subscribe</Button>
          </div>
          {/* Description */}
          <div className="mt-4 rounded-lg bg-slate-100">
            <p className="text-sm text-slate-800 p-3">{videoData?.snippet.description}</p>
          </div>
        </div>
        {!isMediumSize && (
          <div className="w-[350px] p-4">
            <div>Suggestion Video List</div>
          </div>
        )}
      </div>
    </div>
  )
}
