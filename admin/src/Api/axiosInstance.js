import axios from 'axios'

const axiosInstace = axios.create({
  baseURL: 'https://stackhire-8hqy.onrender.com/api/admin',
  withCredentials: true
})  

let isRefreshing = false;

axiosInstace.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log(error.response);
      
      if (!isRefreshing) {
        isRefreshing = true;
        try {
          await axiosInstace.post("/refresh-token");
          isRefreshing = false;
          return axiosInstace(originalRequest);
        } catch (refreshError) {
          isRefreshing = false;
          window.location.replace("/login");
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
)

export default axiosInstace;
