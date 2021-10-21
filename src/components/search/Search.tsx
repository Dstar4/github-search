import { useState } from 'react'
import styled from 'styled-components'
import useSearch from './useSearch'
import SearchResults from '../search-results/SearchResults'
import Filters from '../filters/Filters'
import SearchForm from '../search-form/SearchForm'
import { Switch, Route } from 'react-router-dom'
import Details from '../details/Details'

export interface QueryOptions {
  language: string
  sort: string
}

/**
 * Search
 * Renders the nested routes for the search page and details page.
 * Contains state for the options so the search context is not lost when navigating pages
 */
export default function Search() {
  const [searchText, setSearchText] = useState('')
  const [options, setOptions] = useState({
    sort: 'default',
    language: ''
  })

  const searchQuery = useSearch(searchText, options)

  return (
    <Switch>
      <Route exact path='/search'>
        <div style={{ height: '100%' }}>
          <SearchForm searchText={searchText} setSearchText={setSearchText} />
          <SearchContainer>
            <Filters options={options} setOptions={setOptions} />
            <SearchResults searchQuery={searchQuery} />
          </SearchContainer>
        </div>
      </Route>
      <Route path={`/search/:id`}>
        <Details />
      </Route>
    </Switch>
  )
}

const SearchContainer = styled.div`
  display: flex;
  height: 90%;
  margin-top: 16px;
  border: 2px solid var(--grey);
  border-radius: 14px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
