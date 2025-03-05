import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";
import AmountContext from "../contexts/AmountContext";
import { Alert, Snackbar } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function FundWalletForm({ toggleModal }) {
  const vertical = "top";
  const horizontal = "right";
  const { amount, setAmount, error, setError } = useContext(AmountContext);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  function handleProceed() {
    if (value >= 100) {
      setAmount(value);
      localStorage.setItem("amountToPay", JSON.stringify(value));
      console.log(value);
    } else {
      setMessage("Amount to Low");
      setTimeout(() => {
        setMessage("");
      }, 6000);
    }
  }

  return (
    <div className="modal z-50">
      <Snackbar open={message} anchorOrigin={{ vertical, horizontal }}>
        <Alert severity="warning">
          <p className="flex items-center flex justify-between w-60">
            {message}
            <IoCloseCircleOutline
              className="mb-auto ml-auto text-xl"
              onClick={() => setMessage("")}
            />
          </p>
        </Alert>
      </Snackbar>
      <Snackbar open={error} anchorOrigin={{ vertical, horizontal }}>
        <Alert severity="warning">
          <p className="flex items-center flex justify-between w-60">
            {error}
            <IoCloseCircleOutline
              className="mb-auto ml-auto text-xl"
              onClick={() => setError("")}
            />
          </p>
        </Alert>
      </Snackbar>
      <div onClick={toggleModal} className="overlay"></div>
      <div
        style={{ height: "396px" }}
        className="modal-content w-screen flex flex-col p-8 justify-center items-center md:w-4/12"
      >
        <button onClick={toggleModal} className="close-modal text-2xl">
          <IoMdClose />
        </button>
        <div className="w-11/12">
          <p className="text-2xl my-4">Fund Wallet</p>
          <span
            style={{ height: "68px" }}
            className="flex gap-2 flex-col my-4 w-full"
          >
            <label htmlFor="amount">Enter Amount</label>
            <input
              onChange={(e) => setValue(e.target.value)}
              style={{
                height: "40px",
                border: "1px solid #E0E0E0",
              }}
              placeholder="1234567890"
              id="amount"
              type="text"
              className="px-4 w-full "
              value={value}
            />
          </span>
          <Link to={value >= 100 && "/payment-options"}>
            <button
              onClick={handleProceed}
              className="w-full text-white rounded-xl cursor-pointer"
              style={{
                backgroundColor: "#4263EB",
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
