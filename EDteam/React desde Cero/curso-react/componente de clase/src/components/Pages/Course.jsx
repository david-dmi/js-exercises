import React, { useState } from 'react';
// import axios from 'axios'

const Course = ({ match }) => {
  const [state, setState] = useState({
    id: 1,
    title: "React desde cero",
    image: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png",
    price: "38 USD",
    teacher: "dportilla"
  })
  console.log(state)

  const changeTitle = (text) => {
    setState({
      ...state,
      title: 'aaaaa'
    })
  }

  return (
    <div className="ed-grid m-grid-3">
      {
        state ? (
          <>
            <h1 className="m-cols-3">Curso: {state.title} </h1>
            <img className="m-cols-1" src={state.image} alt={state.title} />
            <p className="m-cols-2">Profesor: {state.teacher} </p>
            <button onClick={changeTitle.bind(this, "Go desde cero")}> Cambiar titulo </button>
          </>
        ) :
          <h1 className="m-cols-3">Curso no encontrado </h1>
      }
    </div>
  )
  // }
}

export default Course