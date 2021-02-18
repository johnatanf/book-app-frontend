import React, { useState } from 'react';
import BookGrid from '../Books/BookGrid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import searchService from '../../services/search';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BookSearcher = ({ flashNotification }) => {

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await searchService.search(event.target.search.value);
    setSearchedBooks(response)
  }
  
  return (
    <>
      <Row>
        <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card className='p-3'>
            <Form onSubmit={handleSubmit} className='d-flex'>
              <Form.Control onChange={event => setQuery(event.target.value)} value={query} id='search' size="lg" type="text" placeholder="Search..." />
              <Button type="submit" className="mb-2" size='lg'>
                Search
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
      
      { searchedBooks.length 
      ? <Row>
          <Col className='mb-3' sm={{ span: 12 }}>
            <h3>Reading list</h3>
          </Col>
        </Row>
      : null }
      { searchedBooks.length 
        ?
        (
          <Row>
            {searchedBooks.map(book => 
              <BookGrid 
                key={book.googleBookId} 
                book={book}
                query={query}
                setSearchedBooks={setSearchedBooks}
                flashNotification={flashNotification} 
              />
            )}
          </Row>
        )
        :
        null
      }
    </>
  );
}

export default BookSearcher;