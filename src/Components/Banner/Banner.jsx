import React from 'react'
import './Banner.css'
export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>
              {' '}
              <i className="fas fa-biking"></i> Pizza Devlivery
            </h3>
            <h1> The Pizza Guy</h1>
            <p>Order pizza all your favorite restaurant</p>
            <div className="banner__btn">
              <button className="btn-button btn-smart"> ORDER NOW </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
