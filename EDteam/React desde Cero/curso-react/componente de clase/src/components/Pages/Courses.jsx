import React, { Component } from 'react'
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/david-portilla/json-db/cursos')
      .then(res =>
        // console.log(res.data)
        this.setState({
          courses: res.data
        })
      )
  }
  render() {
    const { courses } = this.state

    return <CourseGrid courses={courses} />
  }
}

export default Courses