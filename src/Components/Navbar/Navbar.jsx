import React from 'react'
import Header from './Header'
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
function Navbarr() {
  return (
    <div>
   <Header></Header>
   <div>
      <Navbar bg="dark"  variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo " href="#home">
            {' '}
            <h3>
              <span className="logo-1"> pizza</span>{' '}
              <span className="logo-2">Guy</span>{' '}
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center ">
              <Nav.Link to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link to="/home#services">
                Order Pizza
              </Nav.Link>
              <Nav.Link  to="/home#about">
                About
              </Nav.Link>
              <Nav.Link to="/home#menu">
                Menu
              </Nav.Link>
              <Nav.Link to="/home#client">
                Client
              </Nav.Link>
              <Nav.Link  to="/home#Restaurant">
                Restaurant
              </Nav.Link>
              <Nav.Link style={{ fontSize: '15px' }} to="/cart">
                
               
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </div>
  )
}

export default Navbarr