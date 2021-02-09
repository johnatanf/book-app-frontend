import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import loginService from '../../services/login';

const Login = props => {
  
  let history = useHistory();

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      const username = event.target.username.value;
      const password = event.target.password.value;
      await loginService.login(username, password);
      history.push('/');
      props.setUser({ username });
    } catch (error) {
      props.flashNotification('Incorrect username/password.');
      event.target.username.value = ''
      event.target.password.value = ''
    }
  }
  
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="example123" />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Login;