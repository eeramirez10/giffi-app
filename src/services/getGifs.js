import { fromApiResponseToGifs } from "../helpers/fromApiResponseToGifs"
import { getEnvVariables } from "../helpers/getEnvVariables"

const { VITE_GIPHY_APY_KEY, VITE_GIPHI_API_URL  } = getEnvVariables()


export const getGifs = async ({ keyword = 'the boys', limit = 25} = {}) => {

  const apiURL = `${VITE_GIPHI_API_URL}/search?api_key=${VITE_GIPHY_APY_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=en&bundle=messaging_non_clips`

  return fetch(apiURL)
    .then(resp => resp.json())
    .then(({ data }) => fromApiResponseToGifs(data))

}