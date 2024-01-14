import useGetGifs from './../../src/hooks/useGetGifs'
import { renderHook, waitFor } from '@testing-library/react'

describe('Test for useGetGifs custom hook', () => {
  const category = 'One Punch'

  test('should return initial states values', () => {
    const { result } = renderHook(() => useGetGifs({ category }))
    const { images, isLoading, error } = result.current
    expect(images).toEqual([])
    expect(isLoading).toBeTruthy()
    expect(error).toBeNull()
  })

  test('should return an array of images, isLoading false, and error null', async () => {
    const { result } = renderHook(() => useGetGifs({ category }))
    // current value of the hook is: { result.current } it doesn't have the values yet
    // const { images, isLoading, error } = result.current
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
    const { images, isLoading, error } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
    expect(error).toBeNull()
    console.log('result', JSON.stringify(result, null, 2))
  })
})
