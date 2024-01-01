/* eslint-disable react/prop-types */

import { Gif } from "../../components/Gif"
import { useGifs } from "../../hooks/useGifs"

export const Detail = ({ params }) => {

  const { gifs } = useGifs()

  const gif = gifs.find( gif => gif.id === params.id)


  return (
    <Gif id={gif.id} image = {gif.image} title = {gif.title}/>
  )
}
