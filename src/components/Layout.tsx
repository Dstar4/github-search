import styled from 'styled-components'
import Navigation from './navigation/Navigation'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <Page>
      <Navigation />
      <Container>{children}</Container>
    </Page>
  )
}

const Container = styled.div`
  background: var(--grey);
  max-width: 2400px;
  margin: auto;
  padding: 20px;
  height: 95%;
`
const Page = styled.div`
  height: 100%;
`
