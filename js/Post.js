import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <nav className="blogNav"><a href="https://medium.com/@dleal3" className="blogNav">Click for More</a></nav>

        <a href="https://medium.com/@dleal3/the-only-way-to-make-progress-is-to-get-lost-in-the-process-183cd93d7e9b#.4vsvgk402">
          <img src="styles/image_for_blog.png" alt="" className="blogImage"/></a>
        <a href="https://medium.com/@dleal3/time-away-from-the-usual-767601787f79#.u88q37hb8">
          <img src="styles/timeaway.png" alt="" className="blogImage"/></a>
        <a href="https://medium.com/@dleal3/time-away-from-the-usual-767601787f79#.u88q37hb8">
          <img src="styles/function.png" alt="" className="blogImage"/></a>

      </section>
    )
  }
})
