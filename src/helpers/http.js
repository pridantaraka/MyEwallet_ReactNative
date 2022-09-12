import axios from 'axios';

const url = 'fw9-backend-seven.vercel.app';

const http = token => {
  const headers = {};
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return axios.create({
    headers,
    baseURL: url,
  });
};

export default http;
