import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

test('renders a title', () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <Navigation />
    </MemoryRouter>
  )
  const titleElement = screen.getByText(/Github Search/)
  expect(titleElement).toBeInTheDocument()
})
