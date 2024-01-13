import { fetchGifs } from '../../src/services/fetchGifs'

describe('Test for fetchGifs(', () => {
  // Arrange
  const category = 'The Big Bang Theory'
  const limit = 10

  // Act
  let gifs
  beforeAll(async () => {
    gifs = await fetchGifs({ category, limit })
  })

  test('It should return an array of gifs', async () => {
    // Assert
    expect(gifs.length).toBe(10)
  })

  test('should return and array of object with the following shape', async () => {
    // Assert
    expect(gifs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          title: expect.any(String),
          url: expect.any(String)
        })
      ])
    )
  })

  test('should return a valid url', () => {
    const [gif] = gifs
    // Assert
    expect(gif.url).toMatch(/https?:\/\/.+\.(?:jpg|gif|png)/)
  })
})
