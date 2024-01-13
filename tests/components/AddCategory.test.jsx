import React from 'react'
import { AddCategory } from './../../src/components/AddCategory'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Tests for <AddCategory />', () => {
  const inputValue = 'Saitama'
  test('should change the textbox value', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    // i am not using react useState to change the input value onChange event
    // I use const { value } = e.target.category in the onSubmit event
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: inputValue } })
    expect(input.value).toBe(inputValue)
    // screen.debug()
  })

  test('should call onNewCategory if it has a value diferent than ""', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: inputValue } })
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    // screen.debug()
  })

  test('should not call onNewCategory if it has a value equal than ""', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})
