import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UsePrevious from './components/UsePrevious'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/use-previous">usePrevious</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/use-previous">
          <UsePrevious />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
