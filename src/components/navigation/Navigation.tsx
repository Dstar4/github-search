import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navigation() {
  return (
    <NavPanel>
      <AppName>
        <Link to='/search'>Github Search</Link>
      </AppName>
    </NavPanel>
  )
}

const NavPanel = styled.header`
  background: var(--darker-grey);
  padding: 16px;
`

const AppName = styled.h1`
  margin: 0;
  a {
    color: var(--light-grey);
    text-decoration: none;
  }
`
