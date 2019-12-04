import React, { Component } from 'react'
import { formatPrice } from "../helpers";

export default class Fish extends Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index)
  }
  render () {
    const { image, name, desc, price } = this.props.data
    const isAvailable = this.props.data.status === 'available'
    // const name = this.props.data.name
    // const desc = this.props.data.desc
    // const price = this.props.data.price
    // const status = this.props.data.status
    return (
      <li className="menu-fish">
        <img src={ image } alt={ name } />
        <h3 className="fish-name">
          { name }
          <span className="price">{ formatPrice(price) }</span>
        </h3>
        <p>{ desc }</p>
        <button
          disabled={ !isAvailable }
          onClick={ this.handleClick }
        >
          { isAvailable ? 'Add to cart' : 'Sold out' }
        </button>
      </li>
    )
  }
}
