'use client'

import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { CircleCheck, MoreVertical, Volume2Icon } from 'lucide-react'

import { cn } from '~/lib/utils'
import { VideoItem } from '~/types'

type VideoCardProps = {
  video: VideoItem
  isRow?: boolean
}

export const VideoCard = ({ video, isRow = false }: VideoCardProps): JSX.Element => {
  const thumbnailImageWidth = isRow
    ? video.snippet.thumbnails.medium.width
    : video.snippet.thumbnails.high.width

  const thumbnailImageHeight = isRow
    ? video.snippet.thumbnails.medium.height
    : video.snippet.thumbnails.high.height

  return (
    <Link href={`/watch?v=${video.id.videoId}`}>
      <div className={cn('relative group flex gap-3', isRow ? 'flex-row' : 'flex-col')}>
        <div className="flex-shrink-0 relative">
          <Image
            src={video.snippet.thumbnails.high.url}
            className="rounded-2xl group-hover:rounded-none transition-all ease-in-out duration-500"
            height={thumbnailImageHeight}
            width={thumbnailImageWidth}
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
        <div
          className={cn(
            'text-sm leading-tight flex items-start space-x-2 flex-1',
            isRow ? 'pt-3' : ''
          )}
        >
          {!isRow && (
            <button className="flex-shrink-0 block">
              <Image
                width={40}
                height={40}
                src={video.snippet.thumbnails.default.url}
                className="w-10 h-10 rounded-full border bg-cover"
                alt="avatar"
              />
            </button>
          )}
          <div className="w-full mt-1">
            <div
              className={cn(
                'font-bold tracking-wide text-slate-900  w-full',
                isRow ? 'text-lg line-clamp-3' : 'text-sm line-clamp-2'
              )}
            >
              <h2> {video.snippet.title}</h2>
              {isRow && (
                <span className="text-sm text-gray-700 font-normal">
                  {moment(video.snippet.publishedAt).startOf('day').fromNow()}
                </span>
              )}
            </div>
            <div className="text-sm mt-2 leading-tight">
              <div className="text-slate-700 hover:text-gray-800 flex items-center gap-x-2">
                {isRow && (
                  <Image
                    width={20}
                    height={20}
                    src={video.snippet.thumbnails.default.url}
                    className="w-8 h-8 rounded-full border bg-cover"
                    alt="avatar"
                  />
                )}
                <span>{video.snippet.channelTitle}</span>
                <CircleCheck className="w-4 h-4 text-white" fill="#848484" />
              </div>
              {!isRow && (
                <span className="text-sm text-gray-700">
                  {moment(video.snippet.publishedAt).startOf('day').fromNow()}
                </span>
              )}
              {isRow && <div className="mt-2">{video.snippet.description}</div>}
            </div>
          </div>
          <button className="flex-shrink-0 opacity-0 group-hover:opacity-100">
            <MoreVertical className="text-gray-700 h-6 w-6" />
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
