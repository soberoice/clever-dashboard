import React, { useState } from "react";
import RecentTransactions from "./RecentTransactions";
import FundWalletForm from "./FundingWalletForm";
import VirtualAccountForm from "./VirtualAccountForm";

export default function Wallets() {
  const [modal, setModal] = useState(false);
  const [showVAF, setShowVAF] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }
  function toggleVirtualAccountModal() {
    setShowVAF(!showVAF);
  }
  return (
    <div>
      <div className="w-full mt-8 flex flex-col ">
        <div
          className="w-11/12 bg-white mx-auto flex justify-between p-8 shadow-md rounded-xl"
          style={{ height: "172px" }}
        >
          <span className="flex gap-8  ">
            <img
              style={{ width: "153px", height: "120px" }}
              src="../public/illustration.png"
              alt=""
            />
            <span style={{ widows: "130px" }} className="flex gap-2 flex-col">
              <p className="text-4xl">&#x20A6; 0.00</p>
              <p style={{ color: "#828282" }} className="text-sm">
                Total Wallet Balance
              </p>
              <button
                style={{
                  width: "130px",
                  height: "38px",
                  backgroundColor: "#4263EB",
                }}
                className="text-white rounded-sm"
                onClick={toggleModal}
              >
                Fund Wallet
              </button>
            </span>
          </span>
          <span
            style={{ width: "337px" }}
            className="text-center flex flex-col gap-2 items-center"
          >
            <p className="text-bold text-xl">Virtual Account Details</p>
            <p style={{ color: "#828282" }} className="text-xs">
              Please complete your onboarding process to generate your virtual
              account
            </p>
            <button
              style={{
                width: "130px",
                height: "38px",
                backgroundColor: "#4263EB",
              }}
              className="text-white rounded-sm"
              onClick={toggleVirtualAccountModal}
            >
              Get Started
            </button>
          </span>
        </div>
        <RecentTransactions />
      </div>
      {modal && <FundWalletForm toggleModal={toggleModal} />}
      {showVAF && (
        <VirtualAccountForm
          toggleVirtualAccountModal={toggleVirtualAccountModal}
        />
      )}
    </div>
  );
}
