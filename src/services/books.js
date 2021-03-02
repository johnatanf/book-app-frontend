import axios from 'axios';
import config from '../config/config';

const baseUrl = `${config.baseUrl}/books`

const retrieveBooks = async () => {
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
  const response = await axios({
    method: 'get',
    url: baseUrl,
    headers: { 'Authorization': `Bearer ${token}` }
  })
  return response.data;
}

const retrieveSpecificBook = async (id) => {
  try {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/${id}`,
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.data;
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

const addBookToReadingList = async (googleBookId, title, subtitle, authors, bookCoverUrl) => {
  try { 
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
    const response = await axios({
      method: 'post',
      url: `${baseUrl}`,
      data: {
        googleBookId,
        title,
        subtitle,
        authors,
        bookCoverUrl,
      },
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.status;
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

const toggleRead = async (id, read) => {
  try {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
    const response = await axios({
      method: 'put',
      url: `${baseUrl}/${id}`,
      data: {
        read: !read,
      },
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.status;
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

const deleteBook = async (id) => {
  try {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
    const response = await axios({
      method: 'delete',
      url: `${baseUrl}/${id}`,
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.status;
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

export default {
  retrieveBooks,
  retrieveSpecificBook,
  addBookToReadingList,
  toggleRead,
  deleteBook,
}