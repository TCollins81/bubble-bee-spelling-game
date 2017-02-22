import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return {
      currentWord: ""
    }
  },


  onFormChange(e){
    var currentWord = e.target.value
    this.setState({
      currentWord: currentWord

    })
    console.log(currentWord)
  },

  onWordSubmit(e){
    e.preventDefault()
    this.props.onWordSubmit(this.state.currentWord)

    console.log(this.props.words)
  },
  render() {
    return (
      <div id="clouds">
        <img src="styles/Bubble-Bee.png" alt="" className="enter-words-Image"/>
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
              <span>ENTER A LIST OF WORDS FOR GAME BELOW
              </span>
            </div>
            <div className="content">
              <form onSubmit={this.onWordSubmit}>
                <input onChange={ this.onFormChange } ref= "words" className="input_username" name="words" placeholder="Enter Words Here" type="text"/>
                <input className="addButton" onClick={ this.onWordSubmit } type="submit" value="add"/>
              </form>

              <article className="wordsDiv">
                {
                  this.props.words.map((word, i)=>{
                    return(
                      <p key={i} className="returnedWord">{word}</p>
                    )
                  })
                }
              </article>
              <div
                className="pass_icon">
              </div>
            </div>
            <div className="footer">
              <Link to={`${this.props.words}/game`}
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
