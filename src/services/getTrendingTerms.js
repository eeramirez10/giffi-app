import { fromApiResponseToGif } from "../helpers/fromApiResponseToGifs"
import { getEnvVariables } from "../helpers/getEnvVariables"

const { VITE_GIPHY_APY_KEY, VITE_GIPHI_API_URL } = getEnvVariables()

export const getTrendingTerms = ({limit = 25} = {}) => {

  const apiURL = `
    ${VITE_GIPHI_API_URL}/trending?api_key=${VITE_GIPHY_APY_KEY}&limit=${limit}&offset=0&rating=r&lang=en&bundle=messaging_non_clips`

  return fetch(apiURL)
    .then(resp => resp.json())
    .then(({ data }) => data.map( trend => fromApiResponseToGif(trend) ) )


}