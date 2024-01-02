import { ListOfGifs } from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import PropTypes from 'prop-types';

export const SearchResults = ({ params }) => {


  const { keyword } = params

  const { gifs } = useGifs({ keyword })

  return (
    <>
      <h1>{decodeURI(keyword)}</h1>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

SearchResults.propTypes = {
  params: {
    keyword: PropTypes.string.isRequired
  }
}


