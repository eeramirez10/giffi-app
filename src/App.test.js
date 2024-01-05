/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders text Los gifs mas populares ', () => {

  render(<App/>)
  const linkElement = screen.getByText('Los gifs mas populares')
  expect(linkElement).toBeInTheDocument()
})