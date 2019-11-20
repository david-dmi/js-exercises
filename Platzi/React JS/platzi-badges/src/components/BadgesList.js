import React, { Component } from 'react'

export default class BadgesList extends Component {
  render () {
    return (
      <div>
        <ul className="list-unstyled">
          { this.props.badgesData.map((badge) => {
            return (
              <li key={ badge.id }>
                <img src={ badge.avatarUrl } alt={ ` ${ badge.firstName } ${ badge.lastName }` } />
                <p><strong> { badge.firstName } { badge.lastName }</strong></p>
                <p>@{ badge.twitter }</p>
                <p>{ badge.jobTitle }</p>
              </li>
            )
          }) }
        </ul>
      </div>
    )
  }
}
