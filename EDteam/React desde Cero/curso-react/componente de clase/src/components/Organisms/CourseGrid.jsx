import React from 'react';
import CourseCard from '../Molecules/CourseCard'

const courses = [
  {
    'id': 1,
    'title': 'React desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '38 USD',
    'teacher': 'dportilla'
  },
  {
    'id': 2,
    'title': 'Flutter Desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2018-12/Flutter.png?itok=MpF412ML',
    'price': '32 USD',
    'teacher': 'dportilla'
  },
  {
    'id': 3,
    'title': 'Node desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/Node.jpg?itok=SurL1AZa',
    'price': '41 USD',
    'teacher': 'dportilla'
  },
]

const CourseGrid = () => (

  <div className="ed-grid">
    <div className="ed-grid m-grid-3">
      { courses.map(c => (
        <CourseCard
          key={ c.id }
          id={ c.id }
          title={ c.title }
          image={ c.image }
          price={ c.price }
          teacher={ c.teacher }
        />))
      }
    </div>
  </div>
)

export default CourseGrid