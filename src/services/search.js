import axios from 'axios';
import config from '../config/config';

const baseUrl = `${config.baseUrl}/search`;

const search = async (query) => {
  try {
    const response = await axios({
      method: 'get',
      url: `${baseUrl}?query=${query}`,
      withCredentials: true,
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