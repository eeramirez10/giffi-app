import PropTypes from 'prop-types';
import { useLocation } from 'wouter'

export const Gif = ({ id, image, title }) => {

  const [,setLocation] = useLocation()

  return (
    <div 
      className='gif__container'
      onClick={() =>{
        setLocation(`/detail/${id}`)
      }}
    >
      <img src={image} alt={title} className='gif__image' />
      <h4 className='gif__title'>{title}</h4>
      <small className='gif__id'>{id}</small>
    </div>
  )
}

Gif.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
