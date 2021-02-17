import React from 'react';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import booksServices from '../../services/books';
import searchServices from '../../services/search';

const BookGrid = ({ book, query, flashNotification, setSearchedBooks }) => {

  let history = useHistory();

  const handleAdd = async event => {
    try {
      if (event.target.classList.contains('disabled')) return;
      event.target.classList.add('disabled');
      event.preventDefault();
      const { googleBookId, title, subtitle, authors, bookCoverUrl } = book;
      await booksServices.addBookToReadingList(
        googleBookId,
        title,
        subtitle,
        authors,
        bookCoverUrl
      );
      const updatedBooks = await searchServices.search(query);
      setSearchedBooks(updatedBooks);
      flashNotification('Successfully added book to reading list!', true);
    } catch (error) {
      flashNotification('Failed to add book to reading list', false);
    }
  }

  const handleView = async event => {
    try {
      event.preventDefault();
      history.push(`/books/${book._id}`);
    } catch (error) {
      flashNotification('Failed to view book', false);
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
          { book._id ? <Card.Subtitle className="mb-3 text-muted">Already in reading list</Card.Subtitle> : null }
          { book._id ? <Button onClick={handleView} className='mt-3' variant="primary">View</Button> : null } 
          { !book._id ? <Button onClick={handleAdd} className='mt-3' variant="primary">Add</Button> : null } 
        </Card.Body>
      </Card>
    </Col>
  );
}

export default BookGrid;