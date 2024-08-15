import React, { useState, useEffect, useCallback } from "react";
import {
  getBookIssueService,
  addBookIssueService,
  deleteBookIssueService,
  updateBookIssueService,
} from "../service/bookIssueService";

export const useGetBookIssue = (shouldRefetch = false) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bookIssue, setBookIssue] = useState([]);
  const fetchBookIssue = useCallback(async () => {
    setLoading(true);
    try {
      const bookIssueResponse = await getBookIssueService();
      setBookIssue(bookIssueResponse.data);
    } catch (error) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchBookIssue();
  }, [fetchBookIssue, shouldRefetch]);

  return {
    loading,
    error,
    bookIssue,
    refetch: fetchBookIssue, // Expose the refetch function
  };
};

export const useAddBookIssue = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const addBookIssue = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const bookIssue = await addBookIssueService(data);
      return bookIssue;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error); // Store the error for UI feedback
      throw error; // Optionally handle errors as needed
    } finally {
      setLoading(false);
    }
  };
  return { addBookIssue, loading, error };
};

export const useUpdateBookIssue = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const updateBookIssue = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const bookIssue = await updateBookIssueService(data);
      return bookIssue;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error); // Store the error for UI feedback
      throw error; // Optionally handle errors as needed
    } finally {
      setLoading(false);
    }
  };
  return { updateBookIssue, loading, error };
};

export const useDeleteBookIssue = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const deleteBookIssue = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const bookIssue = await deleteBookIssueService(data);
      return bookIssue;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error); // Store the error for UI feedback
      throw error; // Optionally handle errors as needed
    } finally {
      setLoading(false);
    }
  };
  return { deleteBookIssue, loading, error };
};
