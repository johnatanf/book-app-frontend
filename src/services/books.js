import axios from 'axios';

const baseUrl = 'http://localhost:3001/books'

const retrieveBooks = async () => {
  const response = await axios({
    method: 'get',
    url: baseUrl,
    withCredentials: true,
  })
  return response.data;
}

const retrieveSpecificBook = async (id) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}/${id}`,
      withCredentials: true,
    })
    return response.data;
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

const addBookToReadingList = async (googleBookId, title, subtitle, authors, bookCoverUrl) => {
  try { 
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
      withCredentials: true,
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
}