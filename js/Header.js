import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header className="title">
        <nav className="links">
          <img src=".public/styles/Bubble-Bee.png" alt="" className="Bubble-Bee-Image"/>
          <Link to="/" className="home">Home</Link>
        </nav>
      </header>
    )
  }
})


// <Link to="/post" className="post">Blog</Link>
// <Link to="/projects" className="projects">Projects</Link>
// <Link to="/resume" className="resume">Resume</Link>
