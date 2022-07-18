import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL;

const axiosIntance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

//TODO: uncomment when general modal added
axiosIntance.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    if (config.url?.startsWith("/")) {
      config.url = config.url.substring(1);
    }
	
    try {
      // add token to request
      let response = localStorage.getItem("token");
      let res = JSON.parse(response);
      if (res !== null && res.includes("ey")) {
        config.headers = {
          Authorization: `Bearer ${res}`,
        };
      }
    } catch (error) {}

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosIntance;
