// import instance from "../utils/api";
// export const LoginService = async (params) => {
//   console.log(params, "===params");
//   try {
//     const res = await instance.post("/auth/login", params);
//     const data = res.data;
//     return data;
//   } catch (error) {
//     console.error("login failed", e);
//   }
// };

import instance from "../utils/api";

export const LoginService = async (params) => {
  console.log(params, "===params");
  try {
    const res = await instance.post(
      "http://localhost:8080/api/auth/login",
      params
    ); // Use relative URL
    const data = res.data;
    return data;
  } catch (error) {
    // console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
