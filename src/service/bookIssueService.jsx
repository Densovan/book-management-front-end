import instance from "../utils/api";
import { envCons } from "../utils/env";

export const getBookIssueService = async (params) => {
  try {
    const res = await instance.get(
      `${envCons.baseUrl}/api/book-issue/all-books-issues`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const addBookIssueService = async (params) => {
  try {
    const res = await instance.post(
      `${envCons.baseUrl}/api/book-issue/create-book-issue`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const updateBookIssueService = async (params) => {
  try {
    const res = await instance.put(
      `${envCons.baseUrl}/api/book-issue/update-book-issue/${params.id}`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const deleteBookIssueService = async (params) => {
  try {
    const res = await instance.delete(
      `${envCons.baseUrl}/api/book-issue/delete-book-issue`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};

export const getBookIssueByIdService = async (params) => {
  try {
    const res = await instance.get(
      `${envCons.baseUrl}/api/book-issue/get-book-issue-by-id`,
      params
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.error("GetBooks failed:", error.response?.data || error.message);
  }
};
