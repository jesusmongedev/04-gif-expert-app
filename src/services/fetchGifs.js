import { createGifAdapter } from './../adapters/gifs.adapter'
import { BASE_URL } from './../constants/general'

export const fetchGifs = async ({ category, limit = 10 }) => {
  const url = `${BASE_URL}&q=${encodeURI(category)}&limit=${limit}`

  const resp = await fetch(url)
  const { data } = await resp.json()
  const adaptedGifs = data.map(gif => (createGifAdapter(gif)))
  return adaptedGifs
}
