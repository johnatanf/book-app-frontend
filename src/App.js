import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Book from './components/Books/Book';
import Books from './components/Books/Books';
import BookSearcher from './components/BookSearcher/BookSearcher';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

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

export default App;