import React from 'react'
import { render } from '@testing-library/react'
import { create } from 'react-test-renderer'

import Profile from './profile.component'

describe('Profile Component', () => {
  test('Renders', () => {
    const {} = render(<Profile />)
  })
  test('renders My Profile element', () => {
    const { getByText } = render(<Profile />)
    const linkElement = getByText(/My Profile/i)
    expect(linkElement).toBeInTheDocument()
  })
})
