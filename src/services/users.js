import axios from 'axios';
import config from '../config/config';

const baseUrl = `${config.baseUrl}/users`;

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

const createUser = async (username, name, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: baseUrl,
      data: { username, name, password },
    })
    return response.data;
  }
  catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

export default {
  checkLoggedIn,
  createUser,
}