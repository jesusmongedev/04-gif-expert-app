import React from 'react'
import Proptypes from 'prop-types'

export function GifGridItem ({ url, title }) {
  return (
    <div className='w-full aspect-video mb-6 lg:mb-10 bg-gray-100 rounded  shadow-lg'>
      <img className='w-full' src={url} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
      </div>
    </div>
  )
}

GifGridItem.propTypes = {
  url: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired
}
