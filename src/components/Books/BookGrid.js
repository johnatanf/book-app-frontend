import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import booksServices from '../../services/books';

const BookGrid = ({ book, flashNotification }) => {

  const handleAdd = async event => {
    try {
      event.preventDefault();
      const { googleBookId, title, subtitle, authors, bookCoverUrl } = book;
      await booksServices.addBookToReadingList(
        googleBookId,
        title,
        subtitle,
        authors,
        bookCoverUrl
      )
      flashNotification('Successfully added book to reading list!', true);
    } catch (error) {
      flashNotification('Failed to add book to reading list', false);
    }
  }
  
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='mb-3 text-center'>
      <Card className='h-100'>
        <Card.Img style={{ width: '128px', height: '200px' }} variant="top" src={`${book ? book.bookCoverUrl : ''}`} className='ml-auto mr-auto' />
        <Card.Body>
          <Card.Title>{book ? book.title : ''}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">{book ? book.subtitle : ''}</Card.Subtitle>
          <Card.Subtitle className="mb-3">{book.authors ? book.authors.join(', ') : ''}</Card.Subtitle>
          { book.alreadyAdded ? <Card.Subtitle className="mb-3 text-muted">Already in reading list</Card.Subtitle> : null }
          { book.alreadyAdded ? <Button className='mt-3' variant="primary">View</Button> : null } 
          { !book.alreadyAdded ? <Button onClick={handleAdd} className='mt-3' variant="primary">Add</Button> : null } 
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookGrid;