import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import booksService from '../../services/books';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Book = props => {

  const [book, setBook] = useState(null);

  const match = useRouteMatch('/books/:id');

  useEffect(() => {
    booksService.retrieveSpecificBook(match.params.id)
      .then(res => setBook(res))
      .catch(e => {
        props.flashNotification('Failed to load book', false);
      })
  }, [])

  // FIX BACKEND 

  return (
    <>
      <h2>Specific Book id: { match.params.id }</h2>
      <Row>
        <Col>
          <Card className='h-100'>
            <Card.Img style={{ width: '128px' }} variant="top" src={`${book ? book.bookCoverUrl : ''}`} className='ml-auto mr-auto' />
            <Card.Body>
              <Card.Title>{book ? book.title : ''}</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">{book ? book.subtitle : ''}</Card.Subtitle>
              <Card.Subtitle className="mb-3">{book && book.authors ? book.authors.join(', ') : ''}</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Book;