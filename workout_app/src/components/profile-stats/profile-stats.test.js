import React from 'react'
import ProfileStats from './profile-stats.component'
import { render } from '@testing-library/react'

describe('ProfileStats', () => {
  test('Renders', () => {
    render(<ProfileStats />)
  })
  test('renders workout app element', () => {
    const { getByText } = render(<ProfileStats />)
    const linkElement = getByText(/profile stats/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element Name', () => {
    const { getByText } = render(<ProfileStats name="name" />)
    const linkElement = getByText(/name/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element Age', () => {
    const { getByText } = render(<ProfileStats age="age" />)
    const linkElement = getByText(/Age/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element Height', () => {
    const { getByText } = render(<ProfileStats height="height" />)
    const linkElement = getByText(/Height/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element Sex', () => {
    const { getByText } = render(<ProfileStats sex="sex" />)
    const linkElement = getByText(/Sex/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element Weight', () => {
    const { getByText } = render(<ProfileStats weight="weight" />)
    const linkElement = getByText(/Weight/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element goals', () => {
    const { getByText } = render(<ProfileStats currentGoal="current goal:" />)
    const linkElement = getByText(/Current Goal:/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders workout app element goals', () => {
    const { getByText } = render(<ProfileStats onTrack="on track?" />)
    const linkElement = getByText(/on track?/i)
    expect(linkElement).toBeInTheDocument()
  })
})
