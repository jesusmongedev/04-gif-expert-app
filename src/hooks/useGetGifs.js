import { useEffect, useState } from 'react'
import { fetchGifs } from '@/services/fetchGifs'

function useGetGifs ({ category }) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // FIXME: 4. Avoid unnecesary complexity grouping data by category
    fetchGifs({ category })
      .then((data) => {
        setImages(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }
  , [category])

  return {
    images,
    loading,
    error
  }
}

export default useGetGifs
