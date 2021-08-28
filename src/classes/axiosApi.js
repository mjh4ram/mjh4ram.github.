import axios from 'axios'
import UserStore from './userstore';


const axiosInstance = axios.create({
    baseURL: 'https://aslkdfjasljdfl.info/api/',
    timeout: 5000,
});

// django에서 나온값이 401일경우 재로그인을 유도한다
axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;

      if (error.status != undefined && error.response.status === 401 && error.response.statusText === "Unauthorized") {
        UserStore.isLoggedIn = false;
        UserStore.username = null;
        sessionStorage.clear();
      }
      return Promise.reject(error);
  }
);
export default axiosInstance
