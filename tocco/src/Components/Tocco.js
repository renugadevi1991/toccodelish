import React, { Component } from 'react';
import Home from './Home.js';
import Login from './Login'

import { Switch, Route, Link, BrowserRouter, HashRouter } from 'react-router-dom'

import '../style/components/Tocco.css'

class Tocco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {

    return(
      <div>
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} />
            </Switch>
        </main>
      </div>
    )
  }
}

export default Tocco;
