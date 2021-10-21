import styled from 'styled-components'
import Error from '../Error'
import Loading from '../Loading'
import PaginationBtn from '../PaginationBtn'
import RepoCard from '../RepoCard'

import { GithubRepository, GithubResponse } from '../../types/github'

/**
 * Factory for building the results of a search
 * Contains handlers for loading, error, success, landing, and no results pathways
 */
export default function SearchResults({ searchQuery }: { searchQuery: any }) {
  // Loading
  if (searchQuery.isLoading) {
    return (
      <CenteredContainer>
        <Loading />
      </CenteredContainer>
    )
  }

  // Error
  if (searchQuery.isError) {
    return (
      <CenteredContainer>
        <Error />
      </CenteredContainer>
    )
  }

  // Success
  if (searchQuery.isSuccess && searchQuery.data.pages[0].total_count) {
    return (
      <CardContainer>
        {searchQuery.data.pages.map((page: GithubResponse) => {
          return page.items.map((result: GithubRepository) => (
            <RepoCard key={result.id} repo={result} />
          ))
        })}
        <PaginationBtn query={searchQuery} />
      </CardContainer>
    )
  }

  // No results
  if (searchQuery.isSuccess && !searchQuery.data.pages[0].total_count) {
    return (
      <CenteredContainer>
        <h2>No Results</h2>
        <p>Please try a different search term</p>
      </CenteredContainer>
    )
  }

  // No search submitted
  return (
    <CenteredContainer>
      <h2>Pease enter a search term to get started</h2>
    </CenteredContainer>
  )
}

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 0 14px 14px 0;
  background-color: var(--light-grey);
  overflow-y: scroll;
  width: 100%;
  padding: 16px;
  @media screen and (max-width: 800px) {
    border-radius: 0 0 14px 14px;
    width: inherit;
  }
`

const CenteredContainer = styled(CardContainer)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 800px) {
    height: 100%;
    width: inherit;
  }
`
