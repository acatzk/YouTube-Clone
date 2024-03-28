import React from 'react'

export default function Loading(): JSX.Element {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 mb-6 ">
          {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div className="animate-pulse" key={i}>
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
          ))}
        </div>
      </div>
    </div>
  )
}
