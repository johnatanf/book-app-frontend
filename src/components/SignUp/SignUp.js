import React from 'react';
import { useHistory } from 'react-router-dom';
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="example123" name="username"/>

        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Bob" name="name"/>

        <label for="password">Password</label>
        <input id="password" type="password" placeholder="password" name="password"/>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUp;