import React from 'react'

export default function Loading(): JSX.Element {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full px-4 py-6 flex gap-x-4">
        <div className="animate-pulse flex-1">
          <div className="flex flex-col space-y-4">
            <div className="w-full h-[350px] bg-gray-200 rounded-lg"></div>
            <div className="flex items-center space-x-4 w-full">
              <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
              <div className="flex flex-col items-start space-y-2">
                <div className="h-4 w-[300px] bg-slate-200 rounded"></div>
                <div className="h-4 w-[200px] bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex flex-col space-y-4">
                <div className="w-[190px] h-[190px] bg-gray-200 rounded-lg"></div>
                <div className="flex items-center space-x-4 w-full">
                  <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
                  <div className="flex flex-col items-start space-y-2">
                    <div className="h-4 w-[80px] bg-slate-200 rounded"></div>
                    <div className="h-4 w-[50px] bg-slate-200 rounded"></div>
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
