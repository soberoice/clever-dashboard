import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import FundWalletForm from "./FundingWalletForm";

export default function Cards() {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="flex w-full mt-3 justify-between">
      <div
        className="bg-white border border-gray-200 rounded-xl      p-6"
        style={{ width: "380px", height: "190px" }}
      >
        <span className="flex justify-between" style={{ color: "#ADB5BD" }}>
          <img src="/email.png" alt="" />
          <SlOptionsVertical />
        </span>
        <div className="flex justify-between">
          <span className="flex flex-col mt-4">
            <span className="text-sm">Wallet Balance</span>{" "}
            <span className="text-4xl">&#x20A6; 0</span>
          </span>
          <button
            onClick={toggleModal}
            className="w-28 h-10 rounded-lg mt-auto"
            style={{ backgroundColor: "#4263EB", color: "white" }}
          >
            Fund Wallet
          </button>
        </div>
      </div>
      <div
        className="bg-white border border-gray-200 rounded-xl      p-6"
        style={{ width: "380px", height: "190px" }}
      >
        <span className="flex justify-between" style={{ color: "#ADB5BD" }}>
          <img src="/sms.png" alt="" />
          <SlOptionsVertical />
        </span>
        <div className="flex justify-between">
          <span className="flex flex-col mt-4">
            <span className="text-sm">Total SMS Sent</span>{" "}
            <span className="text-4xl">6,789</span>
          </span>
          <button
            className="w-20 h-6 rounded-lg mt-auto flex justify-center"
            style={{
              backgroundColor: "#ECFDF3",
              color: "green",
              border: "1px solid #D3F9D8",
            }}
          >
            <FaArrowUp className="my-auto text-sm mr-1" /> 100%
          </button>
        </div>
      </div>
      <div
        className="bg-white border border-gray-200 rounded-xl  p-6"
        style={{ width: "380px", height: "190px" }}
      >
        <span className="flex justify-between" style={{ color: "#ADB5BD" }}>
          <img src="/carts.png" alt="" />
          <SlOptionsVertical />
        </span>
        <div className="flex justify-between">
          <span className="flex flex-col mt-4">
            <span className="text-sm">Carts Recovered</span>{" "}
            <span className="text-4xl">5,678</span>
          </span>
          <button
            className="w-20 h-6 rounded-lg mt-auto flex justify-center"
            style={{
              backgroundColor: "#ECFDF3",
              color: "green",
              border: "1px solid #D3F9D8",
            }}
          >
            <FaArrowUp className="my-auto text-sm mr-1" /> 100%
          </button>
        </div>
      </div>{" "}
      {modal && <FundWalletForm toggleModal={toggleModal} />}
    </div>
  );
}
