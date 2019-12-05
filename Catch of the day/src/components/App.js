import React, { Component } from 'react';

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes"
import base from '../base'

export default class App extends Component {
  state = {
    fishes: {},
    order: {}
  }

  componentDidMount () {
    const { params } = this.props.match
    this.ref = base.syncState(`${ params.storedId }/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[ `fish${ Date.now() }` ] = fish
    this.setState({ fishes })
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
          <Order fishes={ this.state.fishes } order={ this.state.order } />
          <Inventory
            addFish={ this.addFish }
            loadSampleFishes={ this.loadSampleFishes } />
        </div>
      </>
    )
  }
}
