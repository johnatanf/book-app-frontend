import React from 'react';
import { useHistory } from 'react-router-dom';
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
      props.flashNotification(`Welcome, ${username}!`, true);
    } catch (error) {
      props.flashNotification('Incorrect username/password.', false);
      event.target.username.value = ''
      event.target.password.value = ''
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="example123" />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
}

export default Login;