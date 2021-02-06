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
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

const App = () => {
  
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <NavBar user={user} />
      <Container>
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
      </Container>
      <Footer />
    </Router>
  );
}

export default App;