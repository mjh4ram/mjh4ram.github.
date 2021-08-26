import axios from 'axios'
import UserStore from './userstore';


const axiosInstance = axios.create({
    baseURL: 'http://ec2-18-117-71-37.us-east-2.compute.amazonaws.com:8080/api/',
    timeout: 5000,
});

// django에서 나온값이 401일경우 재로그인을 유도한다
axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;

      if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
        UserStore.isLoggedIn = false;
        UserStore.username = null;
        sessionStorage.clear();
      }
      return Promise.reject(error);
  }
);
export default axiosInstance
