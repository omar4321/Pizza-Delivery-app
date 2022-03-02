import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './Header.css'
import useAuth from '../../hooks/useAuth';
function Navbarr() {
  const { allcontext, } = useAuth();

  const { user, logOut } = allcontext;
  const { displayName, photoURL, email, uid } = user;
  return (
    <div>
   <Header></Header>
   <div>
   <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="#home">
            {' '}
            <h3>
              <span className="logo-1"> pizza</span>{' '}
              <span className="logo-2">Guy</span>{' '}
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto align-items-center ">
            <Nav.Link as={HashLink}   to="/">
           Home
           </Nav.Link>
          <Nav.Link as={HashLink}   to="/#services">
            Order Pizza
          </Nav.Link>
            <Nav.Link as={HashLink}   to="/#about">
            About
           </Nav.Link>
             <Nav.Link as={HashLink}  to="/#menu">
                  Menu
            </Nav.Link>
              {!displayName ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/dashboard"
                    className="text-white"
                  >
                    Dashboard
                  </Nav.Link>

                  <NavDropdown
                    title={
                      <img
                        style={{
                          width: '40px',
                          borderRadius: '50%',
                        }}
                        src={photoURL}
                        alt=""
                      />
                    }
                  >
                    <div className="text-center d-flex justify-content-center  align-items-center ">
                      <div>
                        <h6>{displayName}</h6>
                        <p className="m-0 ">{email}</p>
                        <button onClick={logOut} className="btn btn-primary">
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </NavDropdown>
                </>
              )}
              {uid === '5SR1S1fW76UBrzUJW0bjxdxcdo73' && (
                <Nav.Link as={HashLink} to="/admin" className="text-white">
                  Admin Panel
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </div>
  )
}

export default Navbarr




      

   
        
 