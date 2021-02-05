import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// if user is not null 
// 	books (default) 
// 	search 
// 	log out 
// if user is null 
// 	home (default) 
// 	login 
// 	sign up 

const NavBar = props => {
  return (
    <nav>
      { props.user ? 
      (
        <ul>
          <li>
            <Link to='/search'>Search</Link>
          </li>
          <li>
            <Link to='/books'>Books</Link>
          </li>
          <li>
            <Link to='/books/12345'>Specific Book</Link>
          </li>          
        </ul>
      )
      :
      (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
      </ul>
      )
      }
    </nav>
  )
}

export default NavBar;