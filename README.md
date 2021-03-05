# book-app-frontend 

## Technologies 

Front-end: React and Bootstrap  
Back-end: MongoDB, Express, Node.js (view back-end repository [here](https://github.com/johnatanf/book-app-backend/))

## Features 

### Basic authentication and authorization 
- Basic user creation (username, name, password)
- A username is required to search for books and view added books 
- Token authentication [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### Search 
- Retrieves a list of books matching the search query. The books are retrieved from [Google Books Api](https://developers.google.com/books)
- Users can add a book to their reading list by clicking the 'add' button 

### Reading list 
- Added books are displayed here in a grid that contains the book's thumbnail, title, subtitle and author 
- Clicking the 'view' button retrieves more specific information about the book 
- Separated into two parts: 1) reading list (containing unread books) and 2) already read (containing read books)

### Specific book 
- When viewing a specific book, the following information is displayed: title, subtitle, author(s), categories, release date, rating, number of pages and number of printed pages 
- 'Mark as read' functionality: mark book as 'read' or 'unread' 
- Delete functionality: removes book from user's list 
- Contains button that links to Google Play purchase link (if available) 