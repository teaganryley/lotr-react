import axios from 'axios';

const token = process.env.REACT_APP_LOTR_TOKEN;

const api = axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  headers: { Authorization: `Bearer ${token}` },
});

export default api;
