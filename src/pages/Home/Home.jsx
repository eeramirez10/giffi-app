import './Home.css'
import { useState } from 'react';
import { useLocation } from "wouter";
import { ListOfGifs } from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';
import TrendingSearches from '../TrendingSearches/TrendingSearches';


export const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [, setLocation] = useLocation()
  const { gifs } = useGifs()

  const handleOnChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (!keyword) return

    setLocation(`/search/${keyword}`)

  }


  return (
    <div className='home__container'>
      <h3 className='home__title'>Los gifs mas populares</h3>

      <form onSubmit={handleOnSubmit}>
        <input type="text" value={keyword} onChange={handleOnChange} />
        <button type='submit'>Buscar</button>
      </form>

      <h3 className='home__title'>Ultima Busqueda</h3>

      <ListOfGifs gifs={gifs} />

      <TrendingSearches />



      {/* <ul className='home__list'>

        {
          POPULAR_GIFS.map(popular => (
            <li key={popular}>

              <Link to={`/search/${popular}`}>
                <a className='link'>Gifs de {popular}</a>
              </Link>
            </li>

          ))
        }

      </ul> */}


    </div>
  )
}
