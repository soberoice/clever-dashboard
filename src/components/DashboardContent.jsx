import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Cards from "./Cards";
import MessageReportsTable from "./MessageReportsTable";
import { useAuth } from "../contexts/authentication";
import { Alert, Snackbar } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";

export default function DashboardContent() {
  const vertical = "top";
  const horizontal = "right";
  const { message, setMessage, token, loading, setLoading } = useAuth();
  const [userProfile, setUserProfile] = useState(() => {
    const storedUser = localStorage?.getItem("userProfile");
    try {
      return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
      // console.error("Failed to parse userData:", error);
      return {};
    }
  });

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        "https://smsapi-0110.jarapay.ng/api/v1/user/profile",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const userProfile = response?.data?.data;
      console.log(userProfile);
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo();
    //   fetch("https://smsapi-0110.jarapay.ng/api/v1/user/profile", {
    //     method: "GET",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) =>
    //       localStorage.setItem("userProfile", JSON.stringify(data.data))
    //     )
    //     .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className=" w-screen md:w-full items-center justify-center mx-auto flex flex-col">
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
      <div className="flex justify-center mt-5 flex-col w-11/12">
        <div
          className="flex rounded-lg p-4 px-2 md:p-8 w-80 w-full md:w-full"
          style={{
            backgroundColor: "#155EEF1A",
            border: "1px solid #155EEF1A",
          }}
        >
          <div className="">
            <FaRegCheckCircle
              className="text-6xl m-4 p-4 rounded-lg"
              style={{ backgroundColor: "#155EEF1A", color: "#4263EB" }}
            />
          </div>
          <div className="flex flex-col my-auto">
            <p className="text-xl" style={{ color: "#4263EB" }}>
              Your account is approved
            </p>
            <p className="text-base hidden md:block">
              Your account has been approved and you can now send up to 100
              emails per month. Need more? Order a plan by clicking the upgrade
              button below. The free plan includes 3,000 emails per month.
            </p>
            <button
              style={{ backgroundColor: "#4263EB" }}
              className="text-white py-2 px-3 rounded-lg mt-3 w-40"
            >
              Get Started &#8594;
            </button>
          </div>
          <IoMdClose className="text-gray-400 ml-auto mb:ml-0" />
        </div>
        <Cards balance={userProfile?.wallet?.balance} />
        <MessageReportsTable />
      </div>
    </div>
  );
}
