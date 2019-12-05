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
    // get the last localstorage item from previous session
    const localStorageRef = localStorage.getItem(params.storedId)
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    this.ref = base.syncState(`${ params.storedId }/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentDidUpdate () {
    const nameStore = this.props.match.params.storedId
    localStorage.setItem(nameStore, JSON.stringify(this.state.order))
  }

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes }
    fishes[ `fish${ Date.now() }` ] = fish
    this.setState({ fishes })
  }

  updateFish = (key, updateFish) => {
    const fishes = { ...this.state.fishes }
    fishes[ key ] = updateFish
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
            updateFish={ this.updateFish }
            loadSampleFishes={ this.loadSampleFishes }
            fishes={ this.state.fishes }
          />
        </div>
      </>
    )
  }
}
