import React from 'react'
import ProfileStats from './profile-stats.component'
import { render } from '@testing-library/react'

describe('ProfileStats', () => {
  test('Renders', () => {
    const {} = render(<ProfileStats />)
  })
  test('renders workout app element', () => {
    const { getByText } = render(<ProfileStats />)
    const linkElement = getByText(/profile stats component/i)
    expect(linkElement).toBeInTheDocument()
  })
})
