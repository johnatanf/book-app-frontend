import React from 'react';
import BookContainer from './BookContainer';

const Content = (props) => {
  return (
    <div className="content">
      <h2>Reading list</h2>
      <hr />
      <BookContainer />
    </div>
  )
}

export default Content;