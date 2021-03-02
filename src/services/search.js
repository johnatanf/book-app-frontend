import axios from 'axios';
import config from '../config/config';

const baseUrl = `${config.baseUrl}/search`;

const search = async (query) => {
  try {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
    const response = await axios({
      method: 'get',
      url: `${baseUrl}?query=${query}`,
      headers: { 'Authorization': `Bearer ${token}` }
    })
    return response.data
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

export default {
  search,
}