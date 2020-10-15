import React, { Component } from 'react';

//Css import
import '../style/components/MenuCard.css'
import Pasta from './Pasta'
import Pizza from './Pizza'
import Dessert from './Dessert'
import MenuContent from './MenuContent'
//Monk Data
import data from  '../data/data.json'
import ravioli from  '../data/ravioli.json'

class MenuCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return(
      <div>
        <MenuContent itemCategory="pasta" category="Ravioli"/>
        <MenuContent itemCategory="pizza" category="Pizza"/>
        <MenuContent itemCategory="cake" category="Cake"/>
        <MenuContent itemCategory="cookies" category="Cookies"/>
        <MenuContent itemCategory="sauce" category="Sauce"/>
      </div>
    )
  }
}

export default MenuCard;