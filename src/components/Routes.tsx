import { Switch, Route, Redirect } from 'react-router-dom'
import Search from './search/Search'

/**
 * Top Level Application Routing
 */
export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/search' />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
    </Switch>
  )
}
