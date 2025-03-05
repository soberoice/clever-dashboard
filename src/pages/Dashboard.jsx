import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/authentication";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  return user && token ? (
    <div
      style={{ color: "#343A40", backgroundColor: "#F9FAFB" }}
      className="font-semibold"
    >
      {useEffect(() => {
        if (location.pathname === "/") {
          navigate("/dashboard", { replace: true });
        }
      }, [])}
      <div className="md:flex md:w-full">
        <SideNav toggle={toggle} setToggle={setToggle} />
        <div
          className="md:relative md:flex flex-col w-10/12 relative md:flex-2"
          onClick={() => {
            if (toggle) {
              setToggle(!toggle);
            }
          }}
        >
          <Navbar setToggle={setToggle} toggle={toggle} />
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/signin" replace />
  );
}
