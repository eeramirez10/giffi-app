import { fromApiResponseToGif } from "../helpers/fromApiResponseToGifs"
import { getEnvVariables } from "../helpers/getEnvVariables"

const { VITE_GIPHY_APY_KEY, VITE_GIPHI_API_URL } = getEnvVariables()

export const getSingleGif = async ({ id }) => {

  console.log(id)
  const apiURL = `${VITE_GIPHI_API_URL}/${id}?api_key=${VITE_GIPHY_APY_KEY}`

  const response = await fetch(apiURL)

  const { data } = await response.json()
  return fromApiResponseToGif(data)

}