const {
  VITE_APP_API_KEY
} = import.meta.env
export const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_APP_API_KEY}&limit=10`
