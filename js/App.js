import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  getInitialState(){
    return {
      words: []
    }
  },
  onWordSubmit(currentWord){
    var currentWordArray = this.state.words
    this.setState({words:currentWordArray.concat(currentWord)})

    console.log(this.state.words)
  },

  render() {
    return (
      <section>
        <Header />
        { this.props.children && React.cloneElement(this.props.children,
                  { words: this.state.words,
                    onWordSubmit: this.onWordSubmit })}

        <Footer />
      </section>
    )
  }
})
