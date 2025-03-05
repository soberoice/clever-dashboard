import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Avatar } from "@mui/material";
import { useAuth } from "../contexts/authentication";
import { useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";

export default function Navbar({ setToggle, toggle }) {
  const { user, setMessage } = useAuth();
  const string = `${user?.first_name?.slice(0, 1)}${user?.last_name?.slice(
    0,
    1
  )}`;
  // const user = localStorage.getItem("userData");
  const navigate = useNavigate();
  // Function to clear storage and redirect
  const handleLogout = () => {
    window.location.reload();
    setMessage("Signed out Successfully");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData"); // Clear token
    // setUser({});
    setTimeout(() => {
      setMessage("");
    }, 6000);
  };

  return (
    <div
      style={{ borderBottom: "1px solid #E9ECEF" }}
      className="md:relative md:flex w-screen md:w-full md:px-8 mt-3 h-20 items-center text-xl border-b-1 bg-white flex top-0"
    >
      {/* {console.log(user)} */}
      <div className="font-semibold block md:hidden ml-2">
        <IoMenu className="text-3xl" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="font-semibold hidden md:block">
        Welcome, {user?.first_name} {user?.last_name}
      </div>
      <div className="ml-auto h-18 w-70 md:w-80 md:flex md:gap-4">
        <span className=" my-auto hidden md:flex">
          <FaRegBell className="mx-2" />
          <FiMoon className="mx-2" />
        </span>
        <Accordion
          sx={{
            height: "full",
            boxShadow: "none",
          }}
          className="ml-auto w-full md:w-48 mx-auto fixed"
        >
          <AccordionSummary>
            <div>
              <span className="flex">
                <Avatar className="mr-2">{string?.toUpperCase()}</Avatar>
                <span className="flex flex-col text-sm">
                  <span>{user?.username}</span>
                  {user?.email}
                </span>
                <IoIosArrowDown className="ml-4 my-auto" />
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="" sx={{ backgroundColor: "none" }}>
            <button
              style={{ width: "190px", color: "red", border: "1px solid red" }}
              className="ml-auto bg-white h-15 text-red rounded-xl cursor-pointer"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
