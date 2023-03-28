import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token") || "",
    user: localStorage.getItem("user") || "",
    loading: false,
    error: null,
    isLogged: false,
  });

  const login = async (email, password) => {
    try {
      setAuthState({ ...authState, loading: true });
      const response = await axios.post(
        "https://africescape-api.onrender.com/api/v1/users/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.data.user);
      setAuthState({
        token: response.data.token,
        loading: false,
        error: null,
        user: response.data.data.user,
        isLogged: true,
      });
      console.log(authState);
    } catch (error) {
      setAuthState({
        ...authState,
        loading: false,
        error: error.message,
      });
    }
  };

  const signup = async (name, email, password, passwordConfirm) => {
    try {
      setAuthState({ ...authState, loading: true });
      const response = await axios.post(
        "https://africescape-api.onrender.com/api/v1/users/signup",
        { name, email, password, passwordConfirm }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.data.user);
      setAuthState({
        token: response.data.token,
        loading: false,
        error: null,
        user: response.data.data.user,
        isLogged: true,
      });
    } catch (error) {
      setTimeout(() => {
        setAuthState({
          ...authState,
          loading: false,
          error: error.response.data.message,
        });
      }, 1000);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({ token: "", loading: false, error: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
