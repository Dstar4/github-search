import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Details from './Details'
import { QueryClient, QueryClientProvider } from 'react-query'
import {mockRepo} from '../../helpers/testing/mockData'

const queryClient = new QueryClient()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter
        initialEntries={[{ pathname: `/search/${mockRepo.id}`, state: { repository: mockRepo } }]}>
        <Details />
      </MemoryRouter>
    </QueryClientProvider>
  )
})
test('it renders repository information', () => {
  let description = screen.getByText(mockRepo.description)
  expect(description).toBeInTheDocument()
  let name = screen.getByText(mockRepo.name.toUpperCase())
  expect(name).toBeInTheDocument()
  let url = screen.getByText(mockRepo.html_url)
  expect(url).toBeInTheDocument()
})
