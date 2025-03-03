import React from "react";
import { MdOutlineEmail } from "react-icons/md";

export default function PersonalInfo() {
  const emailIcon = <MdOutlineEmail />;

  return (
    <div style={{ width: "837px", height: "450px" }} className="flex flex-col">
      <p className="text-bold text-2xl pb-8">Personal Information</p>
      <div>
        <form
          action=""
          style={{ gridTemplateColumns: "50% 50%" }}
          className="grid gap-4"
        >
          <span className="flex flex-col">
            <label className="" htmlFor="First Name">
              First Name
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
              Last Name
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
              Date of birth
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              className="px-4 rounded-xl"
              type="date"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Mobile Number">
              Mobile Number
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="+123 456 7890"
              className="px-4 rounded-xl"
              type="number"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Email">
              Email
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              placeholder={` hellouihut@gmail.com`}
              className="px-4 rounded-xl"
              type="Email"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Country">
              Country
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="Nigeria"
              className="px-4 rounded-xl"
              type="text"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="State">
              State
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="Lagos"
              className="px-4 rounded-xl"
              type="text"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Location">
              Location
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                width: "390px",
                marginTop: "10px",
              }}
              placeholder="Ikeja"
              className="px-4 rounded-xl"
              type="text"
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
