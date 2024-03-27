'use client'

import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { Volume2Icon } from 'lucide-react'

import { cn } from '~/lib/utils'
import { VideoItem } from '~/types'

type VideoCardProps = {
  video: VideoItem
  isRow?: boolean
}

export const VideoCard = ({ video, isRow = false }: VideoCardProps): JSX.Element => {
  return (
    <Link href={`/watch?v=${video.id.videoId}`}>
      <div className={cn('relative group flex', isRow ? 'flex-row' : 'flex-col')}>
        <div className="flex-shrink-0 relative">
          <Image
            src={video.snippet.thumbnails.high.url}
            className="inset-0 w-full h-full object-fill rounded-2xl group-hover:rounded-none transition-all ease-in-out duration-500"
            height={video.snippet.thumbnails.high.height}
            width={video.snippet.thumbnails.high.width}
            quality={100}
            placeholder="blur"
            blurDataURL={video.snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <div className="absolute top-2 right-2 flex flex-col space-y-1 mr-1 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200">
            <div role="button">
              <Volume2Icon className="w-5 h-5 fill-current text-white" />
            </div>
          </div>
        </div>
        <div className="text-sm leading-tight flex items-start space-x-2 pt-3">
          <button className="flex-shrink-0 block">
            <Image
              width={40}
              height={40}
              src={video.snippet.thumbnails.default.url}
              className="w-10 h-10 rounded-full border bg-cover"
              alt="avatar"
            />
          </button>
          <div className="w-full mt-1">
            <div className="font-bold text-sm tracking-wide text-slate-900 clamp-2 line-clamp-2">
              {video.snippet.title}
            </div>
            <div className="text-sm mt-2 leading-tight">
              <div className="text-slate-700 hover:text-gray-800 flex items-center">
                <span>{video.snippet.channelTitle}</span>
                <span>
                  <svg
                    className="pl-1 w-4 h-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <span className="text-sm text-gray-700">
                {moment(video.snippet.publishedAt).startOf('day').fromNow()}
              </span>
            </div>
          </div>
          <button className="flex-shrink-0 opacity-0 group-hover:opacity-100">
            <svg
              className="text-gray-700 h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
            >
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                className="style-scope yt-icon"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  )
}

VideoCard.Skeleton = function VideoCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col space-y-4">
        <div className="w-full h-[250px] bg-gray-200 rounded-lg"></div>
        <div className="flex items-center space-x-4 w-full">
          <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
          <div className="flex flex-col items-start space-y-2">
            <div className="h-4 w-[300px] bg-slate-200 rounded"></div>
            <div className="h-4 w-[200px] bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
