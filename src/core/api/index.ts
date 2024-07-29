import axios from 'axios';

import { auth } from './auth';

axios.defaults.baseURL = '/api';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = {
  auth,
};
