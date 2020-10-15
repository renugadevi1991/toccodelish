import React, { Component } from 'react';
//CSS import
import '../style/components/Header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <section class="header1 cid-sbd2bsNPlZ mbr-fullscreen" id="header1-5">
          <div class="mbr-overlay" style={{opacity: '0.1', background: 'rgb(250, 250, 250)'}}></div>

          <div class="container">
              <div class="row">
                  <div class="col-12 col-lg-5">
                      <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Handcrafted Home made</strong></h1>
                      
                      <p class="mbr-text mbr-fonts-style display-7">
                          Tocco offers freshly handcrafted food items with no preservatives. Fresh to use international level menu.&nbsp;</p>
                      
                  </div>
              </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Header;

/* Order now button
<div class="mbr-section-btn mt-3"><a class="btn btn-secondary display-4" href="index.html#features11-3">Order Now</a></div>

add after

<h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Handcrafted Home made</strong></h1>
*/