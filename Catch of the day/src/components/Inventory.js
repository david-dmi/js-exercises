import React, { Component } from 'react'
import AddFish from './AddFish'

export default class Inventory extends Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFish addFish={ this.props.addFish}></AddFish>
      </div>
    )
  }
}