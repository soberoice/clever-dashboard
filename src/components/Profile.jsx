import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import SecurityInfo from "./SecurityInfo";

export default function Profile() {
  const [active, setActive] = useState("myProfile");
  return (
    <div className="mx-auto w-11/12 mb-12">
      <div
        style={{ width: "1213px", height: "798px" }}
        className="flex bg-white w-11/12 my-8 flex flex-col p-8"
      >
        <p
          style={{ color: "#1B212D" }}
          className="text-2xl text-bold  flex-col flex gap-3"
        >
          Account Information
          <span className="text-lg" style={{ color: "#929EAE" }}>
            Update your account information
          </span>
        </p>
        <div
          className="my-8 flex justify-between"
          style={{ border: "1px solid #EEEEEE", width: "216px" }}
        >
          <button
            style={{
              backgroundColor: active === "myProfile" && "#3B5BDB",
              color: active === "myProfile" ? "white" : "#9B9B9B",
              height: "35px",
              width: "106px",
              borderRadius: "4px",
            }}
            className="text-white"
            onClick={() => setActive("myProfile")}
          >
            My Profile
          </button>
          <button
            style={{
              height: "35px",
              width: "106px",
              borderRadius: "4px",
              backgroundColor: active === "security" && "#3B5BDB",
              color: active === "security" ? "white" : "#9B9B9B",
            }}
            className=""
            onClick={() => setActive("security")}
          >
            Security
          </button>
        </div>
        {active === "myProfile" ? <PersonalInfo /> : <SecurityInfo />}
      </div>
    </div>
  );
}
