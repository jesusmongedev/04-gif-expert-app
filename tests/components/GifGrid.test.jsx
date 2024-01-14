import React from 'react'

import { GifGrid } from './../../src/components/GifGrid'
import { render, screen, fireEvent } from '@testing-library/react'
import useGetGifs from './../../src/hooks/useGetGifs'

jest.mock('./../../src/hooks/useGetGifs')

describe('Tests for <GifGrid />', () => {
  const category = 'Saitama'
  const handleDelete = jest.fn()
  const error = { message: 'Error fetching images' }

  const gifs = [
    {
      id: 'ABC',
      title: `${category} fighting`,
      url: `https://localhost/${category}.jpg`
    },
    {
      id: '123',
      title: `${category} flighting`,
      url: `https://localhost/${category}.jpg`
    }
  ]

  test('should show isLoading inicially', () => {
    useGetGifs.mockReturnValue({
      images: [],
      isLoading: true,
      error: null
    })

    render(<GifGrid category={category} handleDelete={handleDelete} />)
    expect(screen.getByText(category))
    const gifSkeleton = screen.getAllByTestId('gifSkeleton')
    expect(gifSkeleton.length).toBe(3)
    expect(gifSkeleton.length).toBeGreaterThan(0)
  })

  test('should show error message if images are not fetched', () => {
    useGetGifs.mockReturnValue({
      images: [],
      isLoading: false,
      error
    })
    render(<GifGrid category={category} handleDelete={handleDelete} />)
    expect(screen.getByText(error.message))
    // screen.debug()
  })

  test('should render items when gifs are fetched using useGetGifs custom hook', () => {
    useGetGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
      error: null
    })
    render(<GifGrid category={category} handleDelete={handleDelete} />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(gifs.length)
    // screen.debug()
  })

  test('should delete category when clicking delete button', () => {
    useGetGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
      error: null
    })
    render(<GifGrid category={category} handleDelete={handleDelete} />)
    const button = screen.getByRole('button')
    fireEvent.click(button, {})
    expect(handleDelete).toHaveBeenCalled()
    expect(handleDelete).toHaveBeenCalledTimes(1)
    expect(handleDelete).toHaveBeenCalledWith(category)
    // screen.debug()
  })
})
