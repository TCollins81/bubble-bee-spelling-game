import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return{
      words: []
    }
  },
  onFormChange(e) {
    var newWord = e.target.value
  },
  onWordSubmit(){
    this.setState({
      words: newWord
    })
  },
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
          <div
                name="login_form"
                className="login_form"
                action=""
                method="post">
            <div className="header">
              <h1>Word Input Form</h1>
              <span>Teachers enter list of words <br /> this grade level struggles with most.
              </span>
            </div>
            <div className="content">
              <form>
                <input  ref= "wordInput" onChange={this.onFormChange}
                  className="input_username"
                  name="teacher words"
                  placeholder="Input words"
                  type="text"/>

                <ul>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                  <li className="words_list"><input className="words_input_box"/></li>
                </ul>


              </form>
              <div
                className="pass_icon">
              </div>
            </div>

            <div className="footer">



              <Link to="/game"
                  className="teachers-unite"
                  name="submit"
                  value="Register"
                  type="submit">PLAY GAME</Link>

            </div>
          </div>
        </section>
      </div>
    </div>

    )
  }
})
