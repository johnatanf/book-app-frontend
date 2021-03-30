import React from 'react';
import BookGrid from './BookGrid';

const BookContainer = (props) => {
  return (
    <div className="book-container">
      { props.books.map(book => 
        <BookGrid 
          book={book}
        />
      )}
    </div>
  )
}

export default BookContainer;