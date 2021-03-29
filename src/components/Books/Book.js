import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import booksService from '../../services/books';

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
    <div>
      <div>
        <img style={{ width: '150px' }} variant="top" src={`${book ? book.bookCoverUrl : ''}`} />
        <div>
          { book ? <button onClick={handleReadChange}>Mark as '{ book.read ? 'unread' : 'read' }'</button> : null }
          { book ? <a target="_blank" href={book.linkToPurchase}><button>Purchase</button></a> : null }
          { book ? <button onClick={handleDelete}>Delete</button> : null }
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
    </div>
  );
}

export default Book;