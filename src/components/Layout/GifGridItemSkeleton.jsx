import React from 'react'
export function GifGridItemSkeleton () {
  return (
    <div className='animate-pulse flex flex-col items-center justify-center' data-testid="gifSkeleton" >
      <div className='bg-gray-200 h-64 w-full rounded-lg' />
      <div className='bg-gray-200 h-4 w-3/4 rounded-lg mt-4' />
    </div>
  )
}
