import React, { Component } from 'react';
import AboutImg from '../style/assets/images/sq2.jpg';

//Css import
import '../style/components/MenuCard.css'
//Monk Data
import data from  '../data/data.json'

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() { 
    return(
      <div>
        <section class="testimonails3 carousel slide testimonials-slider cid-sbdmuZA0ax" data-interval="false" id="testimonials3-i">
          <div class="text-center container">
              <h3 class="mb-4 mbr-fonts-style display-2">
                  <strong>What Our Fantastic Users Say</strong>
              </h3>

              <div class="carousel slide" role="listbox" data-pause="true" data-keyboard="false" data-ride="carousel" data-interval="8000">
                  <div class="carousel-inner">
                      
                      
                  <div class="carousel-item">
                          <div class="user col-md-8">
                              <div class="user_image">
                                  <img src={AboutImg}/>
                              </div>
                              <div class="user_text mb-4">
                                  <p class="mbr-fonts-style display-7">
                                      Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.
                                  </p>
                              </div>
                              <div class="user_name mbr-fonts-style mb-2 display-7">
                                  <strong>Alexa</strong>
                              </div>
                              <div class="user_desk mbr-fonts-style display-7">
                                  DESIGNER
                              </div>
                          </div>
                      </div><div class="carousel-item">
                          <div class="user col-md-8">
                              <div class="user_image">
                                  <img src={AboutImg}/>
                              </div>
                              <div class="user_text mb-4">
                                  <p class="mbr-fonts-style display-7">
                                      Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.
                                  </p>
                              </div>
                              <div class="user_name mbr-fonts-style mb-2 display-7">
                                  <strong>Linda</strong>
                              </div>
                              <div class="user_desk mbr-fonts-style display-7">
                                  DEVELOPER
                              </div>
                          </div>
                      </div></div>

                  <div class="carousel-controls">
                      <a class="carousel-control-prev" role="button" data-slide="prev">
                          <span aria-hidden="true" class="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont"></span>
                          <span class="sr-only">Previous</span>
                      </a>

                      <a class="carousel-control-next" role="button" data-slide="next">
                          <span aria-hidden="true" class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }
}

export default Feedback;