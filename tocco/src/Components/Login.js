import React, { Component } from 'react';
import Navbar from './NavBar'
//Image Import
import LoginImg from '../style/assets/images/Login.jpg';
//Css import
import '../style/components/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!',e.target);
  };

  render() {
    
    return(
      <div>
        <Navbar/>
        <form onSubmit={this.handleOnSubmit}>
          <Input type='text' name='username' placeholder='username' />
          <Input type='password' name='password' placeholder='password' />
          <button> Sign In</button>
        </form>
        <section class="form4 cid-sbdknSrCvT mbr-fullscreen" id="form4-g">
          <div class="container">
              <div class="row content-wrapper justify-content-center">
                  <div class="col-lg-3 offset-lg-1 mbr-form" data-form-type="formoid">
                      <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name"><input type="hidden" name="email" data-form-email="true" value="gOUmvTFKNrmd8bbeT3CXij4HXnAd+dw/7WqRNhAQAYOhjTqi/ngm+GSjd8ocP4RqT7KuHK3EJB1Pb1oNVNC1xVTp431DG5Z+0+7jMNkhWH1BxLAvFiHK9HL4hA2874/P"/>
                          <div class="">
                              <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                                  out the form!</div>
                              <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">Oops...! some
                                  problem!</div>
                          </div>
                          <div class="dragArea row">
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                  <h1 class="mbr-section-title mb-4 display-2"><strong>Log In</strong></h1>
                              </div>
                              <div class="col-lg-12 col-md-12 col-sm-12">
                                  <p class="mbr-text mbr-fonts-style mb-4 display-7"></p>
                              </div>
                              <div class="col-lg-12 col-md col-12 form-group" data-for="name">
                                  <input type="text" name="name" placeholder="User ID" data-form-field="name" class="form-control" value="" id="name-form4-g"/>
                              </div>
                              <div class="col-lg-12 col-md col-12 form-group" data-for="email">
                                  <input type="email" name="email" placeholder="Password" data-form-field="email" class="form-control" value="" id="email-form4-g"/>
                              </div>
                              <div class="col-12 col-md-auto mbr-section-btn"><button type="submit" class="btn btn-secondary display-4">Log In</button></div>
                          </div>
                      </form>
                  </div>
                  <div class="col-lg-7 offset-lg-1 col-12">
                      <div class="image-wrapper">
                          <img class="w-100" src={LoginImg} alt="Mobirise"/>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }
}

// Generic input field
class Input extends React.Component {
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>
  }

}

export default Login;