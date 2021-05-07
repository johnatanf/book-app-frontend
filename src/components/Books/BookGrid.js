import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import booksService from '../../services/books';
import searchService from '../../services/search';
import utilities from '../../utilities';
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
      flashNotification(`${utilities.truncateSubtitle(book.title)}: Successfully added book to reading list!`, 'success');
    } catch (error) {
      flashNotification(`${utilities.truncateSubtitle(book.title)}: Failed to add book to reading list`, 'failure');
    }
  }

  const handleView = async event => {
    try {
      event.preventDefault();
      history.push(`/books/${book._id}`);
    } catch (error) {
      flashNotification(`${utilities.truncateSubtitle(book.title)}: Failed to view book`, 'failure');
    }
  }
  
  return (
    <div className="book-grid">
      <div>
        <img className="book-grid__img" src={book && book.bookCoverUrl ? book.bookCoverUrl : notAvailableImage} alt={`${book.title} book cover`}/>
        <h2 className="book-grid__title">{book ? book.title : ''}</h2>
        <h3 className="book-grid__subtitle">{book ? utilities.truncateSubtitle(book.subtitle) : ''}</h3>
        <h3 className="book-grid__author">{book.authors ? book.authors.join(', ') : ''}</h3>
      </div>
      { book._id && match.path === '/search' ? <h3 className="mb-3 text-muted">Already in reading list</h3> : null }
      { book._id ? <button className="book-grid__view-button" onClick={handleView}>View</button> : null } 
      { !book._id ? <button className="book-grid__view-button" onClick={handleAdd}>Add</button> : null }
    </div>
  );
}

export default BookGrid;