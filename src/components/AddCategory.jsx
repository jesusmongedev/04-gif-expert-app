export function AddCategory ({ onNewCategory }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const { value } = e.target.category
    if (value.trim().length <= 1) return
    e.target.reset()
    e.target.category.focus()
    onNewCategory(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <input className='flex-1 px-4 border' type='search' name='category' />
        <button className='bg-gray-300 text-slate-700 px-3 py-2'>
          Buscar
        </button>
      </div>
    </form>
  )
}
