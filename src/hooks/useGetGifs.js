import { useEffect, useState } from 'react'
import { fetchGifs } from '@/services/fetchGifs'

function useGetGifs ({ category }) {
  const [images, setImages] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (category === '') return
    setLoading(true)

    fetchGifs({ category })
      .then((data) => {
        setImages((prevImages) => ({
          ...prevImages,
          [category]: data
        }))
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
    error,
    setImages
  }
}

export default useGetGifs
