import { useState } from 'react'
import { getTrendingTerms } from '../../services/getTrendingTerms'
import Category from '../../components/Category/index'
import { useNearScreen } from '../../hooks/useNearScreen'

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

export default function LazyTrending() {
 
  const { show, ref } = useNearScreen()


  return (
    <div ref={ref}>
      {
        show ? <TrendingSearches /> : null
      }
    </div>
  )
}
