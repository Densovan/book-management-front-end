import React, { useEffect, useState, useCallback } from "react";
import {
  GetBookService,
  addBookService,
  deleteBookService,
  updateBookService,
} from "../service/bookService";

export const useAddBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addBook = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const addBook = await addBookService(params);
      return addBook;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    addBook,
    loading,
    error,
  };
};

export const useGetBooks = (shouldRefetch = false) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  // Function to fetch books
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const booksResponse = await GetBookService();
      setBooks(booksResponse.data);
    } catch (error) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  }, []);

  // Effect to fetch books when the component mounts or when shouldRefetch changes
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks, shouldRefetch]);

  return {
    loading,
    error,
    books,
    refetch: fetchBooks, // Expose the refetch function
  };
};

export const useDeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteBook = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const deleteBook = await deleteBookService(params);
      return deleteBook;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    deleteBook,
    loading,
    error,
  };
};

export const useUpdateBook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const updateBook = async (params) => {
    setLoading(true);
    setError(null);
    console.log(params, "==para,");
    try {
      const updateBook = await updateBookService(params);
      return updateBook;
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    updateBook,
    loading,
    error,
  };
};
