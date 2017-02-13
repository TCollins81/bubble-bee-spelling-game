import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    console.log("What page is this")
    return (
      <div id="clouds">
        <img src="styles/teachers-rule.png" alt="" className="teachers-rule-Image"/>
      	<div className="cloud x1"></div>
      	<div className="cloud x2"></div>
      	<div className="cloud x3"></div>
      	<div className="cloud x4"></div>
      	<div className="cloud x5"></div>
          <div>
            <section id="login_wrapper">
              <form name="login_form"
                    className="login_form"
                    action=""
                    method="post">
                <div className="header">
                  <h1>Register Here!</h1>
                  <span>Teachers enter last name and grade level
                    <br /> (Ex: SmithFirstGrade)
                  </span>
                </div>
                <div className="content">
                  <input
                    className="input_username"
                    name="username"
                    placeholder="Username"
                    type="text"/>
                  <div className="user_icon">
                    </div>
                  <input
                    name="password"
                    type="password"
                    className="input_password"
                    placeholder="Password"/>
                <div
                    className="pass_icon">
                  </div>
                </div>
                <div className="footer">
                  <Link to="/teacher"
                      className="teachers-unite"
                      name="submit"
                      value="Register"
                      type="submit">Teachers Unite!</Link>
                </div>
              </form>
            </section>
          </div>
      </div>
    )
  }
})
