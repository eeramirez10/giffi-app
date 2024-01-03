/* eslint-disable react-hooks/exhaustive-deps */
import { ListOfGifs } from '../../components/ListOfGifs'
import { Spinner } from '../../components/Spinner/Spinner';
import { useGifs } from '../../hooks/useGifs'
import PropTypes from 'prop-types';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useEffect } from 'react';
import debounce from 'just-debounce-it'
import { useCallback } from 'react';


export const SearchResults = ({ params }) => {
  const { keyword } = params
  const { gifs, loading, loadingNextPage, setPage } = useGifs({ keyword })
  const { show, ref } = useNearScreen({ once: false })


  // const handleNextPage = () => {
  //   setPage(prevPage => prevPage + 1)
  // }

  

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
    console.log('next page')
  }

  const debounceHandleNextPage = useCallback(debounce(() => handleNextPage(), 1000),[]) 

  useEffect(() => {
    console.log(show)
    if (show) debounceHandleNextPage()

  }, [show, debounceHandleNextPage])



  return (
    <>
      {
        loading
          ? <Spinner />
          : <>

            <h1>{decodeURI(keyword)}</h1>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={ref}></div>
            <br></br>
          </>
      }
      {
        loadingNextPage && <Spinner />
      }

    </>
  )
}

SearchResults.propTypes = {
  params: {
    keyword: PropTypes.string.isRequired
  }
}


