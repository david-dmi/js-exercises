import React from 'react'
import { getFunName } from "../helpers"

export default class StorePicker extends React.Component {
  render () {
    return (
      <>
        {/* StorePicker Component */ }
        <form className="store-selector">
          <h2>Please Enter a Store Name below</h2>
          <input type="text" required placeholder="Store Name"
            defaultValue={ getFunName() } />
          <button type="submit">Visit Store !</button>
        </form>
      </>
    )
  }
}
