import React from "react";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

export default function Dashboard() {
  return (
    <div
      style={{ color: "#343A40", backgroundColor: "#F9FAFB" }}
      className="font-semibold"
    >
      <div className="flex w-full">
        <SideNav />
        <div className="flex flex-col w-10/12">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
