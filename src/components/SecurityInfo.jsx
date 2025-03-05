import React from "react";

export default function SecurityInfo() {
  return (
    <div style={{ height: "450px" }} className="flex flex-col w-11/12">
      <p className="text-bold text-2xl pb-8">Security</p>
      <div>
        <form
          action=""
          style={{ gridTemplateColumns: "100%" }}
          className="grid gap-4 w-full"
        >
          <span className="flex flex-col">
            <label className="" htmlFor="First Name">
              Existing Password
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                marginTop: "10px",
              }}
              placeholder="Old Password"
              className="px-4 rounded-xl w-full"
              type="passwors"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Last Name">
              New Password
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                marginTop: "10px",
              }}
              placeholder="New Password"
              className="px-4 rounded-xl w-full"
              type="password"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Date of Birth">
              Confirm New Password
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                marginTop: "10px",
              }}
              placeholder="Confirm New Password"
              className="px-4 rounded-xl w-full"
              type="password"
            />
          </span>
        </form>
        <button
          style={{ backgroundColor: "#4263EB", height: "45px" }}
          className="text-white rounded-xl mt-12 p-2 w-full"
          type="submit"
        >
          Update
        </button>
      </div>
    </div>
  );
}
