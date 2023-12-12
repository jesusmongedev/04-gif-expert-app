import { BASE_URL } from '@/constants/general'
import axios from 'axios'

export const fetchGifs = async ({ category }) => {
  const url = `${BASE_URL}&q=${encodeURI(category)}`

  const { data } = await axios.get(url)
  return data || []
}
