import React from "react";

export default function SecurityInfo() {
  return (
    <div style={{ width: "837px", height: "450px" }} className="flex flex-col">
      <p className="text-bold text-2xl pb-8">Security</p>
      <div>
        <form
          action=""
          style={{ gridTemplateColumns: "100%" }}
          className="grid gap-4"
        >
          <span className="flex flex-col">
            <label className="" htmlFor="First Name">
              Existing Password
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="John"
              className="px-4 rounded-xl"
              type="text"
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
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="Smith"
              className="px-4 rounded-xl"
              type="text"
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
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="Confirm New Password"
              className="px-4 rounded-xl"
              type="Text"
            />
          </span>
        </form>
        <button
          style={{ backgroundColor: "#4263EB", width: "831px", height: "45px" }}
          className="text-white rounded-xl mt-12 p-2"
          type="submit"
        >
          Update
        </button>
      </div>
    </div>
  );
}
