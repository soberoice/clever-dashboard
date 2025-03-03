import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage?.getItem("userData");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      // console.error("Failed to parse userData:", error);
      return null;
    }
  });
  const [token, setToken] = useState(localStorage?.getItem("authToken") || "");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signIn = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://smsapi-0110.jarapay.ng/api/v1/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      const userData = response?.data?.data?.user; // Assuming API returns user details
      const authToken = response.data.data.token;

      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("authToken", authToken);

      setToken(authToken);
      setUser(userData);
      navigate("/home/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Sign Up Function
  const signUp = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const updateResponse = await axios.post(
        "https://smsapi-0110.jarapay.ng/api/v1/auth/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      //   setUser(response?.data?.user);
      console.log(updateResponse);
      navigate("/signin");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (formData) => {
    setLoading(true);
    setError(null);
    setMessage("");
    try {
      const response = await axios.post(
        "https://smsapi-0110.jarapay.ng/api/v1/user/update_profile",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedUser = response.data.data;
      console.log(updatedUser);
      setUser(updatedUser);
      localStorage.setItem("userData", JSON.stringify(updatedUser));

      //   setUser(response?.data?.user);

      setMessage("Account Updated Successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signUp,
        signIn,
        token,
        setToken,
        loading,
        error,
        updateProfile,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
