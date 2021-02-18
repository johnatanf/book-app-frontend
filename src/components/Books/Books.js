import React, {useState, useEffect} from 'react';
import BookGrid from './BookGrid';
import booksService from '../../services/books';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Books = ({ flashNotification }) => {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    booksService.retrieveBooks()
      .then(res => {
        setBooks(res);
      })
      .catch(err => {
        flashNotification('Failed to retrieve books. Please reload the page and try again.', false);
      })
  }, [])
  
  return (
    <>
      
      <Row className='mb-5'>
        <Col className='mb-3' sm={{ span: 12 }}>
          <h3>Reading list</h3>
        </Col>
        {
          books
            .filter(book => book.read === false)
            .map(book => <BookGrid key={book._id} book={book}/>)
        }
      </Row>
      <hr />
      <Row>
        <Col className='my-3' sm={{ span: 12 }}>
          <h3>Already read</h3>
        </Col>
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