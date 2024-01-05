import { memo } from 'react';
import { useLocation } from 'wouter'

const Gif = ({ id, image, title }) => {

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
      {/* <small className='gif__id'>{id}</small> */}
    </div>
  )
}

export default memo(Gif)
