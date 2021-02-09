import axios from 'axios';

const baseUrl = 'http://localhost:3001/logout'

const logout = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: baseUrl,
      withCredentials: true,
    })
    return response.data
  } catch (error) {
    if (error.response.data) throw error.response.data;
    throw error;
  }
}

export default {
  logout,
}