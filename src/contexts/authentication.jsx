import { createContext, useState, useContext } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";

// Create AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
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

      setUser(response?.data?.data?.user); // Assuming API returns user details
      console.log(response?.data?.data?.user);
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
      const response = await axios.post(
        "https://smsapi-0110.jarapay.ng/api/v1/auth/register",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      //   setUser(response?.data?.user);
      navigate("/signin");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
