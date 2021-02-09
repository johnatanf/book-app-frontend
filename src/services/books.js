import axios from 'axios';

const baseUrl = 'http://localhost:3001/books'

const retrieveBooks = async (username, password) => {
  const response = await axios({
    method: 'get',
    url: baseUrl,
    withCredentials: true,
  })
  return response;
}

export default {
  retrieveBooks,
}