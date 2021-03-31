import React, { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import iconSet from "../../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Card from '../Card/Card';
import booksService from '../../services/books';

const Book = ({ user, setUser, notification, flashNotification }) => {

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
      flashNotification(`Successfully marked book as ${book.read ? 'unread' : 'read'}!`, 'success');
    } catch (error) {
      flashNotification('Failed to update book', 'failure');
    }
  }
  
  const handleDelete = async event => {
    try {
      event.preventDefault();
      if (event.target.classList.contains('disabled')) return;
      event.target.classList.add('disabled');
      await booksService.deleteBook(match.params.id);
      history.push('/books');
      flashNotification('Successfully removed book from reading list!', 'success');
    } catch (error) {
      flashNotification('Failed to delete book', 'failure');
    }
  }

  useEffect(() => {
    booksService.retrieveSpecificBook(match.params.id)
      .then(res => setBook(res))
      .catch(e => {
        flashNotification('Failed to load book', 'failure');
      })
  }, [])

  return (
    <Card
      user={user}
      setUser={setUser}
      notification={notification}
      flashNotification={flashNotification}
    >
      <div className="book">
        <div className="book__img-buttons-container">
          <img className="book__img" src={`${book ? book.bookCoverUrl : ''}`} />
          <div className="book__buttons">
            { book 
              ? <button className="book__button book__button--mark" onClick={handleReadChange}>
                  <IcomoonReact className="book__button-icon" iconSet={iconSet} icon="books" />
                  Mark as '{ book.read ? 'unread' : 'read' }'
                </button> 
              : null 
            }
            { book 
              ? <a target="_blank" href={book.linkToPurchase}>
                  <button className="book__button book__button--purchase">
                    <IcomoonReact className="book__button-icon" iconSet={iconSet} icon="cart" />
                    Purchase
                  </button>
                </a> 
              : null 
            }
            { book 
              ? <button className="book__button book__button--delete" onClick={handleDelete}>
                  <IcomoonReact className="book__button-icon" iconSet={iconSet} icon="bin2" />
                  Delete
                </button> 
              : null 
            }
          </div>
        </div>
        <div className="book__description">
          { book && book.title ? <h1 className="book__title">{book.title}</h1> : null }
          { book && book.subtitle ? <h2 className="book__subtitle">{book.subtitle}</h2> : null }
          { book && book.title ? <hr className="book__description-separator" /> : null }
          { book && book.authors ? <p className="book__authors"><span className="book__data-name">Author(s)</span>: { book.authors.join(', ') }</p> : null }
          { book && book.categories ? <p className="book__categories"><span className="book__data-name">Categories</span>: {book.categories.join(', ')}</p> : null }
          { book && book.releaseDate ? <p className="book__release-date"><span className="book__data-name">Release Date</span>: { book.releaseDate }</p> : null }
          { book && book.rating ? <p className="book__rating"><span className="book__data-name">Rating</span>: { book.rating }</p> : null }
          { book && book.pageCount ? <p className="book__number-of-pages"><span className="book__data-name">Number of pages</span>: { book.pageCount }</p> : null}
          { book && book.printedPageCount ? <p className="book__number-of-printed-pages"><span className="book__data-name">Number of printed pages</span>: { book.printedPageCount }</p> : null}
        </div>
      </div>
      
    </Card>
  );
}

export default Book;