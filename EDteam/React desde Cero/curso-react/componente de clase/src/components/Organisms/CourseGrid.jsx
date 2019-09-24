import React from 'react'
import CourseCard from "../Molecules/CourseCard"

const CourseGrid = ({ courses }) => (
  <div className="ed-grid">
    <div className="ed-grid m-grid-3">
      {
        courses.length === 0
          ? <h1 className="t3">Cargando...</h1>
          : courses.map(c => (
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

export default CourseGrid