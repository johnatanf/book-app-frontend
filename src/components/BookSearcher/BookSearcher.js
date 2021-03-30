import React, { useState } from 'react';
import BookContainer from '../Books/BookContainer';
import BookGrid from '../Books/BookGrid';
import Card from '../Card/Card';
import searchService from '../../services/search';
import iconSet from "../../assets/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const BookSearcher = ({ user, setUser, flashNotification }) => {

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await searchService.search(event.target.search.value);
    setSearchedBooks(response)
  }
  
  return (
    <Card 
      user={user} 
      setUser={setUser}
      flashNotification={flashNotification}
    >
      <h2 className="books__heading">Search</h2>
      <div>
        <form className="search__form" autoComplete='off' onSubmit={handleSubmit}>
          <input className="search__input" onChange={event => setQuery(event.target.value)} value={query} id='search' type="text" placeholder="Search..."/>
          <button className="search__submit" type="submit">
            <IcomoonReact className="search__icon" iconSet={iconSet} icon="search" />
          </button>
        </form>
      </div>
      
      { searchedBooks.length 
      ? <h3>Search results</h3>
      : null 
      }
      
      { searchedBooks.length 
        ?
        (
          <BookContainer>
            {searchedBooks.map(book => 
              <BookGrid 
                key={book.googleBookId} 
                book={book}
                query={query}
                setSearchedBooks={setSearchedBooks}
                flashNotification={flashNotification} 
              />
            )}
          </BookContainer>
        )
        :
        null
      }
    </Card>
  );
}

export default BookSearcher;