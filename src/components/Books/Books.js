import React, {useState, useEffect} from 'react';
import BookGrid from './BookGrid';
import booksService from '../../services/books';
import Card from '../Card/Card';

const Books = ({ flashNotification }) => {

  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    booksService.retrieveBooks()
      .then(res => {
        setBooks(res);
        if(!res.length) {
          setMessage('Looks like your reading list is empty. Start adding books to your list by clicking the search button!');
        } else {
          setMessage('');
        }
      })
      .catch(err => {
        flashNotification('Failed to retrieve books. Please reload the page and try again.', false);
      })
  }, [])
  
  return (
    <Card>
      
    </Card>
  );
}

export default Books;