import axios from 'axios';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: 'https://fw9-backend-seven.vercel.app/',
  });
};

export default http;
