import { screen, render, getByText } from '@testing-library/react'
import App from './App'
describe('App', () => {
  it('renders', () => {
    render(<App />)
    expect(screen.getByAltText('Hello World')).toBeInTheDocument()
  })
})
