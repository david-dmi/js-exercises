import React, { Component } from 'react'
import Navbar from '../components/NavBar';
import Badge from '../components/Badge';
import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'

export default class BadgeNew extends Component {
  render () {
    return (
      <div>
        {/* <h1>BadgeNew Component </h1> */ }
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={ header } alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge firstName='David' lastName='Portilla' />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
