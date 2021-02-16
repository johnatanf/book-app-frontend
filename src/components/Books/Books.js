import React, {useState, useEffect} from 'react';
import BookGrid from './BookGrid';
import booksService from '../../services/books';
import Row from 'react-bootstrap/Row';

const Books = () => {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    booksService.retrieveBooks()
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => {
        console.log(err)
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
            .map(book => <BookGrid book={book}/>)
        }
      </Row>
      <h3>Already read</h3>
      <Row>
        {
          books
            .filter(book => book.read)
            .map(book => <BookGrid book={book}/>)
        }
      </Row>
    </>
  );
}

export default Books;