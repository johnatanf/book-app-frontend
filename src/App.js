import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Book from './components/Books/Book';
import Books from './components/Books/Books';
import BookSearcher from './components/BookSearcher/BookSearcher';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/NavBar';

const App = () => {
  
  const [user, setUser] = useState('');
  
  return (
    <Router>
      <div>
        <NavBar user={user} />

        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/search' component={BookSearcher} />
          <Route path='/books/:id' component={Book}/>
          <Route path='/books' component={Books}/>
          <Route path='/'>
            { user ? <Redirect to='/books' /> : <Home /> }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;