import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nombre: '',
      correo: '',
      fecha: new Date()
    }

    this.cambiarNombre = this.cambiarNombre.bind(this)
    this.cambiarCorreo = this.cambiarCorreo.bind(this)
    this.cambiarFecha = this.cambiarFecha.bind(this)

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

  cambiarFecha () {
    this.setState({
      fecha: new Date()
    })

  }

  render () {
    return (
      <div className="ed-grid">
        <h1>Formulario</h1>
        <h4>Fecha actual: { Math.ceil(this.state.fecha / 1000) }</h4>
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
    )
  }

  componentDidMount () {
    // let elemento = document.getElementById("elemento")
    // console.log(elemento)
    this.intervaloFecha = setInterval(() => {
      this.cambiarFecha()
      console.log(new Date())
    }, 1000);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log('-----')
  }

  componentWillUnmount () {
    clearInterval(this.intervaloFecha)
  }

}

export default Formulario;