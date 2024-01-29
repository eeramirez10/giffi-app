import { ListOfGifs } from '../../components/ListOfGifs';
import { useGifs } from '../../hooks/useGifs';
import TrendingSearches from '../TrendingSearches/index';
import Search  from '../../components/Search/index';
import { useLocation } from "wouter";
import './Home.css'


export const Home = () => {
  const [, setLocation] = useLocation()

  const { gifs } = useGifs()

  const handleSubmit = ({ keyword }) => {
    setLocation(`/search/${keyword}`)
  }

  return (
    <div className='home__container'>
      <h3 className='home__title'>Los gifs mas populares</h3>

      <Search onSubmit={handleSubmit} />

      <h3 className='home__title'>Ultima Busqueda</h3>

      <section className='home__content'>

        <ListOfGifs gifs={gifs} />

        <TrendingSearches />

      </section>





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
