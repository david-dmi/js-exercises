import React, { Component } from 'react';

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    // console.log('adding fish', fish)
    const fishesForm = { ...this.state.fishes }
    fishesForm[ `fish${ Date.now() }` ] = fish
    this.setState({ fishesForm })
  }

  render () {
    return (
      <>
        {/* App.js */ }
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh SeaFood Market" />
            <Fish />
            <Fish />
            <Fish />
          </div>
          <Order></Order>
          <Inventory addFish={ this.addFish } />
        </div>
      </>
    )
  }
}
