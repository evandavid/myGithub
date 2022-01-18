import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
  },
});

export default AxiosInstance;
