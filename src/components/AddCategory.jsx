import React, { useState } from 'react'
import Proptypes from 'prop-types'

export function AddCategory ({ onNewCategory }) {
  // using react useState to change the input value onChange event
  const [category, setCategory] = useState('')
  const handleChange = ({ target }) => setCategory(target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    // const { value } = e.target.category
    // if (value.trim().length <= 1) return
    if (category.trim().length <= 1) return
    // e.target.reset()
    // e.target.category.focus()
    setCategory('')
    onNewCategory(category)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const { value } = e.target.category
  //   if (value.trim().length <= 1) return
  //   e.target.reset()
  //   onNewCategory(value)
  // }

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <div className='flex'>
        {/* <input className='flex-1 px-4 border' type='search' name='category' role='search' /> */}
        <input className='flex-1 px-4 border' type='text' value={category} onChange={handleChange} />
        {/* <button className='bg-gray-300 text-slate-700 px-3 py-2'>
          Buscar
        </button> */}
      </div>
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: Proptypes.func.isRequired
}
