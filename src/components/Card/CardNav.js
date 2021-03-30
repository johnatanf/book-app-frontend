import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import logoutService from '../../services/logout';
import iconSet from "../../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const CardNav = (props) => {

  let history = useHistory(); 

  const handleLogout = async () => {
    try {
      await logoutService.logout()
      props.setUser(null)
      history.push('/');
    } catch (error) {
      console.log(error);
      props.flashNotification('Failed to log out. Please try again later.', false)
    }
  }

  return (
    <div className="card-nav">
      <div className="card-nav__logo">
        <Link to='/books'>
          <p>Book App</p>
        </Link>
      </div>
      <div className="card-nav__signed-in-user">
        <p>Signed in as {props.user.username}</p>
      </div>
      <ul className="card-nav__links">
        <li>
          <Link style={{textDecoration: 'none'}} to='/books'>
            <span className="card-nav__link card-nav__link--active" href="#">
              <IcomoonReact className="card-nav__link-icon" iconSet={iconSet} icon="books" />
              Books
            </span>
          </Link>
        </li>
        <li>
          <Link style={{textDecoration: 'none'}} to='/search'>
            <span className="card-nav__link">
              <IcomoonReact className="card-nav__link-icon" iconSet={iconSet} icon="search" />
              Search
            </span>
          </Link>
        </li>
        <li>
          <span className="card-nav__link" onClick={handleLogout}>
            <IcomoonReact className="card-nav__link-icon" iconSet={iconSet} icon="exit" />
            Logout
          </span>
        </li>
      </ul>
      <div className="card-nav__copyright">
        <p>Created by Johnatan Fallen &copy; 2021</p>
        <p>View my portfolio <a href="#">here</a>.</p>
      </div>
    </div>
  )
}

export default CardNav;