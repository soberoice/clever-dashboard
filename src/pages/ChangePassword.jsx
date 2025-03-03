import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";
import { Link } from "react-router";

export default function ChangePassword() {
  const [otp, setOtp] = React.useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  return (
    <div className="flex items-center h-screen">
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 flex justify-center bg-blue-50 h-full"
      >
        <img src="Clever.jpg" alt="" className=" m-0" />
      </div>
      <div className="flex-1 flex justify-center h-full items-center">
        <div className="flex flex-col items-center">
          <div
            style={{ width: "550px", height: "500px" }}
            className="mt-12 rounded-2xl flex flex-col py-4 px-12 items-center justify-center bg-blue-50 shadow-md rounded-xl"
          >
            <span
              className=" bg-blue-500 mb-auto -mt-4"
              style={{
                width: "550px",
                height: "70px",
                paddingTop: "0px",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                color: "white",
                borderRadius: "10px 10px 0px 0px",
              }}
            >
              <p className="my-auto text-xl font-bold">CHANGE PASSWORD</p>
            </span>
            <form className="flex flex-col w-full items-center gap-4 my-auto">
              <span className="flex flex-col">
                <label className="text-gray-500" htmlFor="otp">
                  Enter OTP
                </label>{" "}
                <MuiOtpInput
                  width="300px"
                  id="otp"
                  value={otp}
                  onChange={handleChange}
                />
              </span>
              <span className="flex flex-col w-full">
                <label className="text-gray-500" htmlFor="new-password">
                  New Password
                </label>
                <input
                  className="focus:outline-none rounded-lg shadow-lg bg-white mb-2 w-full p-3"
                  type="password"
                  id="new-password"
                  name="password"
                  onChange={handleChange}
                />
              </span>
              <span className="flex flex-col w-full">
                <label className="text-gray-500" htmlFor="confirm-password">
                  Confirm New Password
                </label>
                <input
                  className="focus:outline-none rounded-lg shadow-lg bg-white mb-2 w-full p-3"
                  type="password"
                  id="confirm-password"
                  name="password"
                  onChange={handleChange}
                />
              </span>
              <button
                type="submit"
                className="hover:bg-blue-400 bg-blue-500 w-full rounded-lg py-2 cursor-pointer text-white mb-2"
              >
                Send me the link
              </button>
            </form>
          </div>
          <p className="mt-6">
            already have an account?{" "}
            <Link to="/signin" className="text-blue-700">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
