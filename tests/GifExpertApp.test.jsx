import React from 'react'
import GifExpertApp from './../src/GifExpertApp'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Tests for <GifExpertApp />', () => {
  const category = 'One Punch'

  test('should return if category already exists', () => {
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)
    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)
    // expect just one category
    expect(screen.getAllByText(category).length).toBe(1)
    // screen.debug()
  })

  test('should render GifGridItemSkeleton when submitting new category', () => {
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)
    expect(screen.getAllByTestId('gifSkeleton').length).toBeGreaterThan(0)
    // screen.debug()
  })

  test('should delete category using handleDelete function', () => {
    const secondCategory = 'Star wars'
    render(<GifExpertApp />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: category } })
    fireEvent.submit(form)
    fireEvent.input(input, { target: { value: secondCategory } })
    fireEvent.submit(form)
    const handleDelete = screen.getAllByRole('button', { name: '🗑️' })[0]
    fireEvent.click(handleDelete)
    expect(screen.queryByText(secondCategory)).toBeNull()
    screen.debug()
  })
})
