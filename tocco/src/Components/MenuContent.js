import React, { Component } from 'react';
import ReactDOM from "react-dom";

//Css import
//import '../style/components/MenuCard.css'
//Monk Data
//import data from  '../data/data.json'

class MenuContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    };
  }

  async componentDidMount(){
    try {
      const api = `/api/menu/${this.props.itemCategory}`
      console.log('api',api)
      const response = await fetch(api);
      const json = await response.json();
      this.setState({ item: json });
    } catch(error) {
      console.log('fetch error',error)
    }
    
  }

  render() {
    const category = this.props.category
    const data = this.state.item
    const itemID= data.map((data)=>{
      //To display pasta and ravioli
      
      {  return(
        <div>
          <div class="card">
            <div class="card-wrapper">
              <div class="row align-items-center">
                <div class="col-12 col-md-3">
                    <div class="image-wrapper">
                        <img src={require(`../style/assets/itemImages/${data.itemId}.jpg`)} alt="Mobirise" title=""/>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="card-box">
                        <div class="row">
                            <div class="col-12">
                                <div class="top-line">
                                    <h4 class="card-title mbr-fonts-style display-5"><strong>{data.itemName}</strong></h4>
                                    <p class="cost mbr-fonts-style display-5">INR {data.itemPrice}</p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="bottom-line">
                                    <p class="mbr-text mbr-fonts-style m-0 display-7">
                                    {data.itemDesc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    })

    
    return(
      <div>
        <section class="features10 cid-sbdhsEe1Z7" id="features11-c">
          <div class="container">
            <div class="title">
              <h3 class="mbr-section-title mbr-fonts-style mb-4 display-2"><strong>{category}</strong></h3>
            </div>
            {itemID}
          </div>
        </section>
      </div>
    )
  }
}

export default MenuContent;