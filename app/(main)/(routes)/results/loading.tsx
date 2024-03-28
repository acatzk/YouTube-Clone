import React from 'react'

export default function Loading(): JSX.Element {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto max-w-screen-xl w-full px-4 py-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 mb-6 ">
          {[1, 2, 3, 4].map((i) => (
            <div className="animate-pulse" key={i}>
              <div className="flex gap-4">
                <div className="w-[350px] h-[250px] bg-gray-200 rounded-lg shrink-0"></div>
                <div className="flex flex-col gap-4 w-full mt-4">
                  <div className="flex flex-col items-start space-y-2">
                    <div className="h-4 w-[500px] bg-slate-200 rounded"></div>
                    <div className="h-4 w-[300px] bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-10 w-10 bg-slate-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
