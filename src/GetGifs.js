const API_KEY = 'onMOM62HnZlO2iY4gjs3pxUs5jzdBc3S'
const LIMIT = 12

export const obtenerGifs = async (category, offset = 0) => {
  const isTrending = category.toLowerCase() === 'trending'

  const url = isTrending
    ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${LIMIT}&offset=${offset}`
    : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${LIMIT}&offset=${offset}`

  const resp = await fetch(url)
  const { data, pagination } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title || 'GIF',
    url: img.images.downsized_medium.url
  }))

  return { gifs, totalCount: pagination?.total_count ?? 0 }
}
