import React, { Component } from 'react';

class Form extends Component {

  state: { name: string; mail: string; date: Date; };

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      mail: '',
      date: new Date()
    }

    this.changeName = this.changeName.bind(this)
    this.changeMail = this.changeMail.bind(this)
    this.changeDate = this.changeDate.bind(this)

  }

  changeName(e) {
    this.setState({
      nombre: e.target.value,
    })
  }

  changeMail(e) {
    this.setState({
      correo: e.target.value,
    })
  }

  changeDate() {
    this.setState({
      fecha: new Date()
    })

  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario {this.props.name} </h1>
        <h4>Fecha actual: {Math.ceil(this.state.date / 1000)}</h4>
        <form action="/">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label htmlFor="nombre">Correo electronico</label>
              <input type="text"
                onChange={this.changeName}
              />
            </div>
            <div className="form__item">
              <label htmlFor="email">Correo electronico</label>
              <input type="email" name="email" id=""
                onChange={this.changeMail} />
            </div>
            <div className="form__item">
              <input className="button full" type="submit" value="Enviar" />
            </div>
          </div>
        </form>
        <div>
          <h3>{`Hola ${ this.state.nombre }`}</h3>
          <span>{`Tu correo es ${ this.state.correo }`}</span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    // let elemento = document.getElementById("elemento")
    // console.log(elemento)
    this.intervaloFecha = setInterval(() => {
      this.changeDate()
      console.log(new Date())
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps)
    console.log(prevState)
    console.log('-----')
  }

  componentWillUnmount() {
    clearInterval(this.intervaloFecha)
  }

}

export default Form