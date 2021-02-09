import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import usersService from './services/users';
import Book from './components/Books/Book';
import Books from './components/Books/Books';
import BookSearcher from './components/BookSearcher/BookSearcher';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

const App = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    usersService.checkLoggedIn()
      .then(response => setUser(response))
      .catch(error => setUser(null));
  }, [])
  
  return (
    <Router>
      <NavBar user={user} />
      <Container>
        <Switch>
          <Route path='/search'>
            { !user ? <Redirect to='/' /> : <BookSearcher /> }
          </Route>
          <Route path='/books/:id'>
            { !user ? <Redirect to='/' /> : <Book /> }
          </Route>
          <Route path='/books' component={Books}>
            { !user ? <Redirect to='/' /> : <Books /> }
          </Route>
          <Route path='/login'>
            { user ? <Redirect to='/books' /> : <Login /> }
          </Route>
          <Route path='/signup'>
            { user ? <Redirect to ='/books' /> : <SignUp /> }
          </Route>
          <Route path='/'>
            { user ? <Redirect to='/books' /> : <Home /> }
          </Route>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;