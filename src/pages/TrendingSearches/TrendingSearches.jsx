import { useState } from 'react'
import { getTrendingTerms } from '../../services/getTrendingTerms'
import Category from '../../components/Category/index'

const TrendingSearches = () => {

  const [trendings, setTrendings] = useState([])

  useState(() => {
    getTrendingTerms()
      .then(resp => {
        const wordTiFind = 'GIF'
        const trends = resp.map(gif => {
          const indexWord = gif.title.indexOf(wordTiFind)

          const trend = gif.title.slice(0, indexWord)

          return trend

        })
        setTrendings(trends)
      })
  }, [])

  return (
    <Category name='Trendings' options={trendings} />
  )
}

export default TrendingSearches


