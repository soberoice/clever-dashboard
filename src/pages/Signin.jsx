import React from "react";
import SigninForm from "../components/SigninForm";

export default function Signin() {
  return (
    <div className="flex items-center h-screen">
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 flex justify-center bg-blue-50 h-full"
      >
        <img src="Clever.jpg" alt="" className=" m-0 h-full" />
      </div>
      <div className="flex-1 flex justify-center items-center bg-white h-full">
        <SigninForm />
      </div>
    </div>
  );
}
