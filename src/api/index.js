import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;

let authToken = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null;

const axiosIntance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
  });

export default axiosIntance;