import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import Services from './Services.js'
import About from './About.js'
import MenuCard from './MenuCard.js'
import Feedback from './Feedback.js'
import Contact from './Contact'
import FollowUs from './FollowUs'
import Footer from './Footer'
import Login from './Login'

import { Switch, Route, Link, BrowserRouter, HashRouter } from 'react-router-dom'

import Toccologo from '../style/assets/images/tocco-logo.png';

//import { HashLink as Link, Router } from 'react-router-hash-link';

import '../style/components/Home.css'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
    this.scrollToNode = this.scrollToNode.bind(this);
  }

  scrollToNode(node) {
    node.scrollIntoView({ behavior: 'smooth' });
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
                  <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
                    <li class="nav-item">
                      <a class="nav-link link text-black text-primary display-4" onClick={() => this.scrollToNode(this.Header)}>Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link link text-black text-primary display-4" onClick={() => this.scrollToNode(this.Services)}>Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link link text-black text-primary display-4" onClick={() => this.scrollToNode(this.About)}>About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link link text-black text-primary display-4" onClick={() => this.scrollToNode(this.MenuCard)}>Menu</a>
                    </li>
                    
                    <li class="nav-item">
                      <a class="nav-link link text-black text-primary display-4" onClick={() => this.scrollToNode(this.Contact)}>Contact</a>
                    </li>
                    
                  </ul>
              </div>
            </div>
          </nav>
        </section>
        
        <div ref={(node) => this.Header = node}><Header/></div>
        <div ref={(node) => this.Services = node}><Services/></div>
        <div ref={(node) => this.About = node}><About/></div>
        <div ref={(node) => this.MenuCard = node}><MenuCard/></div>
        <div ref={(node) => this.Contact = node}><Contact/></div>
        <FollowUs/>
        <Footer/>
        
      </div>
    )
  }
}

export default Home;
//<NavBar/>

/*

login and blog : add in next release
<li class="nav-item">
                      <a class="nav-link link text-black text-primary display-4" onClick={() => this.scrollToNode(this.Contact)}>Blog</a>
                    </li>
<li class="nav-item">
                      <a class="nav-link link text-black text-primary display-4" href="/login">Log In</a>
                    </li>
*/