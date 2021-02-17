import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import logoutService from '../services/logout';

const NavBar = props => {

  let history = useHistory();

  const handleLogout = async () => {
    try {
      await logoutService.logout()
      props.setUser(null)
      history.push('/');
    } catch (error) {
      props.flashNotification('Failed to log out. Please try again later.', false)
    }
  }

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
          <Nav.Link 
            onClick={handleLogout}
          >
            Logout
          </Nav.Link>
          <Navbar.Text className='ml-5'>
            Signed in as {props.user.username}
          </Navbar.Text>
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