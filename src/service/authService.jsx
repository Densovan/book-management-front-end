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
import { envCons } from "../utils/env";

export const LoginService = async (params) => {
  try {
    const res = await instance.post(
      `${envCons.baseUrl}/api/auth/login`,
      params
    ); // Use relative URL
    const data = res.data;
    return data;
  } catch (error) {
    // console.error("Login failed:", error.response?.data || error.message);
    throw error;
  }
};
