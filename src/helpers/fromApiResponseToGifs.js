
export const fromApiResponseToGif = (apiResponse) => ({
  id: apiResponse.id,
  title: apiResponse.title,
  image: apiResponse.images.original.url
})