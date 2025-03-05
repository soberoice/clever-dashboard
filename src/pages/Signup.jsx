import React from "react";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="md:flex items-center h-screen">
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 flex justify-center bg-blue-50 md:h-full"
      >
        <img
          src="Clever.jpg"
          alt=""
          className="block md:block hidden h-full m-0"
        />
      </div>
      <div className="md:flex-1 flex justify-center items-center bg-white h-full">
        <SignupForm />
      </div>
    </div>
  );
}
