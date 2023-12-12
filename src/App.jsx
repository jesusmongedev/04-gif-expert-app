import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifResults from './components/GifResults'

function GifExpertApp () {
  const [category, setCategory] = useState('')

  return (
    <div className='max-w-5xl mx-auto my-10 px-6'>
      <h1 className='text-center text-2xl font-bold mb-4'>GifExpertApp</h1>
      <AddCategory setCategory={setCategory} />
      <GifResults category={category} />
    </div>
  )
}

export default GifExpertApp
