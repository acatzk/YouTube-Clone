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
    standard?: Thumbnail
    maxres?: Thumbnail
  }
  channelTitle?: string
}

export type VideoItem = {
  id: {
    videoId: string
  }
  snippet: Snippet
  contentDetails?: ContentDetail
}

export type ContentDetail = {
  duration: string
  dimension: string
  definition: string
  caption: string
  licensedContent: boolean
  contentRating: {}
  projection: string
}

export type ChannelItem = {
  id: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      default: Thumbnail
      medium: Thumbnail
      high: Thumbnail
      standard: Thumbnail
      maxres: Thumbnail
    }
  }
}

export type YoutubeApiResponse = {
  items: VideoItem[]
}

export type YoutubeChannelResponse = {
  items: ChannelItem[]
}

export type YoutubeVideoResponse = {
  items: VideoItem[]
}
