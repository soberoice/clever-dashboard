import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { useAuth } from "../contexts/authentication";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function SignupForm() {
  const vertical = "top";
  const horizontal = "right";
  const { signUp, loading, error, setError } = useAuth();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
  };

  return (
    <div>
      <Snackbar open={error} anchorOrigin={{ vertical, horizontal }}>
        <Alert severity="error">
          <p className="flex items-center flex justify-between w-60">
            {error}
            <IoCloseCircleOutline
              className="mb-auto ml-auto text-xl"
              onClick={() => setError("")}
            />
          </p>
        </Alert>
      </Snackbar>
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="rounded-2xl flex flex-col py-4 px-12 w-96 md:w-100 h-80vh items-center"
      >
        <p className="text-3xl mt-2 mb-2">Create Your Account</p>
        <p className="text-sm text-gray-700">it's easy and free</p>
        <form onSubmit={handleSubmit} className="mt-4">
          <span className="flex">
            <span>
              <label className="text-gray-500" htmlFor="first_name">
                First Name
              </label>
              <input
                placeholder="Enter your name"
                className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-38 mx-auto p-3"
                type="text"
                id="first_name"
                name="first_name"
                onChange={handleChange}
                required
              />
            </span>
            <span>
              <label className="text-gray-500" htmlFor="last_name">
                Last Name
              </label>
              <input
                placeholder="Enter your name"
                className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-38 p-3 mx-auto"
                type="text"
                id="last_name"
                name="last_name"
                onChange={handleChange}
                required
              />
            </span>
          </span>
          <label className="text-gray-500" htmlFor="contact">
            E-mail or phone number
          </label>
          <input
            placeholder="Enter your e-mail or phone number"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-80 p-3"
            type="text"
            id="contact"
            name="email"
            onChange={handleChange}
            required
          />
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-2 w-80 p-3"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
          <p className="text-sm text-gray-400 mb-2">8 characters at least</p>
          <button
            type="submit"
            className="hover:bg-blue-400 bg-blue-500 w-80 rounded-lg py-2 cursor-pointer text-white mb-2 mt-4"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                color="inhert"
                size="20px"
                className="my-auto"
              />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <p className="text-sm text-gray-700">or via other accounts</p>
        <span>
          <button className="cursor-pointer bg-white rounded-lg p-3 m-3 shadow-lg text-3xl w-14 h-14">
            <img src="GoogleLogo.jpg" alt="google" />
          </button>
          <button className="cursor-pointer bg-white rounded-lg p-3 m-3 shadow-lg text-3xl w-13 h-14">
            <img src="AppleLogo.jpg" alt="apple" />
          </button>
          <button className="cursor-pointer bg-white rounded-lg p-3 m-3 shadow-lg text-3xl text-blue-500">
            <FaFacebook />
          </button>
        </span>
        <span>
          <p>
            already have an account?{" "}
            <Link to="/signin" className="text-blue-700">
              Signin
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
}
