import { useEffect, useState } from 'react'
import { fetchGifs } from './../services/fetchGifs'

function useGetGifs ({ category }) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchGifs({ category })
      .then((data) => {
        setImages(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error)
        setIsLoading(false)
      })
  }
  , [category])

  return {
    images,
    isLoading,
    error
  }
}

export default useGetGifs
