import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <form>
        <input className="teacher_login" placeholder=" Teacher Sign In" type="text"/>
        <button className="submit_button" type="submit"> Login </button>
      </form>
    )
  }
})
