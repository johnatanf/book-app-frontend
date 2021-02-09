import axios from 'axios';

const baseUrl = 'http://localhost:3001/login'

const login = async (username, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: baseUrl,
      data: {
        username, password
      },
      withCredentials: true,
    })
    return response;
  } catch (error) {
    throw error.response.data;
  }
  
}

export default {
  login,
}