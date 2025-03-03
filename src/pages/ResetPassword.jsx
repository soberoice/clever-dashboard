import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

export default function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-screen">
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 flex justify-center bg-blue-50 h-full"
      >
        <img src="Clever.jpg" alt="" className=" m-0" />
      </div>
      <div className="flex-1 flex justify-center h-full items-center">
        <div>
          <div
            style={{ width: "350px" }}
            className="mt-12 rounded-2xl flex flex-col py-4 px-12 "
          >
            <p className=" -mt-4 m-4 w-20">
              <img src="lock.jpg" alt="" />
            </p>
            <p className="text-3xl mt-2 mb-2">Reset-password</p>
            <p className="text-sm text-gray-700 mb-4">
              Enter your email and we'll send a link
            </p>
            <form className="flex flex-col w-full">
              <label className="text-gray-500" htmlFor="contact">
                E-mail or Phone number
              </label>
              <input
                placeholder="Enter your e-mail or phone number"
                className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-96 p-3"
                type="text"
                id="contact"
              />
              <button
                type="submit"
                className="hover:bg-blue-400 bg-blue-500 w-96 rounded-lg py-2 cursor-pointer text-white mb-2"
                onClick={navigate("/changepassword")}
              >
                Send me the link
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
