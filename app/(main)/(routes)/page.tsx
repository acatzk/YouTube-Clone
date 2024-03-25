import { posts } from '~/data/constant'
import { VideoCard } from '~/components/video-card'

import { Sidebar } from '../_components/sidebar'

export default function Home(): JSX.Element {
  return (
    <div className="flex-1 flex">
      <Sidebar />

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mb-6 ">
            {posts.map((post, i) => (
              <VideoCard key={i} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
