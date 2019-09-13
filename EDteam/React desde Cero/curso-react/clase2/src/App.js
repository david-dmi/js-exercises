import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'

const cursos = [
  {
    'title': 'React desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
    'price': '30',
    'teacher': 'Dportilla'
  },
  {
    'title': 'TypeScript desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/typescript.png',
    'price': '25',
    'teacher': 'David Portilla'
  },
  {
    'title': 'Node.js desde Cero',
    'image': 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/Node.jpg?itok=SurL1AZa',
    'price': '35',
    'teacher': 'DPS'
  }

]

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" alt="img-alt" src="http://images.unsplash.com/photo-1541702467897-41915a07d3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Curso React</p>
          <p>Subtitutlo JSX</p>
          <a href="/" className="button third-color">Hola mundo</a>
        </div>
      </div>
    </div>
  </div>
  <div className="ed-grid m-grid-3">
    {
      cursos.map ( item => <Curso title={item.title}
                                  image={item.image}
                                  price={item.price}
                                  teacher={item.teacher}
                                  /> )
    }
  </div>
  </>
)

export default App;
