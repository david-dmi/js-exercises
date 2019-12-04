import React, { Component } from 'react';

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes"

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = fish => {
    const fishesForm = { ...this.state.fishes }
    fishesForm[ `fish${ Date.now() }` ] = fish
    this.setState({ fishesForm })
  }

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  addToOrder = (key) => {
    const order = { ...this.state.order }
    order[ key ] = order[ key ] + 1 || 1
    this.setState({ order })
  }

  render () {
    return (
      <>
        {/* App.js */ }
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="Fresh SeaFood Market" />
            <ul className="fishes">
              { Object.keys(this.state.fishes).map(key =>
                <Fish
                  key={ key }
                  index={ key }
                  data={ this.state.fishes[ key ] }
                  addToOrder={ this.addToOrder }
                />
              ) }
            </ul>
          </div>
          <Order></Order>
          <Inventory
            addFish={ this.addFish }
            loadSampleFishes={ this.loadSampleFishes } />
        </div>
      </>
    )
  }
}
