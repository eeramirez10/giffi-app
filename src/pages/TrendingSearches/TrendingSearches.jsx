import { useState } from 'react'
import { getTrendingTerms } from '../../services/getTrendingTerms'
import Category from '../../components/Category/index'

const TrendingSearches = () => {

  const [trendings, setTrendings] = useState([])

  useState(() => {
    getTrendingTerms()
      .then(resp => {
        setTrendings(resp.map(resp => resp.title))
      })
  }, [])

  return (
    <Category name='Trendings' options={trendings} />
  )
}

export default TrendingSearches


