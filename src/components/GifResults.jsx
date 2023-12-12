import useGetGifs from '@/hooks/useGetGifs'
import React from 'react'
import GifGrid from './GifGrid'

function GifResults ({ category }) {
  const { images, error, loading, setImages } = useGetGifs({ category })
  console.log('images', images)

  const handleDelete = (category) => {
    const { [category]: deleted, ...rest } = images
    setImages(rest)
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-56'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center mt-56'>
        <p className='text-red-500 font-bold'>Error</p>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <>
      <div>
        {Object.keys(images)
          .reverse()
          .map((category) => (
            <GifGrid
              key={category}
              handleDelete={handleDelete}
              category={category}
              images={images}
            />
          ))}
      </div>
    </>
  )
}

export default GifResults
