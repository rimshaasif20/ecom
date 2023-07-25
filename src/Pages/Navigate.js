import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function Navigate() {
  return (
    < >
    <Navbar expand='lg' className="container mt-1"   bg="primary" variant="dark"  >
        
          <Navbar.Brand style={{fontSize: '1.2rem'}} to ="/">AppsGenii Technologies</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto navbar' style={{fontSize: '1rem'}}>
          <Nav.Link className='nav-item'>
          <NavLink to="/" className="nav-link" >Home</NavLink>
             </Nav.Link>
            <Nav.Link >
            <NavLink to="/About" className="nav-link" >About</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to="/Services" className="nav-link" >Services</NavLink>
                </Nav.Link> 
                <Nav.Link>
            <NavLink to="/Contact" className="nav-link" >Contact us</NavLink>
                </Nav.Link> 
               
                 <Nav.Link>
          <NavLink to="/login" className="nav-link "  >Login</NavLink>
             </Nav.Link>
          </Nav>
       </Navbar.Collapse>
      </Navbar>
      </>
  )
}

export default Navigate