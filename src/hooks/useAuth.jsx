import React, { useState } from "react";
import { LoginSevice } from "../service/authService";

export const UseAuth = async () => {
  const [loading, setLoading] = useState(false);
  const login = async (params) => {
    console.log(params, "=====params");
    setLoading(true);
    const auth = await LoginSevice(params);
    setLoading(false);
    return auth;
  };
  return { login, loading, setLoading };
};
