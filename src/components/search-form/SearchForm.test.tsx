import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchForm from './SearchForm'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const searchText = 'test'

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: '/search' }]}>
        <SearchForm searchText={searchText} />
      </MemoryRouter>
    </QueryClientProvider>
  )
})
test('renders a search input', () => {
  const searchInput = screen.getByLabelText(/Search/)
  expect(searchInput).toBeInTheDocument()
})
test('renders an input placeholder', () => {
  const searchInput = screen.getByPlaceholderText(/React/)
  expect(searchInput).toBeInTheDocument()
})
test('responds to user input accurately', () => {
  const searchInput = screen.getByLabelText(/Search/)
  const inputText = 'react-testing-library'
  fireEvent.change(searchInput, { target: { value: inputText } })
  expect(searchInput).toHaveValue(inputText)
})