import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home__card">
        <h1 className="home__heading">BookApp</h1>
        <h2 className="home__description">Organise your reading list in one place.</h2>
        <hr className="home__horizontal-separator" />
        <div className="home__button-container">
          <Link to='/login'>
            <button className="home__button home__button--login">Login</button>
          </Link>
          <span className="home__description">or</span>
          <Link to='/signup'>
            <button className="home__button home__button--sign-up">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;