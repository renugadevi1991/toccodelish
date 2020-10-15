import React, { Component } from 'react';
import Toccologo from '../style/assets/images/tocco-logo.png';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //show: false // Initially hidden, animate in
    };
  }

  render() {
    return(
      <div>
          <section class="menu menu2 cid-sbd1AlNAZS" once="menu" id="menu2-4">
    
            <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div class="container">
                    <div class="navbar-brand">
                        <span class="navbar-logo">
                            <a href="https://mobiri.se">
                                <img src={Toccologo} alt="Toccologo" style={{height: '3rem'}}/>
                            </a>
                        </span>
                        
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="/">
                                    Home</a></li></ul>
                        
                    </div>
                </div>
            </nav>
        </section>
      </div>
    )
  }
}

export default NavBar;