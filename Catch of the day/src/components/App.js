import React, { Component } from 'react'

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";

export default class App extends Component {
  render () {
    return (
      <>
        {/* App.js */ }
        <div className="catch-of-the-day">
          <div className="menu">
            <Header />
            <Fish />
            <Fish />
            <Fish />
          </div>
          <Order></Order>
          <Inventory></Inventory>
        </div>
      </>
    )
  }
}
