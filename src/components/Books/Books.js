import React, {useState, useEffect} from 'react';
import BookContainer from './BookContainer';
import booksService from '../../services/books';
import BookGrid from '../Books/BookGrid';
import Card from '../Card/Card';

const Books = ({ user, setUser, flashNotification }) => {

  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    booksService.retrieveBooks()
      .then(res => {
        setBooks(res);
        if(!res.length) {
          setMessage('Looks like your reading list is empty. Start adding books to your list by clicking the search button!');
        } else {
          setMessage('');
        }
      })
      .catch(err => {
        flashNotification('Failed to retrieve books. Please reload the page and try again.', false);
      })
  }, [])
  
  return (
    <Card 
      user={user} 
      setUser={setUser}
      flashNotification={flashNotification}
    >
      {books.filter(book => !book.read).length 
      ? (
        <>
          <h2 className="books__heading">Reading list</h2>
          <BookContainer>
            {books
              .filter(book => !book.read)
              .map(book =>
                <BookGrid
                  key={book._id}
                  book={book}
                />
            )}
          </BookContainer>
        </>
      )
      : null
      }

      {books.filter(book => book.read).length 
      ? (
        <>
          <h2 className="books__heading">Already read</h2>
          <BookContainer>
            {books
              .filter(book => book.read)
              .map(book =>
                <BookGrid
                  key={book._id}
                  book={book}
                />
            )}
          </BookContainer>
        </>
      )
      : null
      }

      
    </Card>
  );
}

export default Books;