import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import App from './App'
import Home from './Home'
import Resume from './Resume'
import Post from './Post'
import Projects from './Projects'

render(
  (
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={ Home }/>
        <Route path="/resume" component={ Resume }/>
        <Route path="/post" component={ Post }/>
        <Route path="projects" component={ Projects }/>
      </Route>
    </Router>
  ),
  document.getElementById('app')
)
