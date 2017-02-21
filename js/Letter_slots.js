import React from 'react'
import { Link } from 'react-router'

var $ = require('jQuery')

export default React.createClass({

  getSlot(letter, index) {
    let contents = " "
    // FIXME: Once this.props.guess is set in Game.js...
    //  Update this function to fill in 'contents' with guessed letter
    //  if letter is in this.props.guesses... $.inArray (google 'jquery inarray')
    //   1. Set contents to that letter
    //   2. Set a class for 'guessed'
    return (
      <div className="letter_slot"
        key={index}>
        {contents}
      </div>
    );
  },

  getSlots() {
    let letters = this.props.word.split('');
    return letters.map(this.getSlot);
  },

  render() {
    return (
      <div className='letter_slots'>
        {this.getSlots()}
      </div>
    );
  }

});
