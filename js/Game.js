import React from 'react'
import { Link } from 'react-router'
import LetterSlots from './letter_slots';


export default React.createClass({
  // FIXME: Make a 'getInitialState' that sets *empty* bubbles array [X]
  // 2 Make a 'componentWillMount' that fills that array with 14 letters (extra credit: *random* letters) [X]
  // 3 use state.bubbles.map() to iterate over array in render: [X]

  getInitialState(){
    return {
      bubbles: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
      word: ""
    }
  },
  componentWillMount(){
    console.log(this.props.words[0])
    this.setState({
      word: this.props.words[0]
    })

    // FIXME: Pick a random word from this.props.words and this.setState({word: <>})
  //   this.setState({
  //     word: ""
  //   })
  },
  onBubbleClick(e){
    console.log("THIS IS A TEST TO SEE SOMETHING")
    var bubbleArray = this.state.bubbles
    //FIXME: What letter bubble was clicked?
    //  1. Log it to console
    //  2. Save to state (this.state.guesses)?
    //  3. Pass this.state.guess to
    console.log("KEY: " + e.target.key)
  },
  getSlots() {
  let letters = this.props.word.split('');
  return letters.map(this.getSlot);
},
  render() {
    return (
      <section className="gamebody">
            <div id="background-wrap">
              {
                this.state.bubbles.map((bubble,i)=>{
                    return(
                      <div key={i} onClick={this.onBubbleClick} className={"bubble xx" + (i+1).toString()}><p onClick={ this.onBubbleClick } className="letter">{bubble}</p></div>
                          )
                  })
              }
            </div>
            <div>
              <div className="cloud x1"></div>
              <div className="cloud x2"></div>
              <div className="cloud x3"></div>
              <div className="cloud x4"></div>
              <div className="cloud x5"></div>
            </div>

            <LetterSlots
              word={this.state.word}
              reveal={this.state.over}
              guesses={this.state.guesses}/>

              <Link to="/teacher"
                  className="back-button"
                  name="submit"
                  value="Register"
                  type="submit">BACK</Link>
      </section>
    )
  }
})
