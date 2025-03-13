import React from "react";
import SigninForm from "../components/SigninForm";
import { useAuth } from "../contexts/authentication";
import { Alert, Snackbar } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Signin() {
  const vertical = "top";
  const horizontal = "right";
  const { message, setMessage } = useAuth();
  return (
    <div className="md:flex items-center h-screen">
      <Snackbar
        open={message}
        autoHideDuration={1200}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert security="success">
          <p className="flex items-center flex justify-between w-60">
            {message}
            <IoCloseCircleOutline
              className="mb-auto ml-auto text-xl"
              onClick={() => setMessage("")}
            />
          </p>
        </Alert>
      </Snackbar>
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 hidden md:flex lg:h-full justify-center bg-blue-50 md:h-auto"
      >
        <img
          src="Clever.jpg"
          alt=""
          className="md:block hidden md:h-auto m-0 lg:h-full"
        />
      </div>
      <div className="md:flex-1 flex justify-center items-center bg-white h-full">
        <SigninForm />
      </div>
    </div>
  );
}
