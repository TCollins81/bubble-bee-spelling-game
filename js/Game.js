import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  // FIXME: Make a 'getInitialState' that sets *empty* bubbles array [x]
  // 2) Make a 'componentWillMount' that fills that array with 14 letters (extra credit: *random* letters) [x]
  // 3) use state.bubbles.map() to iterate over array in render:

  getInitialState(){
    return {
      bubbles: [],
      word: ""
    }
  },
  componentWillMount(){
    console.log(this.props.words)
    var randomword = items[Math.floor(Math.random()*items.length)]
    this.setState({
      bubbles: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]
    })
  },
  onBubbleClick(e){
    console.log("THIS IS A TEST TO SEE SOMETHING")
    //e.preventDefault()
    var bubbleArray = this.state.bubbles

    console.log("KEY: " + e.target.key)
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

      </section>
    )
  }
})
