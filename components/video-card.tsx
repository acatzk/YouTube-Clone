'use client'

import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { VideoItem } from '~/types'

type VideoCardProps = {
  video: VideoItem
}

export const VideoCard = ({ video }: VideoCardProps): JSX.Element => {
  return (
    <Link href={`/videos/${video.snippet.channelId}`}>
      <div className="relative group">
        <div className="flex-shrink-0 relative">
          <Image
            src={video.snippet.thumbnails.high.url}
            className="w-full bg-gray-400 border-3 border-black overflow-hidden bg-cover rounded-2xl"
            width={50}
            height={50}
            alt="thumbnail"
          />
          <div className="absolute top-0 right-0 flex flex-col mt-1 space-y-1 mr-1 opacity-0 group-hover:opacity-100 transition ease-in-out duration-200">
            <button className="focus:outline-none">
              <svg
                className="w-6 h-6 fill-current  bg-gray-900 text-white"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
                  className="style-scope yt-icon"
                ></path>
              </svg>
            </button>
            <button className="focus:outline-none bg-gray-900 text-white">
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
              >
                <path
                  d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"
                  className="style-scope yt-icon"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="text-sm leading-tight flex items-start space-x-2 pt-3">
          <button className="flex-shrink-0 block">
            <img
              src={video.snippet.thumbnails.default.url}
              className="w-10 h-10 rounded-full border bg-cover"
              alt="avatar"
            />
          </button>
          <div className="w-full mt-1">
            <div className="font-medium text-sm tracking-wide text-gray-900 clamp-2 line-clamp-2">
              {video.snippet.title}
            </div>
            <div className="text-sm mt-2 leading-tight">
              <a href="#" className="text-gray-700 hover:text-gray-800 flex items-center">
                <span>{video.snippet.channelTitle}</span>
                <span v-show="video.isVerified">
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
              </a>
              <span className="text-sm text-gray-700">
                {moment(video.snippet.publishedAt).startOf('day').fromNow()}
              </span>
            </div>
          </div>
          <button className="flex-shrink-0">
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
