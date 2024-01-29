/* eslint-disable react/prop-types */import { Redirect } from "wouter"
import Gif from "../../components/Gif"
// import { useGifs } from "../../hooks/useGifs"
import { useSingleGif } from "../../hooks/useSingleGif"

export const Detail = ({ params }) => {

  const { gif, isError } = useSingleGif({ id: params.id })

  if(isError) return <Redirect to="/404" />

  return (
    <>
      {
        gif &&
        <>
          <h3>{gif.title}</h3>
          <Gif
            id={gif.id}
            image={gif.image}
            title={gif.title}
          />

        </>
      }

    </>

  )
}
