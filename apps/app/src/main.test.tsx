import { render } from '@testing-library/react'
import { describe, expect, it } from '@jest/globals'

import App from './App'
describe('App', () => {
  it('renders', () => {
    const { getByText } = render(<App />)
    expect(getByText('Hello World')).toEqual({})
  })
})
