import React, { Component } from 'react';
import axios from 'axios'

class Course extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cursoActual: {}
    }
  }

  componentDidMount() {
    axios.get(`http://my-json-server.typicode.com/david-portilla/json-db/cursos/${ this.props.match.params.id }`)
      .then(res =>
        this.setState({
          cursoActual: res.data
        })
      )
  }

  render() {
    return (
      <div className="ed-grid m-grid-3">
        {this.state.cursoActual ? (
            <>
              <h1 className="m-cols-3">Curso: {this.state.cursoActual.title} </h1>
              <img className="m-cols-1" src={this.state.cursoActual.image} alt={this.state.cursoActual.title} />
              <p className="m-cols-2">Profesor: {this.state.cursoActual.teacher} </p>
            </>
          ) :
            <h1 className="m-cols-3">Curso no encontrado </h1>
        }
      </div>
    )
  }
}

export default Course