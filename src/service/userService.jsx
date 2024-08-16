import instance from "../utils/api";
import { envCons } from "../utils/env";

export const GetUserService = async (params) => {
  console.log(params, "praram<================");
  try {
    const res = await instance.get(
      `${envCons.baseUrl}/api/user/all-members?page=${params}&limit=10`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const getUser = async (params) => {
  try {
    const res = await instance.get(`${envCons.baseUrl}/api/user/get/${params}`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const addUserService = async (params) => {
  try {
    const res = await instance.post(
      `${envCons.baseUrl}/api/auth/regsiter`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const updateUserService = async (params) => {
  console.log(params);
  try {
    const res = await instance.put(
      `${envCons.baseUrl}/api/user/update/user-profile-by-admin`,
      {
        userId: params.id,
        name: params.name,
        //   email: params.email,
        role: params.role,
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const deleteUserService = async (params) => {
  try {
    const res = await instance.delete(
      `${envCons.baseUrl}/api/user/delete-user/${params}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const getProfileService = async (params) => {
  try {
    const res = await instance.get(`${envCons.baseUrl}/api/auth/get`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};
