

export const fromApiResponseToGifs = (apiResponse) => {

  const gifs = apiResponse.map(({id, title, images} ) => ({ id, title, image: images.original.url }))
  return gifs
}