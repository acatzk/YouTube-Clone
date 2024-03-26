'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export const ProgressbarProvider = (): JSX.Element => {
  return (
    <ProgressBar height="2px" color="#ff0000" options={{ showSpinner: false }} shallowRouting />
  )
}
