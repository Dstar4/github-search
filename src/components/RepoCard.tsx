import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GithubRepository } from '../types/github'

/**
 * RepoCard
 * Renders an individual repo in a card for search results
 */
export default function RepoCard({ repo }: { repo: GithubRepository }) {
  return (
    <Card key={repo.id}>
      <h4 style={{ overflowWrap: 'anywhere' }}>{repo.full_name.toLocaleUpperCase()}</h4>
      <p>{repo.description}</p>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Language: {repo.language}</p>
      <Link to={{ pathname: `/search/${repo.id}`, state: { repository: repo } }}>View</Link>
    </Card>
  )
}

const Card = styled.article`
  background: var(--white);
  width: 95%;
  max-height: 205px;
  margin: 10px 0;
  padding: 10px;
  transition: 0.3s;
  border-radius: 14px;
  border: 2px solid var(--darker-grey);
  overflow-wrap: always;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`
