import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://mapon.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    key: process.env.REACT_APP_MAPON_API_KEY,
  },
});

export default axiosClient;
