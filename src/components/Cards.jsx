import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import FundWalletForm from "./FundingWalletForm";
import { CircularProgress } from "@mui/material";
import { useAuth } from "../contexts/authentication";

export default function Cards({ balance }) {
  const [modal, setModal] = useState(false);
  const { loading } = useAuth();
  function toggleModal() {
    setModal(!modal);
  }
  return (
    <div className="flex w-full mt-3 justify-between overflow-x-auto ">
      <div
        className="bg-white border border-gray-200 rounded-xl p-6"
        style={{ width: "380px", height: "190px" }}
      >
        <span className="flex justify-between" style={{ color: "#ADB5BD" }}>
          <img src="/email.png" alt="" />
          <SlOptionsVertical />
        </span>
        <div className="flex justify-between">
          <span className="flex flex-col mt-4">
            <span className="text-xs md:text-sm">Wallet Balance</span>{" "}
            <span className="text-3xl md:text-4xl w-40 ">
              &#x20A6; {balance}
            </span>
          </span>
          <button
            onClick={toggleModal}
            className="w-28 h-10 rounded-lg mt-auto text-sm"
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
            <span className="text-xs md:text-sm">Total SMS Sent</span>{" "}
            <span className="text-3xl md:text-4xl w-40">6,789</span>
          </span>
          <button
            className="w-20 h-6 rounded-lg mt-auto flex justify-center yext-sm"
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
            <span className="text-xs md:text-sm">Carts Recovered</span>{" "}
            <span className="text-3xl md:text-4xl w-40">5,678</span>
          </span>
          <button
            className="w-20 h-6 rounded-lg mt-auto flex justify-center "
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
      {/* FUND WALLET MODAL */}
      {modal && <FundWalletForm toggleModal={toggleModal} />}
    </div>
  );
}
