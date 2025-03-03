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

export default function Navbar() {
  const { user } = useAuth();
  const [toggle, setToggle] = useState(false);
  const name = "john smith";
  return (
    <div
      style={{ borderBottom: "1px solid #E9ECEF" }}
      className="flex w-full px-8 mt-3 h-20 items-center text-xl border-b-1 bg-white"
    >
      <div className="font-semibold">
        Welcome, {user?.first_name} {user?.last_name}
      </div>
      <div className="flex ml-auto h-18">
        <span className="flex my-auto">
          <FaRegBell className="mx-2" />
          <FiMoon className="mx-2" />
        </span>
        <Accordion
          sx={{
            width: "190",
            height: "full",
            boxShadow: "none",
          }}
        >
          <AccordionSummary>
            <Typography>
              <span className="flex">
                <Avatar className="mr-2">{user?.username?.slice(0, 1)}</Avatar>
                <span className="flex flex-col text-sm my-auto">
                  <span>{user?.username}</span>
                  {console.log(user)}
                  {user?.email}
                </span>
                <IoIosArrowDown className="my-auto ml-4" />
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="text-center ">
            <button
              style={{ width: "190px", color: "red", border: "1px solid red" }}
              className="bg-white h-15 text-red rounded-xl "
            >
              Sign Out
            </button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
