import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UsePrevious from './components/UsePrevious'
import UseBeforeUnload from './components/UseBeforeUnload'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/use-previous">usePrevious</Link>
        </li>
        <li>
          <Link to="/use-before-unload">useBeforeUnload</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/use-previous">
          <UsePrevious />
        </Route>
        <Route path="/use-before-unload">
          <UseBeforeUnload />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
