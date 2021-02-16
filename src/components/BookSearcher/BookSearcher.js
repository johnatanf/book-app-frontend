import React, { useState } from 'react';
import BookGrid from '../Books/BookGrid';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import searchService from '../../services/search';
import Row from 'react-bootstrap/Row';

const BookSearcher = () => {

  const [searchedBooks, setSearchedBooks] = useState([]);
  
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await searchService.search(event.target.search.value);
    setSearchedBooks(response)
  }
  
  return (
    <>
      <h2>Search</h2>
      <Form inline onSubmit={handleSubmit}>
        <Form.Control id='search' size="lg" type="text" placeholder="Search..." />
        <Button type="submit" className="mb-2">
          Search
        </Button>
      </Form>
      { searchedBooks.length ? <h3>Results</h3> : null }
      { searchedBooks.length 
        ?
        (
          <Row>
            {searchedBooks.map(book => <BookGrid key={book.googleBookId} book={book} />)}
          </Row>
        )
        :
        null
      }
    </>
  );
}

export default BookSearcher;