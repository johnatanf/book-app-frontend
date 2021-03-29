import React, {useState, useEffect} from 'react';
import BookGrid from './BookGrid';
import booksService from '../../services/books';

const Books = ({ flashNotification }) => {

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
    <>
      
      <div>
        <h3>Reading list</h3>

        {
          !books.length
          ?
          <div>
            {message}
          </div>
          :
          null
        }
        {
          books
            .filter(book => book.read === false)
            .map(book => <BookGrid key={book._id} book={book}/>)
        }
      </div>

      <hr />
      { 
        books.length
        ?
        <div>
            <h3>Already read</h3>
          {
            books
              .filter(book => book.read)
              .map(book => <BookGrid key={book._id} book={book}/>)
          }
        </div>
        :
        null
      }
      
    </>
  );
}

export default Books;