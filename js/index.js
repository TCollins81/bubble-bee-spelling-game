// Bringing in the 'react' code form our `node_modules`
import React from 'react'
// Bring in JUST the 'render' function from `react-dom`
//   This is an EXPLICIT way to keep our Bundled js file smaller/more efficient
import { render } from 'react-dom'
// Main is OUR js file that is located in the same folder as this file.
//  Please remember to load our custom code AFTER React and its dependencies
import Main from './main'

// Render is a method we imported up on line 5
//  It takes two argument:
//    1) What element to add to the page
//      we are using JSX...
//      JSX is a way for us to have the best parts of HTML IN OUR JAVASCRIPT
//        1) SYNTAX HIGHLIGHTING
//        2) Attributes and values (XML syntax)
//        3) Variable interpolation ex `<Main />`
//    2) Where on the page to add said element
render(
  ( <Main /> ),
  document.getElementById('app')
)
