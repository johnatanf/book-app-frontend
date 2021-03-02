import axios from 'axios';
import config from '../config/config';

const baseUrl = `${config.baseUrl}/logout`

const logout = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: baseUrl,
    })
    localStorage.removeItem('token');
    return response.data
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

export default {
  logout,
}