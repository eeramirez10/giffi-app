import { useEffect, useContext } from "react"
import { getGifs } from "../services/getGifs"
import GifsContext from '../context/GifsContext'
import { useState } from "react"

const INITIAL_PAGE = 0

export const useGifs = ({ keyword } = {}) => {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  const lastKeyword = keyword ?? localStorage.getItem('lastKeyword')

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword: lastKeyword, limit:5 })
      .then(gifs => {
        setGifs(gifs)

        if (keyword) localStorage.setItem('lastKeyword', keyword)

      })
      .finally(() => setLoading(false))

  }, [keyword, lastKeyword, setGifs])

  useEffect(() => {

    if(page === INITIAL_PAGE) return 
    setLoadingNextPage(true)
    getGifs({ keyword: lastKeyword, offset: page, limit: 5 })
      .then(nextGifs => {
        setGifs(prevGifs => [...prevGifs, ...nextGifs])
      })
      .finally(() => setLoadingNextPage(false))
  }, [lastKeyword, setGifs, page])


  return {
    gifs,
    loading,
    loadingNextPage,
    page,
    setPage
  }
}
