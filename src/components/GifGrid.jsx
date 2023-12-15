import deleteIcon from '@/assets/delete.svg'
import GifItem from './GifItem'

function GifGrid ({ handleDelete, category, images }) {
  return (
    <div>
      <div className='md:flex justify-between'>
        <h3 className='text-center text-2xl font-bold mb-6 mt-10'>{category}</h3>
        <button onClick={() => handleDelete(category)}>
          <img src={deleteIcon} alt='Delete' />
        </button>
      </div>
      <div className='sm:columns-2 lg:columns-3 gap-6 lg:gap-8'>
        {images[category].map(({ id, title, url }) => (
          <GifItem
            key={id}
            url={url}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}

export default GifGrid
