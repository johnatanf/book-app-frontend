import React from 'react';

const BookContainer = (props) => {
  return (
    <div className="book-container">
      {props.children}
    </div>
  )
}

export default BookContainer;