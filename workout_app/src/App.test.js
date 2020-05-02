import React from 'react'
import Header from './components/Header/Header.component.jsx'
import { render } from '@testing-library/react'
import { create } from 'react-test-renderer'

import App from './App'

describe('App', () => {
  test('Renders', () => {
    const {} = render(<App />)
  })
  test('renders workout app element', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/workout app/i)
    expect(linkElement).toBeInTheDocument()
  })
})
