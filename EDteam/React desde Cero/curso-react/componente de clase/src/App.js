import React from 'react'
import './styles/styles.scss'
import Banner from './Banner'
import Formulario from './Formulario'
// import Curso from './Curso'
import Course from './Course'
import CourseGrid from './CourseGrid'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ Banner } />
      <Route path="/cursos/:id" exact component={ Course } />
      <Route path="/cursos" exact component={ CourseGrid } />
      <Route path="/formulario" exact component={ () => <Formulario nombre="react-prop" /> } />
      <Route component={ () => (
        <div className="ed-grid">
          <h1>Page not found</h1>
        </div>
      ) } />

      {/*
      <Formulario nombre="react-prop" />
      <div className="ed-grid">
        <div className="ed-grid m-grid-3">
          <Curso />
          <Curso />
          <Curso />
        </div>
      </div>
      */}
    </Switch>
  </Router>
)

export default App
