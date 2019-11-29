import React from 'react'

export default class StorePicker extends React.Component {
  render () {
    return (
      <>
        {/* StorePicker Component */ }
        <form className="store-selector">
          <h2>Please Enter a Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store !</button>
        </form>
      </>
    )
  }
}
