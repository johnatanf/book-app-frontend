import React from 'react'
import iconSet from "../img/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <p>Book App</p>
      </div>
      <div className="nav__signed-in-user">
        <p>Signed in as tim123</p>
      </div>
      <ul className="nav__links">
        <li>
          <a className="nav__link nav__link--active" href="#">
            <IcomoonReact className="nav__link-icon" iconSet={iconSet} icon="books" />
            Books
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            <IcomoonReact className="nav__link-icon" iconSet={iconSet} icon="search" />
            Search
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            <IcomoonReact className="nav__link-icon" iconSet={iconSet} icon="exit" />
            Logout
          </a>
        </li>
      </ul>
      <div className="nav__copyright">
        <p>Created by Johnatan Fallen &copy; 2021</p>
        <p>View my portfolio <a href="#">here</a>.</p>
      </div>
    </div>
  )
}

export default Nav;