import React from 'react'
import iconSet from "../../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const CardNav = (props) => {
  return (
    <div className="card-nav">
      <div className="card-nav__logo">
        <p>Book App</p>
      </div>
      <div className="card-nav__signed-in-user">
        <p>Signed in as {props.user.username}</p>
      </div>
      <ul className="card-nav__links">
        <li>
          <a className="card-nav__link card-nav__link--active" href="#">
            <IcomoonReact className="card-nav__link-icon" iconSet={iconSet} icon="books" />
            Books
          </a>
        </li>
        <li>
          <a className="card-nav__link" href="#">
            <IcomoonReact className="card-nav__link-icon" iconSet={iconSet} icon="search" />
            Search
          </a>
        </li>
        <li>
          <a className="card-nav__link" href="#">
            <IcomoonReact className="card-nav__link-icon" iconSet={iconSet} icon="exit" />
            Logout
          </a>
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