import { createGifAdapter } from '@/adapters/gifs.adapter'
import { BASE_URL } from '@/constants/general'
import axios from 'axios'

export const fetchGifs = async ({ category }) => {
  const url = `${BASE_URL}&q=${encodeURI(category)}`

  const { data: { data: gifs = [] } } = await axios.get(url)
  const adaptedGifs = gifs.map(gif => (createGifAdapter(gif)))
  return adaptedGifs
}
