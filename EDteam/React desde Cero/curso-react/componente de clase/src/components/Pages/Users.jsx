import React, { Component } from 'react';
import Axios from 'axios'
import UserGrid from '../Organisms/UsersGrid';

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users/', { method: 'get' })
    //   .then(res => (res.json()))
    //   .then(json =>
    //     this.setState({
    //       users: json
    //     })
    //   )
    //   .catch(error => (
    //     console.log(error)
    //   ))

    Axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(res =>
        this.setState({
          users: res.data
        })
      )
  }


  render() {
    // const users = []
    const { users } = this.state
    return (
      <UserGrid users={users} />
    )
  }
}

export default Users