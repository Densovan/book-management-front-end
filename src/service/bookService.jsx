import instance from "../utils/api";
import { envCons } from "../utils/env";

export const GetBookService = async (params) => {
  try {
    const res = await instance.get(
      `${envCons.baseUrl}/api/book/all-books`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const getABook = async (params) => {
  try {
    const res = await instance.get(
      `${envCons.baseUrl}/api/book/get-book/${params}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const addBookService = async (params) => {
  try {
    const res = await instance.post(
      `${envCons.baseUrl}/api/book/create-book`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const updateBook = async (params) => {
  try {
    const res = await instance.put(
      `${envCons.baseUrl}/api/book/update-book`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const deleteBookService = async (params) => {
  try {
    const res = await instance.delete(
      `${envCons.baseUrl}/api/book/delete-book/${params}`
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};
