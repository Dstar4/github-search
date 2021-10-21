import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import SearchResults from './SearchResults'
import { mockRepo } from '../../helpers/testing/mockData'

const queryClient = new QueryClient()

test('it renders a loading screen', () => {
  const query = {
    isLoading: true,
    isError: false,
    isSuccess: false,
    data: { pages: [{ total_count: 0, items: [], is_partial: false }] }
  }
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: `/search/` }]}>
        <SearchResults searchQuery={query} />
      </MemoryRouter>
    </QueryClientProvider>
  )
  const text = screen.getByText(/Loading/)
  expect(text).toBeInTheDocument()
})
test('it renders an error screen', () => {
  const query = {
    isLoading: false,
    isError: true,
    isSuccess: false,
    data: { pages: [{ total_count: 0, items: [], is_partial: false }] }
  }
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: `/search/` }]}>
        <SearchResults searchQuery={query} />
      </MemoryRouter>
    </QueryClientProvider>
  )
  const text = screen.getByText(/An error occurred/)
  expect(text).toBeInTheDocument()
})
test('it renders prompt to get started', () => {
  const query = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: []
  }
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: `/search/` }]}>
        <SearchResults searchQuery={query} />
      </MemoryRouter>
    </QueryClientProvider>
  )
  const text = screen.getByText(/Pease enter a search term to get started/)
  expect(text).toBeInTheDocument()
})

test('it renders a no results message', () => {
  const query = {
    isLoading: false,
    isError: false,
    isSuccess: true,
    data: { pages: [{ total_count: 0, items: [], is_partial: false }] }
  }
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: `/search/` }]}>
        <SearchResults searchQuery={query} />
      </MemoryRouter>
    </QueryClientProvider>
  )
  const text = screen.getByText(/No Results/)
  expect(text).toBeInTheDocument()
})
test('it renders data when successful', () => {
  const query = {
    isLoading: false,
    isError: false,
    isSuccess: true,
    data: { pages: [{ total_count: 1, items: [mockRepo], is_partial: false }] }
  }
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: `/search/` }]}>
        <SearchResults searchQuery={query} />
      </MemoryRouter>
    </QueryClientProvider>
  )
  const text = screen.getByText(mockRepo.description)
  expect(text).toBeInTheDocument()
})
