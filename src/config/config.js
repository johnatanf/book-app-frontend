let baseUrl = 'https://book-app-backend-5.herokuapp.com';

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  baseUrl = 'http://localhost:3001';
}

export default {
  baseUrl,
}
