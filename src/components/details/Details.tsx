import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Column, Row } from '../Flex'
import BackIcon from '../../images/arrow-back-outline.svg'
import StarIcon from '../../images/star.svg'
import { GithubRepository } from '../../types/github'

/**
 * Details Page
 * Renders A focused view of the details of an individual repository
 */
export default function Details() {
  const { state } = useLocation<{ repository: GithubRepository }>()
  const history = useHistory()
  const { repository } = state

  return (
    <DetailsWrapper>
      <TitleRow>
        <BackButton onClick={() => history.goBack()}>
          <img src={BackIcon} alt='Back Button with arrow' />
        </BackButton>
        <h2>{repository.name.toUpperCase()}</h2>
        <Row>
          <StarImage src={StarIcon} alt='Star' />
          <p style={{ margin: '0 5px' }}>Stars:</p>
          {repository.stargazers_count}
        </Row>
      </TitleRow>
      <DetailsRow>
        <Column>
          <p>{repository.description}</p>
          <p>Language: {repository.language}</p>
          <a target='_blank' href={repository.html_url} rel='noopener noreferrer'>
            <p> {repository.html_url}</p>
          </a>
          <p>Issues: {repository.open_issues_count}</p>
          <p>License: {repository.license?.name}</p>
          <p>
            Owner:
            <a target='_blank' href={repository.owner.html_url} rel='noopener noreferrer'>
              {repository.owner.login}
            </a>
          </p>
        </Column>
        <OwnerAvatar src={repository.owner.avatar_url} alt="User's github avatar" />
      </DetailsRow>
    </DetailsWrapper>
  )
}

const TitleRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  overflow-wrap: anywhere;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: start;
  }
`

const DetailsRow = styled(Row)`
  margin-top: 32px;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: break-word;
  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: start;
    justify-content: space-between;
  }
`

const OwnerAvatar = styled.img`
  max-height: 300px;
  max-width: 300px;
  object-fit: contain;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    /* max-height: 100%; */
    max-width: 100%;
  }
  @media screen and (max-width: 400px) {
    /* max-height: 100%; */
    max-width: 100%;
  }
`

const StarImage = styled.img`
  width: 20px;
`
const DetailsWrapper = styled(Column)`
  border-radius: 14px;
  padding: 24px;
  padding-bottom: 60px;
  background-color: var(--light-grey);
  height: 90%;
`

const BackButton = styled.button`
  background: transparent;
  border: 0;

  img {
    height: 20px;
    width: 20px;
    color: var(--dark-grey);
  }
  &:hover {
    cursor: pointer;
  }
`
