import React, { Component } from 'react'

export default class BadgeForm extends Component {
  state = {
    firstName: 'David'
  }

  handleChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div>
        {/*<h1>BadgeForm</h1>*/ }
        <h1>New Attendant</h1>
        <form>
          <div className="form-group">
            <label>First name</label>
            <input onChange={ this.handleChange } className="form-control" type="text"
              name="firstName" value={ this.state.firstName } />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input onChange={ this.handleChange } className="form-control" type="text"
              name="lastName" value={ this.state.lastName } />
          </div>
          <div className="form-group">
            <label>email</label>
            <input onChange={ this.handleChange } className="form-control" type="email"
              name="email" value={ this.state.email } />
          </div>
          <div className="form-group">
            <label>job title</label>
            <input onChange={ this.handleChange } className="form-control" type="text"
              name="jobTitle" value={ this.state.jobTitle } />
          </div>
          <div className="form-group">
            <label>twitter</label>
            <input onChange={ this.handleChange } className="form-control" type="text"
              name="twitter" value={ this.state.twitter } />
          </div>
          <button onClick={ this.handleSubmit } className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}
