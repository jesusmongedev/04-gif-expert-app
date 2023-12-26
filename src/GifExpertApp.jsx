import { useState } from 'react'
import { AddCategory, GifGrid, NoCategories } from './components'

function GifExpertApp () {
  const [categories, setCategories] = useState([])

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  const handleDelete = (category) => {
    const rest = categories.filter((c) => c !== category)
    setCategories(rest)
  }

  return (
    <div className='max-w-5xl mx-auto my-10 px-6'>
      <h1 className='text-center text-2xl font-bold mb-4'>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {!categories.length && (
        <NoCategories />
      )}
      {categories.map((category) => (
        <GifGrid
          key={category}
          handleDelete={handleDelete}
          category={category}
        />
      ))}
    </div>
  )
}

export default GifExpertApp
