import React from 'react'
import { lgLink, library, links } from '~/data/constant'

export const Sidebar = (): JSX.Element => {
  return (
    <div className="w-18 lg:w-60 flex-none bg-white flex flex-col h-screen">
      <div className="overflow-y-auto">
        <div className="block lg:hidden">
          <ul className="mt-3 text-gray-600">
            {lgLink.map((link, i) => (
              <li key={i} className="hover:bg-gray-200">
                <button className="w-full flex flex-col items-center justify-center rounded-none focus:outline-none py-2 transition ease-in-out duration-150 space-y-1">
                  <span dangerouslySetInnerHTML={{ __html: link.icon }} />
                  <span className="text-xs font-light tracking-tighter">{link.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="py-3 border-b">
            {links.map((link, i) => (
              <li key={i} className="hover:bg-gray-200">
                <a href="#" className="flex items-center space-x-6 tracking-tight py-2">
                  <span className="ml-6" dangerouslySetInnerHTML={{ __html: link.icon }} />
                  <span className="text-sm">{link.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="py-3 border-b">
            {library.map((lib, i) => (
              <li key={i} className="hover:bg-gray-200">
                <a href="#" className="flex items-center space-x-6 tracking-tight py-2">
                  <span className="ml-6" dangerouslySetInnerHTML={{ __html: lib.icon }} />
                  <span className="text-sm">{lib.title}</span>
                </a>
              </li>
            ))}
            <div>
              <div>
                <li>
                  <a href="#" className="flex items-center space-x-6 tracking-tight py-2">
                    <span className="ml-6">
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
                    </span>
                    <span className="text-sm truncate">Background audio travel</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-6 tracking-tight py-2">
                    <span className="ml-6">
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
                    </span>
                    <span className="text-sm truncate">God Words</span>
                  </a>
                </li>
              </div>
              <li>
                <a
                  href="#"
                  className="flex items-center space-x-6 tracking-tight hover:bg-gray-200 py-2"
                >
                  <span className="ml-6">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      focusable="false"
                    >
                      <path
                        d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                        className="style-scope yt-icon"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm">Show more</span>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
