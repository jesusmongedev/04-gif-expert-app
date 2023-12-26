import deleteIcon from '@/assets/delete.svg'
import { GifGridItem, GifGridItemSkeleton } from './'
import useGetGifs from '@/hooks/useGetGifs'

export function GifGrid ({ handleDelete, category }) {
  const { images, error, loading } = useGetGifs({ category })

  return (
    <div>
      <div className='flex justify-between items-center space-x-4 md:space-x-8'>
        <h3 className='text-xl md:text-2xl font-bold mb-6 mt-10 flex-1'>{category}</h3>
        <button onClick={() => handleDelete(category)}>
          <img src={deleteIcon} alt='Delete' />
        </button>
      </div>
      {error && (
        <div className='text-center'>
          <p className='text-red-500 font-bold'>Error</p>
          <p>{error.message}</p>
        </div>
      )}
      <div className='sm:columns-2 lg:columns-3 gap-6 lg:gap-8'>
        {loading && [1, 2, 3].map((n) => <GifGridItemSkeleton key={n} />)}
        {images.map(({ id, title, url }) => (
          <GifGridItem
            key={id}
            url={url}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}
