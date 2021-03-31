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
      props.flashNotification(`Welcome, ${username}!`, 'success');
    } catch (error) {
      props.flashNotification('Incorrect username/password.', 'failure');
      event.target.username.value = ''
      event.target.password.value = ''
    }
  }
  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Login</h2>

        <div className="form__field-group">
          <label className="form__field-label" htmlFor="username">Username</label>
          <input className="form__field-input" id="username" type="text"/>
        </div>

        <div className="form__field-group">
          <label className="form__field-label" htmlFor="password">Password</label>
          <input className="form__field-input" id="password" type="password"/>
        </div>

        <button className="form__button" type="submit">Log in</button>
      </form>
    </div>
    
  )
}

export default Login;