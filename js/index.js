import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import App from './App'
import Home from './Home'
import Register from './Register'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Home }/>
        <Route path="/register" component={ Register } />
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
