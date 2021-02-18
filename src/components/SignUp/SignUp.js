import React from 'react';
import { useHistory } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import loginService from '../../services/login';
import usersService from '../../services/users';

const SignUp = props => {
  
  let history = useHistory();

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const username = event.target.username.value;
      const name = event.target.name.value;
      const password = event.target.password.value;
      await usersService.createUser(username, name, password);
      await loginService.login(username, password);
      history.push('/');
      props.setUser({ username });
      props.flashNotification(`Welcome, ${username}!`, true);
    } catch (e) {
      props.flashNotification(e.error, false);
      event.target.username.value = ''
      event.target.name.value = ''
      event.target.password.value = ''
    }
  }
  
  return (
    <Row>
      <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
        <Card className='p-3'>
          <Form onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="example123" />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Bob" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
    
  )
}

export default SignUp;