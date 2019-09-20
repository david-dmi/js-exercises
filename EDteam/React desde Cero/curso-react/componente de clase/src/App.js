import React from 'react'
import './styles/styles.scss'
import Banner from './Banner'
import Formulario from './Formulario'
import Curso from './Curso'

const App = () => (
  <>
    <Banner />
    <Formulario />
    <div className="ed-grid">
      <div className="ed-grid m-grid-3">
        <Curso />
        <Curso />
        <Curso />
      </div>
    </div>
  </>
)

export default App
