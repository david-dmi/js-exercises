import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

// const Curso = props => (
const Curso = ({ id, title, image, teacher, price }) => (


  <article className={`card ${ title }`}>
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`/cursos/${ id }`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        {title}
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src={image} alt={title} />
            </div>
          </div>
          <span className="small">{teacher}</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="/">{price}</a>
      </div>
    </div>
  </article>


)

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  teacher: PropTypes.string
}

Curso.defaultProps = {
  title: 'No se encontró título',
  image: 'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/aws-i_0.jpg?itok=qqh7AjWK',
  price: 'No se encontró precio',
  teacher: 'No se encontró profesor',
}

export default Curso