import { useState } from "react";
import { createContext } from "react";


const Context = createContext({})


// eslint-disable-next-line react/prop-types
export const GifsProvider = ({children}) => {

  const [gifs, setGifs] = useState([])

  return(
    <Context.Provider value={{ gifs, setGifs }}>
      {children}
    </Context.Provider>
  )
}

export default Context