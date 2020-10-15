import React, { Component } from 'react';
//Css import
import '../style/components/Services.css'

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <section class="features13 cid-sbd5HyaUfK" id="features14-8">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="mbr-section-title align-center mb-4 mbr-fonts-style display-2"><strong>Our services</strong></h3>
                    </div>
                    <div class="card col-12 col-md-4 col-lg-2 p-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-magic-stick mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-5"><strong>DIY Menu</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="card p-3 col-12 col-md-4 col-lg-2">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-website-theme-2 mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-5">
                                    <strong>Healthy Bites</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="card p-3 col-12 col-md-4 col-lg-2">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mbrib-gift"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-5">
                                    <strong>Party Orders</strong></h4>
                            </div>
                        </div>
                    </div>
                    <div class="card p-3 col-12 col-md-4 col-lg-2">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-tablet mobi-mbri"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-5"><strong>Dessert</strong></h4>
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

export default Services;