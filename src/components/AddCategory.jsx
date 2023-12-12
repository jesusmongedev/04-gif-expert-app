import React from 'react'

function AddCategory ({ setCategory }) {
  const handleSubmit = (e) => {
    const { value } = e.target.category
    setCategory(value)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <input className='flex-1 px-4' type='search' name='category' />
        <button className='bg-gray-300 text-slate-700 px-3 py-2'>
          Buscar
        </button>
      </div>
    </form>
  )
}

export default AddCategory
