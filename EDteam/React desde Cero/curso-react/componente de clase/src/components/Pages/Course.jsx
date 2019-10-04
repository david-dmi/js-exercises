import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Course = ({ match }) => {
  const [state, setState] = useState({})

  useEffect(() => {
    console.log('aaa')
    axios.get('http://my-json-server.typicode.com/david-portilla/json-db/cursos/2')
      .then(res => setState(res.data))
  }, [])

  return (
    <div className="ed-grid m-grid-3">
      {
        state ? (
          <>
            <h1 className="m-cols-3">Curso: {state.title} </h1>
            <img className="m-cols-1" src={state.image} alt={state.title} />
            <p className="m-cols-2">Profesor: {state.teacher} </p>
          </>
        ) :
          <h1 className="m-cols-3">Curso no encontrado </h1>
      }
    </div>
  )
  // }
}

export default Course