import axios from 'axios';

const baseUrl = 'http://localhost:3001/users'

const checkLoggedIn = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: baseUrl,
      withCredentials: true,
    })
    return response.data;
  }
  catch (error) {
    throw error.response.data;
  }
}

export default {
  checkLoggedIn,
}