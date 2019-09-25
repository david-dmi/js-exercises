import React, { Component } from 'react'

const withLoader = (WrappedComponent) => {
  return class WithLoader extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props)
    }
    render () {
      return <WrappedComponent { ...this.props } />
    }
  }
}

export default withLoader