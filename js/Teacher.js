import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div id="clouds">
        <img src="styles/enter-words.png" alt="" className="enter-words-Image"/>
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
              <h1>Word Input Form</h1>
              <span>Teachers enter list of words <br /> this grade level struggles with most.
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
              <input
                className="button"
                name="submit"
                value="Login"
                type="text"/>


              <Link to="/game"
                  className="register"
                  name="submit"
                  value="Register"
                  type="submit">Teachers Register</Link>

            </div>
          </form>
        </section>
      </div>
    </div>

    )
  }
})
