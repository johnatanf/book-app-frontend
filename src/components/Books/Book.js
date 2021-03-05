import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import booksService from '../../services/books';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

const Book = ({ flashNotification }) => {

  const [book, setBook] = useState(null);

  const match = useRouteMatch('/books/:id');
  let history = useHistory();

  const handleReadChange = async event => {
    try {
      event.preventDefault();
      if (event.target.classList.contains('disabled')) return;
      event.target.classList.add('disabled');
      await booksService.toggleRead(match.params.id, book.read);
      setBook({
        ...book,
        read: !book.read,
      })
      event.target.classList.remove('disabled');
      flashNotification(`Successfully marked book as ${book.read ? 'unread' : 'read'}!`, true);
    } catch (error) {
      flashNotification('Failed to update book', false);
    }
  }
  
  const handleDelete = async event => {
    try {
      event.preventDefault();
      if (event.target.classList.contains('disabled')) return;
      event.target.classList.add('disabled');
      await booksService.deleteBook(match.params.id);
      history.push('/books');
      flashNotification('Successfully removed book from reading list!', true);
    } catch (error) {
      flashNotification('Failed to delete book', false);
    }
  }

  useEffect(() => {
    booksService.retrieveSpecificBook(match.params.id)
      .then(res => setBook(res))
      .catch(e => {
        flashNotification('Failed to load book', false);
      })
  }, [])

  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card>
            <ListGroup>
              <ListGroup.Item className='d-flex flex-column'>
                <div className='mr-5 d-flex flex-row align-items-center'>
                  <Card.Img style={{ width: '150px' }} variant="top" src={`${book ? book.bookCoverUrl : ''}`} className='ml-auto mr-auto' />  
                  <div  className='d-flex flex-column ml-5'>
                    { book ? <Button onClick={handleReadChange} className='mt-3' variant="success">Mark as '{ book.read ? 'unread' : 'read' }'</Button> : null }
                    { book ? <Button as='a' target='_blank' href={book.linkToPurchase} className='mt-3' variant="primary">Purchase</Button> : null }
                    { book ? <Button onClick={handleDelete} className='mt-3' variant="danger">Delete</Button> : null }
                  </div>
                </div>
                <div className='mt-5'>
                  { book && book.title ? <h1>{book.title}</h1> : null }
                  { book && book.subtitle ? <h2 className="text-muted">{book.subtitle}</h2> : null }
                  { book && book.authors ? <p>Author(s): { book.authors.join(', ') }</p> : null }
                  { book && book.categories ? <p>Categories: {book.categories.join(', ')}</p> : null }
                  { book && book.releaseDate ? <p>Release Date: { book.releaseDate }</p> : null }
                  { book && book.rating ? <p>Rating: { book.rating }</p> : null }
                  { book && book.pageCount ? <p>Number of pages: { book.pageCount }</p> : null}
                  { book && book.printedPageCount ? <p>Number of printed pages: { book.printedPageCount }</p> : null}
                </div>                
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Book;