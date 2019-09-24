import React, { Component } from 'react'
import CourseCard from '../Molecules/CourseCard'
import Axios from 'axios'

class CourseGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    Axios.get('http://my-json-server.typicode.com/david-portilla/json-db/cursos')
      .then(res =>
        // console.log(res.data)
        this.setState({
          courses: res.data
        })
      )
  }
  render() {
    const { courses } = this.state

    return (
      <div className="ed-grid">
        <div className="ed-grid m-grid-3">
          {courses.map(c => (
            <CourseCard
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              price={c.price}
              teacher={c.teacher}
            />))
          }
        </div>
      </div>
    )
  }
}
export default CourseGrid