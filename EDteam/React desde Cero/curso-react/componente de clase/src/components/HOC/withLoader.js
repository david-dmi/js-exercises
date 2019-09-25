import React, { Component } from 'react'

const withLoader = (propValue) => (WrappedComponent) => {
  return class WithLoader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }

    render () {
      return this.props[ propValue ].length === 0
        ? <h1>Loading { propValue }...</h1>
        : <WrappedComponent { ...this.props } />
    }
  }
}

export default withLoader