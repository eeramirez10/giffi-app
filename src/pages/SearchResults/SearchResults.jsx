import { ListOfGifs } from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import PropTypes from 'prop-types';

export const SearchResults = ({ params }) => {


  const { keyword } = params

  const { gifs } = useGifs({ keyword })

  return (
    <>
      <ListOfGifs gifs={gifs} />
    </>
  )
}

SearchResults.propTypes = {
  params: {
    keyword: PropTypes.string.isRequired
  }
}


