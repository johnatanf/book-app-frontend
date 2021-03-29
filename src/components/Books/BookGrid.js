import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import booksService from '../../services/books';
import searchService from '../../services/search';
import notAvailableImage from '../../assets/image-not-available.png';

const BookGrid = ({ book, query, flashNotification, setSearchedBooks }) => {

  const match = useRouteMatch();
  let history = useHistory();

  const handleAdd = async event => {
    try {
      event.preventDefault();
      if (event.target.classList.contains('disabled')) return;
      event.target.classList.add('disabled');
      const { googleBookId, title, subtitle, authors, bookCoverUrl } = book;
      await booksService.addBookToReadingList(
        googleBookId,
        title,
        subtitle,
        authors,
        bookCoverUrl
      );
      const updatedBooks = await searchService.search(query);
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
    <div>
      <img style={{ width: '128px', height: '200px' }} src={book && book.bookCoverUrl ? book.bookCoverUrl : notAvailableImage} />
      <div className='d-flex flex-column justify-content-between'>
        <div>
          <h2>{book ? book.title : ''}</h2>
          <h3>{book ? book.subtitle : ''}</h3>
          <h3>{book.authors ? book.authors.join(', ') : ''}</h3>
        </div>
        <div>
          { book._id && match.path === '/search' ? <h3 className="mb-3 text-muted">Already in reading list</h3> : null }
          { book._id ? <button onClick={handleView}>View</button> : null } 
          { !book._id ? <button onClick={handleAdd}>Add</button> : null }
        </div>
      </div>
    </div>
  );
}

export default BookGrid;