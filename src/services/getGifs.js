import { getEnvVariables } from "../helpers/getEnvVariables"

const { VITE_GIPHY_APY_KEY } = getEnvVariables()


export const getGifs = async ({ keyword = 'the boys'} = {}) => {

  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${VITE_GIPHY_APY_KEY}&q=${keyword}&limit=10&offset=0&rating=r&lang=en&bundle=messaging_non_clips`

  return fetch(apiURL)
    .then(resp => resp.json())
    .then(({ data }) => {

      const gifs = data.map(gif => ({ id: gif.id, title: gif.title, image: gif.images.original.url }))
      return gifs
    })

}