import React from 'react'
import CourseCard from "../Molecules/CourseCard"
import withLoader from '../HOC/withLoader'

const CourseGrid = ({ courses }) => (
  <div className="ed-grid">
    <div className="ed-grid m-grid-3">
      {
        courses.map(c => (
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

export default withLoader("courses")(CourseGrid)