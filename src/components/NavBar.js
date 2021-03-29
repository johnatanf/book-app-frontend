import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    <div>
      <Link to={ props.user ? '/books' : '/'}>
        <span>Book App</span>
      </Link>
      { props.user ?
      (
        <div>
          <div className='d-flex ml-auto'>
            <span>
              <Link to='/search'>Search</Link>
            </span>
            <span>
              <Link to='/books'>Books</Link>
            </span>
            <span
              onClick={handleLogout}
            >
              Logout
            </span>
          </div>
          <span>
            Signed in as {props.user.username}
          </span>
        </div>
      )
      :
      (
        <div>
          <span>
            <Link to='/'>Home</Link>
          </span>
          <span>
            <Link to='/login'>Login</Link>
          </span>
          <span>
            <Link to='/signup'>Sign Up</Link>
          </span>
        </div>
      )
      }
    </div>
  )
}

export default NavBar;