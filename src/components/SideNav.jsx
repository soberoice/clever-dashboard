import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { links, supports } from "../utils/constants";
import { IoMdClose } from "react-icons/io";

export default function SideNav({ toggle, setToggle }) {
  return (
    <div
      style={{ borderRight: "1px solid #E9ECEF" }}
      className={`md:flex lg:relative left-0 fixed border-gray-300 justify-evenly flex-col transition-all duration-300 lg:w-80 lg:p-3 h-screen border-r text-base bg-white z-10 overflow-hidden  ${
        toggle ? "w-80" : "w-0"
      }`}
    >
      <IoMdClose
        className={`absolute top-4 right-4 text-3xl z-50 lg:hidden ${
          toggle ? "block" : "hidden"
        }`}
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${
          toggle ? "block" : "hidden"
        } flex-col lg:flex mt-5 p-3 lg:p-0 transition-all duration-300 flex-nowrap w-full transition-all duration-300`}
      >
        <span
          className={`flex text-2xl font-bold mt-auto mb-4 items-center  w-full ${
            toggle ? "w-full" : "w-0"
          }`}
        >
          <img src="/mail-02.png" alt="" className="w-9 h-9" />
          <p className="my-auto">Good Mail</p>
        </span>

        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.name.toLowerCase()}
            className={({ isActive }) =>
              `rounded-lg block p-3 flex flex-row gap-2 text-base w-full ${
                isActive ? "bg-blue-500 text-white" : "text-black"
              } ${toggle ? "w-11/12" : "w-0"}`
            }
            onClick={() => {
              setToggle(false);
            }}
          >
            <span className="my-auto">{link.img}</span>
            {link.name}
          </NavLink>
        ))}
      </div>

      <div
        className={` flex-col mt-auto md:block ${toggle ? "flex" : "hidden"}`}
      >
        <div
          className="flex flex-col ml-2 mb-4 gap-4 p-3"
          style={{ backgroundColor: "#F8F9FA" }}
        >
          <p className="flex justify-between">
            Your plan <IoMdClose className="my-auto cursor-pointer" />
          </p>
          <div className="text-gray-500 flex flex-col text-sm gap-2">
            <span className="flex justify-between">
              units left<span>100</span>
            </span>
            <span className="flex justify-between">
              Total Requests<span>50</span>
            </span>
          </div>
        </div>

        {supports.map((link, index) => (
          <NavLink
            key={index}
            to={
              link.name === "API Console"
                ? "apiconsole"
                : link.name.toLowerCase()
            }
            className={({ isActive }) =>
              `rounded-lg block p-3 flex flex-row gap-2 text-base ${
                isActive ? "bg-blue-500 text-white" : "text-black"
              }`
            }
            onClick={() => setToggle(!toggle)}
          >
            <span className="my-auto">{link.img}</span>
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
