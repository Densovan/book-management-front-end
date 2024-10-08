import { useState, useCallback, useEffect } from "react";
import {
  GetUserService,
  addUserService,
  updateUserService,
  getProfileService,
} from "../service/userService";
export const useAddUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const addUser = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const user = await addUserService(params);
      return user;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error); // Store the error for UI feedback
      throw error; // Optionally handle errors as needed
    } finally {
      setLoading(false);
    }
  };
  return { addUser, loading, error, user };
};

export const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To capture errors

  const updateUser = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const auth = await updateUserService(params);
      return auth;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error); // Store the error for UI feedback
      throw error; // Optionally handle errors as needed
    } finally {
      setLoading(false);
    }
  };
  return { updateUser, loading, error };
};

export const useGetUsers = ({ currentPage, shouldRefetch = false }) => {
  console.log(currentPage, "==page==");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pages, setPage] = useState(0);

  // Function to fetch books
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const userResponse = await GetUserService(currentPage);
      setUsers(userResponse.data);
      setTotalCount(userResponse.meta.total);
      setTotalPages(userResponse.meta.totalPages);
      setPage(userResponse.meta.page);
    } catch (error) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  // Effect to fetch books when the component mounts or when shouldRefetch changes
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, shouldRefetch]);

  return {
    loading,
    error,
    users,
    totalCount,
    totalPages,
    pages,
    refetch: fetchUsers, // Expose the refetch function
  };
};

export const useGetProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfileService();
        setUser(userData);
      } catch (error) {
        console.error(
          "Failed to fetch profile:",
          error.response?.data || error.message
        );
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { user, loading, error };
};
