import { useState } from 'react';

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
      <input type="text" value={keyword} onChange={handleOnChange} />
      <button type='submit'>Buscar</button>
    </form>
  )
}

