import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>BookApp</h1>
      <h2>Organise your reading list in one place.</h2>
      <div>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <span>or</span>
        <Link to='/signup'>
          <button>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default Home;