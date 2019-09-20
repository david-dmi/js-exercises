import React from 'react';
import Curso from './Curso'

const cursos = [
  {
    'id': 1,
    'title': 'react desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '50 USD',
    'teacher': 'dportilla'
  },
  {
    'id': 2,
    'title': 'react desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '50 USD',
    'teacher': 'dportilla'
  },
  {
    'id': 3,
    'title': 'react desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '50 USD',
    'teacher': 'dportilla'
  },
]

const CourseGrid = () => (

  <div className="ed-grid">
    <div className="ed-grid m-grid-3">
      { cursos.map(c => (
        <Curso
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