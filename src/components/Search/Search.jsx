import { useState } from 'react';
import './Search.css'

// eslint-disable-next-line react/prop-types
export const Search = ({ onSubmit }) => {

  const [keyword, setKeyword] = useState('')


  const handleOnChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (!keyword) return

    onSubmit({ keyword })
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <button className='button-submit' type='submit'>Buscar</button>
      <input type="text" value={keyword} onChange={handleOnChange} placeholder='search a gif here' />
    </form>
  )
}

