import React from 'react';

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
    'title': 'vue.js desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '50 USD',
    'teacher': 'dportilla'
  },
  {
    'id': 3,
    'title': 'node desde cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '50 USD',
    'teacher': 'dportilla'
  },
]

const Course = ({ match }) => {

  const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

  return (
    <div className="ed-grid m-grid-3">
      {
        cursoActual ? (
          <>
            <h1 className="m-cols-3">Curso: {cursoActual.title} </h1>
            <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title} />
            <p className="m-cols-2">Profesor: {cursoActual.teacher} </p>
          </>
        ) :
          <h1 className="m-cols-3">Curso no encontrado </h1>
      }
    </div>
  )
}

export default Course