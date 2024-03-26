export type Thumbnail = {
  url: string
  width: number
  height: number
}

export type Snippet = {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: {
    default: Thumbnail
    medium: Thumbnail
    high: Thumbnail
  }
  channelTitle: string
}

export type VideoItem = {
  id: {
    videoId: string
  }
  snippet: Snippet
}

export type YoutubeApiResponse = {
  items: VideoItem[]
}
