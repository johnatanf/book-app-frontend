import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
  <Jumbotron>
    <h1>Welcome!</h1>
    <p>
      Description text goes here.
    </p>
      
    <Link to='/login'>
      <Button variant="primary">Login</Button>
    </Link>
    <Link to='/signup'>
      <Button variant="primary">Sign Up</Button>
    </Link>
  </Jumbotron>    
  )
}

export default Home;