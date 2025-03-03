import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { links, supports } from "../utils/constants";
import { IoMdClose } from "react-icons/io";

export default function SideNav() {
  return (
    <div className="flex bg-white">
      <div
        style={{ borderRight: "1px solid #E9ECEF" }}
        className="flex border-gray-300 justify-evenly flex-col w-80 p-3 h-screen border-r-1 text-base"
      >
        <div className="flex flex-col">
          <span className="flex text-2xl font-bold mt-auto mb-2">
            <img
              style={{ width: "40px", height: "40px" }}
              src="/mail-02.png"
              alt=""
            />
            <p className="my-auto">Good Mail</p>
          </span>

          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.name.toLowerCase()}
              className={({ isActive }) =>
                `rounded-lg block p-3 flex flex-row gap-2 text-base ${
                  isActive ? "bg-blue-500 text-white" : "text-black"
                }`
              }
            >
              <span className="my-auto">{link.img}</span>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-col mt-auto">
          <div
            className="flex flex-col ml-2 mb-4 gap-4 p-3"
            style={{ backgroundColor: "#F8F9FA" }}
          >
            <p className="flex justify-between">
              Your plan <IoMdClose className="my-auto" />
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
            >
              <span className="my-auto">{link.img}</span>
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* <div className="flex-2 w-96 float-right border-b-1">Welcome, David</div> */}
    </div>
  );
}
