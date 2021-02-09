import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

const NavBar = props => {
  return (
    <Navbar bg="light" variant="light">
      <Link to={ props.user ? '/books' : '/'}>
        <Navbar.Brand as='span'>Book App</Navbar.Brand>
      </Link>
      { props.user ?
      (
        <Nav className="ml-auto">
          <Nav.Link as='span'>
            <Link to='/search'>Search</Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link to='/books'>Books</Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link to='/books/12345'>Specific Book</Link>
          </Nav.Link>
        </Nav>
      )
      :
      (
        <Nav className="ml-auto">
          <Nav.Link as='span'>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link to='/login'>Login</Link>
          </Nav.Link>
          <Nav.Link as='span'>
            <Link to='/signup'>Sign Up</Link>
          </Nav.Link>
        </Nav>
      )
      }
    </Navbar>
  )
}

export default NavBar;