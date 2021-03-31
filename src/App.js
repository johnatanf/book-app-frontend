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
import './css/style.css';

const App = () => {
  
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState({ message: null, status: null }); // status: success, failure, info 
  const [notificationTimerId, setNotificationTimerId] = useState(null);

  const flashNotification = (message, status) => {
    if (notificationTimerId) {
      clearTimeout(notificationTimerId);
      setNotificationTimerId(null);
    }

    setNotification({ message, status })

    const timerId = setTimeout(() => {
      setNotification({ message: null, status: null });
    }, 5000)

    setNotificationTimerId(timerId);
  }

  useEffect(() => {
    usersService.checkLoggedIn()
      .then(response => setUser(response))
      .catch(error => setUser(null));
  }, [])
  
  return (
    <Router basename='/book-app-frontend'>
      <div>
        <Switch>
          <Route path='/search'>
            { !user ? <Redirect to='/' /> : <BookSearcher user={user} setUser={setUser} notification={notification} flashNotification={flashNotification} /> }
          </Route>
          <Route path='/books/:id'>
            { !user ? <Redirect to='/' /> : <Book user={user} setUser={setUser} notification={notification} flashNotification={flashNotification} /> }
          </Route>
          <Route path='/books'>
            { !user ? <Redirect to='/' /> : <Books user={user} setUser={setUser} notification={notification} flashNotification={flashNotification} /> }
          </Route>
          <Route path='/login'>
            { user ? <Redirect to='/books' /> : <Login setUser={setUser} flashNotification={flashNotification} /> }
          </Route>
          <Route path='/signup'>
            { user ? <Redirect to ='/books' /> : <SignUp setUser={setUser} flashNotification={flashNotification} /> }
          </Route>
          <Route path='/'>
            { user ? <Redirect to='/books' /> : <Home /> }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;