import React from 'react'
import { Menu, Search, SearchIcon } from 'lucide-react'

import { UploadIcon } from '~/components/icons/upload-icon'
import { RecordIcon } from '~/components/icons/record-icon'
import { YoutubeIcon } from '~/components/icons/youtube-icon'
import { NotificationIcon } from '~/components/icons/notification-icon'

export const Navbar = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between border-b border-gray-300 px-4 bg-white py-1 sticky top-0">
      <div className="flex items-center space-x-4">
        <button className="focus:outline-none rounded-full p-2 hover:bg-gray-200 transition ease-in-out duration-150">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <span className="flex items-center space-x-1">
          <YoutubeIcon />
        </span>
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center justify-center space-x-2 ml-3">
          <form className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 shadow-inner py-1 px-3 w-56 md:w-64 lg:w-[450px] rounded-l-sm focus:outline-none focus:border-blue-700"
            />
            <button className="border-t border-r border-b rounded-r-sm border-gray-400 py-1 px-6 bg-gray-100 text-sm hover:bg-gray-200 transition ease-in-out duration-150 focus:outline-none">
              <SearchIcon className="w-5 h-5 text-gray-600" />
            </button>
          </form>
          <div className="flex items-center">
            <button className="focus:outline-none rounded-full p-2 hover:bg-gray-200 transition ease-in-out duration-150">
              <RecordIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-0 sm:space-x-1 md:space-x-2">
          <li className="block sm:hidden">
            <button className="focus:outline-none rounded-full p-2 hover:bg-gray-200 transition ease-in-out duration-150">
              <RecordIcon />
            </button>
          </li>
          <li className="block sm:hidden">
            <button className="focus:outline-none rounded-full p-2 hover:bg-gray-200 transition ease-in-out duration-150">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
          </li>
          <li>
            <button className="focus:outline-none rounded-full p-2 hover:bg-gray-200 transition ease-in-out duration-150">
              <UploadIcon />
            </button>
          </li>
          <li>
            <button className="focus:outline-none rounded-full p-2 hover:bg-gray-200 transition ease-in-out duration-150">
              <NotificationIcon />
            </button>
          </li>
          <li className="pl-3">
            <button className="focus:outline-none flex-shrink-0 p-2">
              <img
                className="w-8 h-8 bg-gray-500 rounded-full border border-gray-200"
                src="https://avatars.githubusercontent.com/u/38458781?v=4"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}