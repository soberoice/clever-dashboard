import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";
import AmountContext from "../contexts/AmountContext";
import { MenuItem, TextField } from "@mui/material";

export default function VirtualAccountForm({ toggleVirtualAccountModal }) {
  const dates = Array.from({ length: 31 }, (_, index) => index + 1);
  const years = Array.from({ length: 2026 - 2000 }, (_, index) => 2000 + index);
  return (
    <div className="modal z-50">
      <div onClick={toggleVirtualAccountModal} className="overlay"></div>
      <div
        style={{ height: "660px" }}
        className="modal-content flex flex-col p-8 justify-center items-center w-11/12 md:w-4/12"
      >
        <button
          onClick={toggleVirtualAccountModal}
          className="close-modal text-2xl"
        >
          <IoMdClose />
        </button>
        <div className="flex flex-col justify-center items-center w-full">
          <p className="text-5xl text-bold my-4">
            Let’s Create a Virtual Account
          </p>
          <span
            style={{ height: "400px" }}
            className="flex gap-2 flex-col my-4 w-full"
          >
            <span>
              <p className="text-2xl text-bold">BVN Deatails</p>
              <p>
                We need your BVN details to create a wallet and virtual account
                for you.{" "}
              </p>
            </span>
            <span className="flex flex-col gap-6 w-full">
              <span className="flex flex-col w-full">
                <label>Bank Verification Number (BVN)</label>
                <TextField label="1234567890" sx={{}} />
              </span>
              <span className="flex flex-col w-full">
                <label>Phone Number</label>
                <TextField label="1234567890" sx={{}} />
              </span>
              <span className="flex flex-col w-full">
                <label htmlFor="">Date of birth</label>
                <span className="flex justify-evenly">
                  <TextField
                    style={{ width: "130px" }}
                    select
                    label="date"
                    fullWidth
                  >
                    {dates.map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    style={{ width: "130px" }}
                    select
                    label="year"
                    fullWidth
                  >
                    {years.map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    style={{ width: "130px" }}
                    select
                    label="year"
                    fullWidth
                  >
                    {years.map((num) => (
                      <MenuItem key={num} value={num}>
                        {num}
                      </MenuItem>
                    ))}
                  </TextField>
                </span>
              </span>
            </span>
          </span>
          <button
            className="w-full text-white rounded-xl"
            style={{
              backgroundColor: "#4263EB",
              height: "45px",
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}
