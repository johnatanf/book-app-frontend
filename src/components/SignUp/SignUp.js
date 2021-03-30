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
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__heading">Sign Up</h2>
        <div className="form__field-group">
          <label className="form__field-label" for="username">Username</label>
          <input className="form__field-input" id="username" type="text" name="username"/>
        </div>

        <div className="form__field-group">
          <label className="form__field-label" for="name">Name</label>
          <input className="form__field-input" id="name" type="text" name="name"/>
        </div>
        
        <div className="form__field-group">
          <label className="form__field-label" for="password">Password</label>
          <input className="form__field-input" id="password" type="password" name="password"/>
        </div>
        <button className="form__button" type="submit">Log in</button>
      </form>
    </div>
  )
}

export default SignUp;