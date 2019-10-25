import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Course = ({ match }) => {
  const [course, setCourse] = useState({})
  const [comment, setComment] = useState("Sin comentarios")

  useEffect(() => {
    console.log('aaa')
    axios.get(`http://my-json-server.typicode.com/david-portilla/json-db/cursos/${ match.params.id }`)
      .then(res => setCourse(res.data))
  }, [])

  const myComment = e => {
    setComment(e.target.value)
  }

  return (
    <div className="ed-grid m-grid-3">
      {
        course ? (
          <div className="ed-grid">
            <div>
              <h1 className="m-cols-3">Curso: {course.title} </h1>
              <img className="m-cols-1" src={course.image} alt={course.title} />
              <p className="m-cols-2">Profesor: {course.teacher} </p>
            </div>
            <div>
              <h2>Escribe tu comentario</h2>
              <input type="text" placeholder="Escribe tu texto..." onChange={myComment.bind(this)} />
              <p>{comment}</p>
            </div>
          </div>
        ) :
          <h1 className="m-cols-3">Curso no encontrado </h1>
      }
    </div>
  )
  // }
}

export default Course