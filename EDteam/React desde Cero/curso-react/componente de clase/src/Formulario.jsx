import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props)

    this.state={
      nombre: 'aaa',
      correo: ''
    }

    this.cambiarNombre=this.cambiarNombre.bind(this)
    this.cambiarCorreo=this.cambiarCorreo.bind(this)

  }

  cambiarNombre (e) {
    this.setState({
      nombre: e.target.value,
    })
  }

  cambiarCorreo (e) {
    this.setState({
      correo: e.target.value,
    })
  }


  render () {
    return (
      <>
        <div className="ed-grid">
          <h1>Formulario</h1>
          <form action="/">
            <div className="ed-grid m-grid-2">
              <div className="form__item">
                <label htmlFor="nombre">Correo electronico</label>
                <input type="text"
                  onChange={ this.cambiarNombre }
                />
              </div>
              <div className="form__item">
                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id=""
                  onChange={ this.cambiarCorreo } />
              </div>
              <div className="form__item">
                <input className="button full" type="submit" value="Enviar" />
              </div>
            </div>
          </form>
          <div>

            <h3>{ `Hola ${ this.state.nombre }` }</h3>
            <span>{ `Tu correo es ${ this.state.correo }` }</span>
          </div>


        </div>
      </>
    )
  }
}

export default Formulario;