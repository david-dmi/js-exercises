import React from 'react';
const persona = {
  'nombre': 'David',
  'apellido': 'Portilla',
  'edad': 30
}

const mayorEdad = edad => edad > 18
const Curso = () => (
  <>
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="http://images.unsplash.com/photo-1541702467897-41915a07d3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="img-tag"/>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {`Hola me llamo ${persona.nombre} ${persona.apellido}`}
        <br></br>
        {mayorEdad(persona.edad)? 'si es mayor' : 'nooo' }
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="http://images.unsplash.com/photo-1541702467897-41915a07d3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="img-tag"/>
            </div>
          </div>
          <span className="small">Alexys Lozada</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="/">$ 20USD</a>
      </div>
    </div>
  </article>
  </>
)

export default Curso;