import React, { Component } from 'react';

//Css import
import '../style/components/MenuCard.css'

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <section class="contacts1 cid-sbdojtoqXl" id="contacts1-o">
        <div class="container">
            <div class="mbr-section-head">
                <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Contacts</strong>
                </h3>
                
            </div>
            <div class="row justify-content-center mt-4">
                <div class="card col-12 col-lg-6">
                    <div class="card-wrapper">
                        <div class="card-box align-center">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                            </div>
                            <h4 class="card-title mbr-fonts-style mb-2 display-2">
                                <strong>Email</strong>
                            </h4>
                            <p class="mbr-text mbr-fonts-style mb-2 display-4">
                                We will reply as soon as possible</p>
                            <h5 class="link mbr-fonts-style display-7"><a href="mailto:tocco.delish@gmail.com" class="text-primary">Send us an
                                    email</a>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="card col-12 col-lg-6">
                    <div class="card-wrapper">
                        <div class="card-box align-center">
                            <div class="image-wrapper">
                                <span class="mbr-iconfont mobi-mbri-mobile-2 mobi-mbri"></span>
                            </div>
                            <h4 class="card-title mbr-fonts-style align-center mb-2 display-2">
                                <strong>Phone</strong>
                            </h4>
                            <p class="mbr-text mbr-fonts-style mb-2 display-4">
                                Mon - Fri 09:00 - 18:00</p>
                            <h5 class="link mbr-black mbr-fonts-style display-7">
                                <a href="tel:++91915086990" class="text-primary">Call +91 91508 6990</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}

export default Contact;