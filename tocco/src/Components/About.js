import React, { Component } from 'react';
import AboutImg from '../style/assets/images/sq2.jpg';
//Css import
import '../style/components/About.css'

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <section class="features15 cid-sbd5vF1eyS" id="features16-7">
          <div class="container">
              <div class="content-wrapper">
                  <div class="row align-items-center">
                      <div class="col-12 col-lg">
                          <div class="text-wrapper">
                              <h6 class="card-title mbr-fonts-style display-2">
                                  <strong>About TOCCO</strong></h6>
                              <p class="mbr-text mbr-fonts-style mb-4 display-4">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec finibus massa, nec porta lacus. Donec lorem risus, aliquet eu luctus nec, rhoncus vestibulum mi. Aliquam odio ante, pulvinar eget orci facilisis, finibus facilisis arcu. Nunc mauris arcu, mattis at ipsum sed, semper fermentum libero. Donec sit amet efficitur purus. Praesent ultrices laoreet mollis. Cras at aliquet nunc, id placerat ipsum. Duis congue ante interdum, consectetur felis id, fringilla sapien. Morbi auctor tempus felis, non convallis leo finibus nec. Morbi non egestas enim, quis laoreet purus. Etiam non ipsum congue, dictum mi et, accumsan nibh. Aliquam molestie diam eget massa faucibus, at lacinia magna tempor. Pellentesque accumsan a leo sed auctor. Aenean sollicitudin tempor accumsan.</p>
                              
                          </div>
                      </div>
                      <div class="col-12 col-lg-6">
                          <div class="image-wrapper">
                              <img src={AboutImg} alt="Mobirise"/>
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

export default About;