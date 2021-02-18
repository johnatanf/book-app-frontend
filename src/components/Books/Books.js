import React, {useState, useEffect} from 'react';
import BookGrid from './BookGrid';
import booksService from '../../services/books';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

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
      
      <Row className='mb-5'>
        <Col className='mb-3' sm={{ span: 12 }}>
          <h3>Reading list</h3>
        </Col>
        {
          !books.length
          ?
          <Col sm={{ span: 12 }}>
            <Alert className={!message ? 'd-none' : ''} variant='info'>
              {message}
            </Alert>
          </Col>
          :
          null
        }
        {
          books
            .filter(book => book.read === false)
            .map(book => <BookGrid key={book._id} book={book}/>)
        }
      </Row>
      <hr />
      { 
        books.length
        ?
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
        :
        null
      }
      
    </>
  );
}

export default Books;