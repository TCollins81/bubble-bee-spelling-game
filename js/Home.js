import React from 'react'
import { Link } from 'react-router'

// Created form for login for teachers as they are going to need to login seperately so they can go to the teacher portal page where they will be prompted to enter words and grade level for game

// Created form for login for students as they are going to login with the i.d that the teacher provides them
export default React.createClass({
  render() {
    return (
      <form>
        <input className="teacher_login" placeholder=" Teacher Sign In" type="text"/>
        <button className="submit_button" type="submit"> Login </button>
      </form>

      <form>
        <input className="student_login" placeholder=" Student Sign In" type="text"/>
        <button className="submit_button" type="submit"> Login </button>
      </form>
    )
  }
})
