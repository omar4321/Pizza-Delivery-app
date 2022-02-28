import React from 'react'
import { Container } from 'react-bootstrap'
import './Header.css'


export default function Header() {
  return (
      <Container className='container'>
          <div className="header">
      <div className='left-side '>
      <div class="dropdown">
        <button class="dropbtn">language</button>
        <div class="dropdown-content">
          <a href="#">English </a>
          <a href="#">Bangla</a>
          <a href="#">Hindi</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Payment</button>
        <div class="dropdown-content">
          <a href="#">Taka</a>
          <a href="#">$USD</a>
        </div>
      </div>
      <p>+8001384990</p>
      </div>
      <div className='left-side'>
      <p>WhishList</p>
      <p>My Cart</p>
      <p>Chack out</p>
      </div>
    
    
      </div>
      </Container>

  )
}
