import styled from '@emotion/styled'
import { Link } from 'wouter'

export const CategoryTitle = styled.h3`
  color: var(--theme-body-txt);
  font-weight: bold;



`

export const CategoryList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  min-width: 300px;


`

const generateMultiColorCategory = props => {
  const NEED_WHITE_COLOR = [3, 4]
  const colorIndex = props.index % 5 + 1
  const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
  const colorText = needWhite ? 'white' : 'var(--theme-body-bg)'

  return `
    background-color: var(--brand-color_${colorIndex});
    color: ${colorText};`
}

export const CategoryListItem = styled.li`
	list-style: none;
	padding: 0.3rem;
	transition: ease-in 0.1s ;
  margin: 0 .2rem ;
  &:hover{
    transform: scale(1.1);
  }
  
  ${generateMultiColorCategory}
`

export const CategoryLink = styled(Link)`
  color: inherit;

  text-decoration: none;
  font-size: .9em;
  transition: color ease-in 0.1s;
  background: #6643b5 ;
  padding:0.2rem .7rem;
  border-radius: 1.5rem;

`