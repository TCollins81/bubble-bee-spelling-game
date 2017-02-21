import React from 'react'
import { Link } from 'react-router'
// import LetterSlots from './letter_slots';


export default React.createClass({
  getInitialState(){
    return {
      bubbles: [],
      word: "",
      teacherWords: this.props.params.words,
      words:"",
      currentWord: "",
      correctWordBubbles: [],
      randomBubbles: ["a", "t", "c", "d", "e", "o", "g", "h", "i", "j", "k", "g", "m", "n"],
      clickedLetters: [],
      scrambledWord:"",
    }
  },
  componentDidMount(){
    var passedWords = this.state.teacherWords
    var wordsArray = passedWords.toLowerCase().split(",")
    this.setState({words: wordsArray})
    var randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)]
    this.setState({currentWord:randomWord})
    var currentBubbleArray = randomWord.split("")
    this.setState({correctWordBubbles:currentBubbleArray})
    var totalLetters = this.state.randomBubbles
    currentBubbleArray.map( (letter, i) => {
      totalLetters[i] = letter;
    })
    this.setState({bubbles:totalLetters})
    console.log(randomWord);
    // var scrambledWordArray = randomWord.split("");
    // console.log(scrambledWordArray);
    // scrambledWordArray.sort(function(a,b){return 0.5 - Math.random()})
    // console.log(scrambledWordArray);
    // var newlyScrambledWord = scrambledWordArray.join("");
    // console.log(newlyScrambledWord);
    // this.setState({scrambledWord:newlyScrambledWord})
  },

  onBubbleClick(e){
    console.log("THIS IS A TEST TO SEE SOMETHING")
    var currentClickedLetter = e.target.getAttribute("value")
    console.log(currentClickedLetter)
    // if letter is the next letter:
    //  Add it to clickedLetters
    //  Pop the bubble
    // else:
    //  ???

    var clickedLetters = this.state.clickedLetters
    if (currentClickedLetter == this.state.correctWordBubbles[clickedLetters.length]) {
      clickedLetters = clickedLetters.concat(currentClickedLetter)
      console.log("CL: " + clickedLetters.length)
      this.setState({clickedLetters: clickedLetters})
      console.log(clickedLetters);
      console.log(this.state.correctWordBubbles);
      if (this.state.correctWordBubbles.join('') === clickedLetters.join('')) {
        // AKA: whole word guessed
        this.refs.correct.className="correct"
        this.refs.letterDisplay.className="hidden"
      }
    }
  },
  next(){
    location.reload()
  },

  render() {
    return (
      <section className="gameBody">
            <div id="background-wrap">
              {
                this.state.bubbles.map((bubble,i)=>{
                    return(
                      <div key={i}
                        onClick={ this.onBubbleClick }
                        value={bubble}
                        ref="letterBubble"
                        className={"bubble xx" + (i+1).toString()}>
                        <p
                          className="letter">{bubble}</p></div>
                          )
                  })
              }
            </div>
            <div>
              <h2 className="letterHint">{this.state.currentWord}</h2>
              <h2 className="letterDisplay" ref="letterDisplay">{this.state.clickedLetters}</h2>
              <h2 className="hidden" ref="correct">CORRECT!</h2>
            </div>
            <div>
              <div className="cloud x1"></div>
              <div className="cloud x2"></div>
              <div className="cloud x3"></div>
              <div className="cloud x4"></div>
              <div className="cloud x5"></div>
            </div>


              <Link to="/teacher"
                  className="back-button"
                  name="submit"
                  value="Register"
                  type="submit">BACK</Link>
                <button
                  onClick={this.next}
                  className="back-button"
                  name="submit"
                  value="Register"
                  type="submit">NEXT</button>
      </section>
    )
  }
  // <LetterSlots
  //   word={this.state.word}
  //   reveal={this.state.over}
  //   guesses={this.state.guesses}/>

})
