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
  // const amount = localStorage?.getItem("amountToPay");

  //SIGN IN FUNCTION
  const signIn = async (formData) => {
    setLoading(true);
    setError(null);
    setMessage("");
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

      console.log(response);

      setToken(authToken);
      setUser(userData);
      navigate("/dashboard");
      setMessage("Signed in Successfully");
      setTimeout(() => {
        setMessage("");
      }, 6000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 9000);
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
      setTimeout(() => {
        setError("");
      }, 9000);
    }
  };

  //UPDATE PROFILE FUNCTION
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
      setTimeout(() => {
        setMessage("");
      }, 9000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 9000);
    }
  };

  // FUNCTION FOR FUNDING WALLET
  const initializeTransaction = async (amount) => {
    const amountPayload = {
      amount: amount,
    };
    setMessage("");
    setLoading(true);
    setError(null);

    try {
      console.log(amount);
      const response = await axios.post(
        "https://smsapi-0110.jarapay.ng/api/v1/payment/paystack/initialize",
        amountPayload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response);
      // Redirect the user to the authorization URL
      window.location.href = response.data.data[0].url;

      setMessage("Paystack Initialized");
      setTimeout(() => {
        setMessage("");
      }, 9000);
    } catch (error) {
      setError(err.response?.data?.message || "Something went wrong");
      console.error(
        "Error initializing transaction:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 9000);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setUser,
        user,
        signUp,
        token,
        signIn,
        loading,
        setToken,
        error,
        updateProfile,
        message,
        setMessage,
        initializeTransaction,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
