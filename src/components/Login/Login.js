import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import loginService from '../../services/login';

const Login = () => {
  
  let history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const response = await loginService.login(username, password);
    console.log(response);
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