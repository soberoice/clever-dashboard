import React, { useState } from "react";
import { useAuth } from "../contexts/authentication";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function PersonalInfo() {
  const vertical = "top";
  const horizontal = "right";
  const { loading, updateProfile, user, message, setMessage } = useAuth();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    dob: user?.dob || "",
    country: user?.country || "",
    company_name: user?.company_nmae || "",
    phone: user?.phone || "",
    city: user?.city || "",
    state: user?.state || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateProfile(formData);
    console.log(result);
  };
  return (
    <div
      style={{ height: "450px" }}
      className="flex flex-col w-11/12 lg:w-9/12"
    >
      <Snackbar
        open={message}
        autoHideDuration={1200}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert security="success">
          <p className="flex items-center flex justify-between w-60">
            {message}
            <IoCloseCircleOutline
              className="mb-auto ml-auto text-xl"
              onClick={() => setMessage("")}
            />
          </p>
        </Alert>
      </Snackbar>
      <p className="text-bold text-2xl pb-8">Personal Information</p>
      <div className="w-full">
        <form
          action=""
          className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full"
          onSubmit={handleSubmit}
        >
          <span className="flex flex-col">
            <label className="" htmlFor="First Name">
              First Name
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder="John"
              className="px-4 rounded-xl w-full"
              type="text"
              id="first_name"
              name="first_name"
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

                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder="Smith"
              className="px-4 rounded-xl w-full"
              type="text"
              id="last_name"
              name="last_name"
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
                marginTop: "10px",
              }}
              className="px-4 rounded-xl text-gray-500 w-full"
              type="date"
              id="dob"
              name="dob"
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

                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder="+123 456 7890"
              className="px-4 rounded-xl w-full"
              type="number"
              id="phone"
              name="phone"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Email">
              E-mail
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",
                marginTop: "10px",
              }}
              className="px-4 rounded-xl w-full"
              type="email"
              id="company-name"
              placeholder="example@example.com"
              name="company-name"
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

                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder="Nigeria"
              className="px-4 rounded-xl w-full"
              type="text"
              id="country"
              name="country"
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

                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder="Lagos"
              className="px-4 rounded-xl w-full"
              type="text"
              id="state"
              name="state"
            />
          </span>
          <span className="flex flex-col">
            <label className="" htmlFor="Location">
              city
            </label>
            <input
              style={{
                border: "1px solid #F2F2F2",
                height: "48px",

                marginTop: "10px",
              }}
              onChange={handleChange}
              placeholder="Ikeja"
              className="px-4 rounded-xl w-full"
              type="text"
              id="city"
              name="city"
            />
          </span>
          <button
            style={{
              backgroundColor: "#4263EB",
              height: "45px",
            }}
            className="text-white rounded-xl mt-4 p-2 w-full md:col-span-2"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                color="inherit"
                size="20px"
                className="my-auto"
              />
            ) : (
              "Update"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
