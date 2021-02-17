import React, {useState, useEffect} from 'react';
import BookGrid from './BookGrid';
import booksService from '../../services/books';
import Row from 'react-bootstrap/Row';

const Books = ({ flashNotification }) => {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    booksService.retrieveBooks()
      .then(res => {
        setBooks(res.data.map(book => {
          return {
            ...book,
            alreadyAdded: true, // necessary to make buttons display as 'view' rather than 'add'
          }
        }));
      })
      .catch(err => {
        flashNotification('Failed to retrieve books. Please reload the page and try again.', false);
      })
  }, [])
  
  return (
    <>
      <h2>Books</h2>
      <h3>Reading list</h3>
      <Row>
        {
          books
            .filter(book => book.read === false)
            .map(book => <BookGrid key={book._id} book={book}/>)
        }
      </Row>
      <h3>Already read</h3>
      <Row>
        {
          books
            .filter(book => book.read)
            .map(book => <BookGrid key={book._id} book={book}/>)
        }
      </Row>
    </>
  );
}

export default Books;