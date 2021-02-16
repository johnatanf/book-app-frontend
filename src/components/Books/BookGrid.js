import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BookGrid = ({ book }) => {
  
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='text-center'>
      <Card className='mb-3'>
        <Card.Img style={{ width: '128px' }} variant="top" src={`${book ? book.bookCoverUrl : ''}`} className='ml-auto mr-auto' />
        <Card.Body>
          <Card.Title>{book ? book.title : ''}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">{book ? book.subtitle : ''}</Card.Subtitle>
          <Card.Subtitle className="mb-3">{book ? book.authors.join(', ') : ''}</Card.Subtitle>          
          <Button variant="primary">View</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookGrid;