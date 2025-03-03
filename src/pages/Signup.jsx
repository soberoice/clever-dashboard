import React from "react";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="flex h-screen items-center">
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 flex justify-center bg-blue-50 h-full items-center"
      >
        <img src="Clever.jpg" alt="" className=" m-0 h-full" />
      </div>
      <div className="flex-1 flex justify-center">
        <SignupForm />
      </div>
    </div>
  );
}
