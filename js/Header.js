import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header className="title">
        <h1 className="title"> Bubble-Bee </h1>
        <nav className="links">
          <Link to="/" className="home">Home</Link>

        </nav>
      </header>
    )
  }
})


// <Link to="/post" className="post">Blog</Link>
// <Link to="/projects" className="projects">Projects</Link>
// <Link to="/resume" className="resume">Resume</Link>
