import React, { Component } from 'react';
import Navbar from './NavBar'
//Css import
import '../style/components/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <Navbar/>
        Login Page
      </div>
    )
  }
}

export default Login;