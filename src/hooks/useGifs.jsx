import { useEffect, useContext } from "react"
import { getGifs } from "../services/getGifs"
import GifsContext from '../context/GifsContext'


export const useGifs = ({ keyword } = {}) => {

  const { gifs , setGifs} = useContext(GifsContext)


  useEffect(() => {

    const lastKeyword = keyword ?? localStorage.getItem('lastKeyword')
    
    getGifs({ keyword: lastKeyword })
      .then(gifs => {
        setGifs(gifs)

        if(keyword) localStorage.setItem('lastKeyword', keyword)
        
      })


  }, [keyword,setGifs])


  return {
    gifs
  }
}
