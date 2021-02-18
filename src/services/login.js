import axios from 'axios';
import config from '../config/config';

const baseUrl = `${config.baseUrl}/login`

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