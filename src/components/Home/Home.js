import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3}}>
        <Jumbotron className='d-flex flex-column text-center'>
          <h1 style={{ fontSize: '2.5em' }}>BookApp</h1>
          <h2 className='mb-5' style={{ fontSize: '1.25em', fontWeight: 'lighter' }}>
            Organise your reading list in one place. 
          </h2>
          <div>
            <Link to='/login'>
              <Button className='ml-2 mr-2' variant="success">Login</Button>
            </Link>
            <span>or</span>
            <Link to='/signup'>
              <Button className='ml-2 mr-2' variant="success">Sign Up</Button>
            </Link>
          </div>
        </Jumbotron>
      </Col>
    </Row>
  )
}

export default Home;