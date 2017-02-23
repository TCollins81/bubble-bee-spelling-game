import React from 'react'
import { Link } from 'react-router'
// [x] - Create input box for user name and password
// [x] - Create login for users
// [x] - Create registration for new users
// [x] - Create link for registration to teachers portal (new users page)
export default React.createClass({
  render() {
    return (
      <div id="clouds">
        <img src="styles/Bubble-Bee.png" alt="" className="Bubble-Bee-Image"/>
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
                  <h1>ENTER LOGIN ID</h1>
                  <span>Register for new LoginID
                  </span>
                </div>
                <div className="content">
                  <input
                    className="input_username"
                    name="username"
                    placeholder="LoginID"
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
                          className="#"
                          name="#"
                          value="#"
                          type="#">
                      <input
                        className="button"
                        name="submit"
                        value="Play Game"
                        type="text"/>
                    </Link>
                    <Link to="/register"
                      className="register"
                      name="submit"
                      value="Register"
                      type="submit">Register
                    </Link>
                </div>
              </form>
            </section>
          </div>


      </div>
    )
  }
})
