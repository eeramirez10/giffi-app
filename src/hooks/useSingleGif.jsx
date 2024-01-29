import { useState } from 'react'
import { useGifs } from '../hooks/useGifs'
import { getSingleGif } from '../services/getSingleGif'
import { useEffect } from 'react'

export const useSingleGif = ({ id }) => {
  const { gifs } = useGifs()

  const gifFormCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFormCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {

    if (!gif) {
      getSingleGif({ id })
        .then(setGif)
        .catch(err => {
          console.log(err)
          setIsError(true)
        })
        .finally(() => setIsLoading(false))
    }



  }, [id, gif])

  return { gif, isLoading, isError }
}