import React from 'react'
import { GifGridItem } from './../../src/components/GifGridItem'
import { render, screen } from '@testing-library/react'
describe('Tests for GifGridItem component', () => {
  // Arrange
  const title = 'Brian Tracy'
  const url = 'https://www.briantracy.com/blog/wp-content/uploads/2019/07/what-is-success.jpg'
  // Act
  let _container
  beforeEach(() => {
    const { container } = render(<GifGridItem title={title} url={url} />)
    _container = container
  })
  // screen.debug()
  // Assert
  test('component should Match Snapshot', () => {
    expect(_container).toMatchSnapshot()
  })

  test('should show the img with indicated props', () => {
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('should render the title', () => {
    const hasTitle = screen.getByText(title)
    expect(hasTitle).toBeTruthy()
  })
})
