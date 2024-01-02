import { ListOfGifs } from '../../components/ListOfGifs'
import { Spinner } from '../../components/Spinner/Spinner';
import { useGifs } from '../../hooks/useGifs'
import PropTypes from 'prop-types';

export const SearchResults = ({ params }) => {
  const { keyword } = params
  const { gifs, loading, loadingNextPage, setPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <>
      {
        loading
          ? <Spinner />
          : <>

            <h1>{decodeURI(keyword)}</h1>
            <ListOfGifs gifs={gifs} />
            <br></br>
          </>
      }
      {
        loadingNextPage ? <Spinner /> : <button onClick={handleNextPage}>Get Next Page</button>
      }

    </>
  )
}

SearchResults.propTypes = {
  params: {
    keyword: PropTypes.string.isRequired
  }
}


