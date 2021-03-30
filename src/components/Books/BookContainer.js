import React from 'react';
import Book from './Book';

const BookContainer = (props) => {
  return (
    <div className="book-container">
      <Book 
        imgUrl={"https://books.google.com/books/content?id=yng_CwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
        title={"The Subtle Art of Not Giving a F*ck"}
        subtitle={"A Counterintuitive Approach to Living a Good Life"}
        author={"Mark Manson"}
      />
      <Book 
        imgUrl={"https://books.google.com/books/content?id=8SegnQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}
        title={"The Hobbit"}
        subtitle={""}
        author={"J. R. R. Tolkien"}
      />
      <Book 
        imgUrl={"https://books.google.com/books/content?id=tFrgCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
        title={"White Innocence"}
        subtitle={"Paradoxes of Colonialism and Race"}
        author={"Gloria Wekker"}
      />
    </div>
  )
}

export default BookContainer;