import React, { Component } from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

export default class Badge extends Component {
  render () {
    return (
      <div className="Badge">
        {/* <h1>Badge Component</h1> */ }
        <div className="Badge__header">
          <img src={ confLogo } alt="Banner" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar"
            src="https://avatars3.githubusercontent.com/u/5439187?s=400&v=4" alt="Avatar" />
          <h1>{ this.props.firstName } <br />{ this.props.lastName } </h1>
        </div>
        <div className="Badge__section-info">
          <h3> FE dev</h3>
          <div> @david_portilla</div>
        </div>
        <div className="Badge__footer">
          <p>#medellin #co</p>
        </div>
      </div>
    )
  }
}
