import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const langCode = window.localStorage.getItem('Language') ?? 'en-US';

const axiosApp = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type' : 'application/json',
    'language': langCode
  },
});

export default axiosApp;