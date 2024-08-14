import instance from "../utils/api";
export const LoginSevice = async (params) => {
  console.log(params, "===params");
  try {
    const res = await instance.post("/auth/login", params);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("login failed", e);
  }
};
