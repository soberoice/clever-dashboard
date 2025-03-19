import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Avatar } from "@mui/material";
import { useAuth } from "../contexts/authentication";
import { useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";

export default function Navbar({ setToggle, toggle }) {
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const { user, setMessage } = useAuth();
  const string = `${user?.first_name?.slice(0, 1)}${user?.last_name?.slice(
    0,
    1
  )}`;
  // const user = localStorage.getItem("userData");
  const navigate = useNavigate();
  // Function to clear storage and redirect
  const handleLogout = () => {
    nav("/signin");
    setMessage("Signed out Successfully");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("userData"); // Clear token
    // setUser({});
    setTimeout(() => {
      setMessage("");
    }, 6000);
  };

  return (
    <div
      style={{ borderBottom: "1px solid #E9ECEF" }}
      className="md:relative lg:flex w-screen md:w-full md:px-8 mt-3 h-20 items-center text-xl border-b-1 bg-white flex top-0"
    >
      {/* {console.log(user)} */}
      <div className="font-semibold block lg:hidden ml-2">
        <IoMenu className="text-3xl" onClick={() => setToggle(!toggle)} />
      </div>
      <div className="font-semibold hidden md:block">
        Welcome, {user?.first_name} {user?.last_name}
      </div>
      <div className="ml-auto h-18 w-90 md:w-86 flex md:gap-4">
        <span className=" my-auto flex">
          <FaRegBell className="mx-2" />
          <FiMoon className="mx-2" />
        </span>
        <span className="flex flex-col items-center my-auto h-full">
          <span
            onClick={() => setModal(!modal)}
            className="flex cursor-pointer my-auto"
          >
            <Avatar className="mr-2">{string?.toUpperCase()}</Avatar>
            <span className="flex flex-col text-sm">
              <span>{user?.username}</span>
              {user?.email}
            </span>
            <IoIosArrowDown
              className={`ml-4 my-auto ${
                modal ? "-rotate-180" : ""
              } transition-all duration-300`}
            />
          </span>
          <button
            style={{ width: "190px", color: "red" }}
            className={`bg-white text-red rounded-xl cursor-pointer bg-transparent absolute mt-18 transition-all duration-300  ${
              modal ? "h-15 border" : "h-0 border-0"
            }`}
            onClick={handleLogout}
          >
            <p className={`${modal ? "block" : "hidden"}`}>Sign Out</p>
          </button>
        </span>
      </div>
    </div>
  );
}
