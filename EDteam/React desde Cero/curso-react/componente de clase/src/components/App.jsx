import React from 'react'
import '../styles/styles.scss'
import Form from './Pages/Form'
import Course from './Pages/CourseDetail'
import CourseGrid from './Organisms/CourseGrid'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History'
import Home from './Pages/Home'
import Users from './Pages/Users'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" exact component={Course} />
      <Route path="/cursos" exact component={CourseGrid} />
      <Route path="/historial/:valor" exact component={History} />
      <Route path="/historial" exact component={History} />
      <Route path="/usuarios" exact component={Users} />
      <Route path="/formulario" exact component={() => <Form nombre="react-prop" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Page not found</h1>
        </div>
      )} />
    </Switch>
  </Router>
)

export default App
