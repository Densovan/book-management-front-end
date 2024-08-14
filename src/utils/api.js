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
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default instance;

// utils/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthorizationToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    setAuthorizationToken(token);
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
