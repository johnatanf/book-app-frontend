import React, { useState } from 'react';
import BookGrid from '../Books/BookGrid';
import searchService from '../../services/search';

const BookSearcher = ({ flashNotification }) => {

  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState('');
  
  const handleSubmit = async event => {
    event.preventDefault();
    const response = await searchService.search(event.target.search.value);
    setSearchedBooks(response)
  }
  
  return (
    <>
      <div>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <input onChange={event => setQuery(event.target.value)} value={query} id='search' type="text" placeholder="Search..."/>
          <button type="submit">Search</button>
        </form>
      </div>
      
      { searchedBooks.length 
      ? <h3>Search results</h3>
      : null 
      }
      
      { searchedBooks.length 
        ?
        (
          <div>
            {searchedBooks.map(book => 
              <BookGrid 
                key={book.googleBookId} 
                book={book}
                query={query}
                setSearchedBooks={setSearchedBooks}
                flashNotification={flashNotification} 
              />
            )}
          </div>
        )
        :
        null
      }
    </>
  );
}

export default BookSearcher;