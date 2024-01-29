import Gif  from './Gif';

export const ListOfGifs = ({ gifs = [] }) => {


  return (
    <div className='gifts__container'>
      {
        gifs.length === 0 ? <h1>No hay resultados</h1> :
          gifs.map(({ id, title, image }) => (
            <Gif
              key={id}
              id={id}
              title={title}
              image={image}
            />
          ))
      }
    </div>

  )
}