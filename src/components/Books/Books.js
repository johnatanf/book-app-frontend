import React, {useEffect} from 'react';
import booksService from '../../services/books';

const Books = () => {
  
  useEffect(() => {
    booksService.retrieveBooks()
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <h2>Books</h2>
  );
}

export default Books;