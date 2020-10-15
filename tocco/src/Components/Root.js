import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'


// Import Redux containers (allow Redux state to be in React components)
import Tocco from './Tocco'

// ES6 Class
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
class Root extends Component {

  render() {
    return (

      // Using React Router allows us to easily implement "deep linking" directly
      // to a desired section of the Shop (categories, lists, lists of lists, etc).
      <HashRouter>
        {/* <React.StrictMode> */}
          <Route path="/Login" component={ ShopContainer } />
        {/* </React.StrictMode> */}
      </HashRouter>
    );
  }
}

export default Root;
