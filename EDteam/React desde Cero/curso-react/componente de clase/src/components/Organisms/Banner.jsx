import React from 'react';

const Banner=() => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="img-alt" src="http://images.unsplash.com/photo-1541702467897-41915a07d3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">React World</p>
            <p>Subtitutlo JSX</p>
            <a href="/" className="button third-color">Hola mundo</a>
          </div>
        </div>
      </div>
    </div>
  </>
)


export default Banner;