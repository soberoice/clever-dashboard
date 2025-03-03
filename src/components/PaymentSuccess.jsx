import React from "react";
import { Link } from "react-router";

export default function PaymentSuccess() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className="bg-white rounded-xl flex items-center justify-center flex-col shadow-md"
        style={{ width: "514px", height: "420px" }}
      >
        <img src="/Successful.png" alt="" />
        <p className="text-2xl">Wallet Funding Successful!</p>
        <Link to={"/home/wallets"}>
          <button
            style={{
              width: "466px",
              height: "40px",
              backgroundColor: "#4263EB",
            }}
            className="text-white rounded-xl mt-8"
          >
            View Order
          </button>
        </Link>
      </div>
    </div>
  );
}
