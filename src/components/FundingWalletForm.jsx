import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";
import AmountContext from "../contexts/AmountContext";

export default function FundWalletForm({ toggleModal }) {
  const { amount, setAmount } = useContext(AmountContext);
  const [value, setValue] = useState("");

  function handleProceed() {
    setAmount(value);
    console.log(value);
  }

  return (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div
        style={{ width: "594px", height: "396px" }}
        className="modal-content flex flex-col p-8 justify-center items-center"
      >
        <button onClick={toggleModal} className="close-modal text-2xl">
          <IoMdClose />
        </button>
        <div>
          <p className="text-2xl my-4">Fund Wallet</p>
          <span style={{ height: "68px" }} className="flex gap-2 flex-col my-4">
            <label htmlFor="amount">Enter Amount</label>
            <input
              onChange={(e) => setValue(e.target.value)}
              style={{
                width: "500px",
                height: "40px",
                border: "1px solid #E0E0E0",
              }}
              placeholder="1234567890"
              id="amount"
              type="text"
              className="px-4"
              value={value}
            />
          </span>
          <Link to={"/home/payment-options"}>
            <button
              onClick={handleProceed}
              className="w-full text-white rounded-xl"
              style={{
                backgroundColor: "#4263EB",
                width: "500px",
                height: "45px",
              }}
            >
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
