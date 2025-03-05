import React, { useEffect, useState } from "react";
import RecentTransactions from "./RecentTransactions";
import FundWalletForm from "./FundingWalletForm";
import VirtualAccountForm from "./VirtualAccountForm";
import { useAuth } from "../contexts/authentication";

export default function Wallets() {
  const [modal, setModal] = useState(false);
  const [showVAF, setShowVAF] = useState(false);
  const [userProfile, setUserProfile] = useState(() => {
    const storedUser = localStorage?.getItem("userProfile");
    try {
      return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
      // console.error("Failed to parse userData:", error);
      return {};
    }
  });
  const { token } = useAuth();
  function toggleModal() {
    setModal(!modal);
  }
  function toggleVirtualAccountModal() {
    setShowVAF(!showVAF);
  }

  useEffect(() => {
    fetch("https://smsapi-0110.jarapay.ng/api/v1/user/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        localStorage.setItem("userProfile", JSON.stringify(data.data))
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center w-screen md:w-full">
      {console.log(userProfile)}
      <div className="w-full mt-8 flex flex-col justify-center ">
        <div className="w-11/12 bg-white mx-auto flex justify-between p-8 shadow-md rounded-xl h-90 flex-col md:flex-row md:h-44">
          <span className="flex gap-8">
            <img
              className="w-32 md:w-40 h-28 md:h-32"
              src="/Illustration.png"
              alt="ilustration.png"
            />
            <span style={{ widows: "130px" }} className="flex gap-2 flex-col">
              <p className="text-2xl">
                &#x20A6; {userProfile?.wallet?.balance || "0.00"}
              </p>
              <p style={{ color: "#828282" }} className="text-sm">
                Total Wallet Balance
              </p>
              <button
                style={{
                  backgroundColor: "#4263EB",
                }}
                className="text-white rounded-sm w-29 md:w-32 h-10"
                onClick={toggleModal}
              >
                Fund Wallet
              </button>
            </span>
          </span>
          <span className="text-center flex flex-col gap-2 items-center w-full md:w-80">
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
        <RecentTransactions transactions={userProfile.transactions} />
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
