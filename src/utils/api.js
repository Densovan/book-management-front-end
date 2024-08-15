// import axios from "axios";

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_PUBLIC_API,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// const setAuthorizationToken = (token) => {
//   if (token) {
//     instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete instance.defaults.headers.common["Authorization"];
//   }
// };

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     setAuthorizationToken(token);
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default instance;

import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API, // Replace with your API base URL
  timeout: 10000, // Optional: set a timeout for requests
});

// Request interceptor to add authorization token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage or any other secure place
    const token = localStorage.getItem("token");

    if (token) {
      // Add the token to request headers
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally (e.g., log out the user on 401 errors)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error("Unauthorized access - logging out");
      // Optionally, clear token and redirect to login
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // Adjust this based on your routing
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
