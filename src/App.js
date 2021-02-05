import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            <li>
              <Link to='/books'>Books</Link>
            </li>
            <li>
              <Link to='/books/12345'>Specific Book</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/search' component={BookSearcher} />
          <Route path='/books/:id' component={Book}/>
          <Route path='/books' component={Books}/>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Home</h2>;
}

const Login = () => {
  return <h2>Login</h2>;
}

const SignUp = () => {
  return <h2>Sign Up</h2>;
}

const BookSearcher = () => {
  return <h2>Search</h2>;
}

const Books = () => {
  return <h2>Books</h2>;
}

const Book = () => {
  return <h2>Specific Book</h2>;
}

export default App;