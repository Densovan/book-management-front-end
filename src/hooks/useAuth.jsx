// import React, { useState } from "react";
// import { LoginService } from "../service/authService"; // Corrected the import

// export const useAuth = () => {
//   // Changed to useAuth for consistency with naming conventions
//   const [loading, setLoading] = useState(false);

//   const login = async (params) => {
//     setLoading(true);
//     try {
//       const auth = await LoginService(params); // Corrected service name to match the import

//       return auth;
//     } catch (error) {
//       console.error("Login failed:", error);
//       throw error; // Optionally handle errors as needed
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { login, loading, setLoading };
// };

// hooks/useAuth.js
import React, { useState } from "react";
import { LoginService } from "../service/authService"; // Correct import
import { addUserService, GetUserService } from "../service/userService";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // To capture errors

  const login = async (params) => {
    setLoading(true);
    setError(null);
    try {
      const auth = await LoginService(params);
      return auth;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error); // Store the error for UI feedback
      throw error; // Optionally handle errors as needed
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error }; // Include error in return
};
