import React, { Component } from 'react';

//Css import
import '../style/components/MenuCard.css'

class FollowUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <section class="share3 cid-sbdn9UOXVJ" id="share3-k">
            <div class="container">
                <div class="media-container-row">
                    <div class="col-12">
                        <h3 class="mbr-section-title align-center mb-3 mbr-fonts-style display-2">
                            <strong>Follow Us!</strong>
                        </h3>
                        <div class="social-list align-center">
                            <a class="iconfont-wrapper bg-facebook m-2 " target="_blank" href="https://www.facebook.com/Toccodelish-105738781180197/">
                                    <span class="socicon-facebook socicon"></span>
                                </a>
                                
                                <a class="iconfont-wrapper bg-instagram m-2" href="https://www.instagram.com/tocco.delish/" target="_blank">
                                    <span class="socicon-instagram socicon"></span>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

export default FollowUs;

/*
<a class="iconfont-wrapper bg-twitter m-2" href="https://mobiri.se" target="_blank">
                                    <span class="socicon-twitter socicon"></span>
                                </a>
*/