import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Filters from './Filters'
import { QueryClient, QueryClientProvider } from 'react-query'
import userEvent from '@testing-library/user-event'
const queryClient = new QueryClient()

const options = { language: '', sort: 'default' }
const setOptions = jest.fn()

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[{ pathname: '/search' }]}>
        <Filters options={options} setOptions={setOptions} />
      </MemoryRouter>
    </QueryClientProvider>
  )
})
test('renders sort options', () => {
  userEvent.selectOptions(
    screen.getByLabelText(/Sort Results/),
    screen.getByRole('option', { name: 'Stars' })
  )
  expect(setOptions).toBeCalledTimes(1)
  expect(setOptions).toBeCalledWith({ language: '', sort: 'stars' })
})
test('renders filter options', () => {
  userEvent.selectOptions(
    screen.getByLabelText(/Filter/),
    screen.getByRole('option', { name: 'C++' })
  )
  expect(setOptions).toBeCalledTimes(1)
  expect(setOptions).toBeCalledWith({ language: 'C++', sort: 'default' })
})
