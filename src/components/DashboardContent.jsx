import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Cards from "./Cards";
import MessageReportsTable from "./MessageReportsTable";

export default function DashboardContent() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mx-auto mt-5 flex-col w-full">
        <div
          className="flex rounded-lg p-8"
          style={{
            backgroundColor: "#155EEF1A",
            border: "1px solid #155EEF1A",
          }}
        >
          <div className="w-11/12 flex-1">
            <FaRegCheckCircle
              className="text-6xl m-4 p-4 rounded-lg"
              style={{ backgroundColor: "#155EEF1A", color: "#4263EB" }}
            />
          </div>
          <div className="flex-8 my-auto">
            <p className="text-xl" style={{ color: "#4263EB" }}>
              Your account is approved
            </p>
            <p className="text-base">
              Your account has been approved and you can now send up to 100
              emails per month. Need more? Order a plan by clicking the upgrade
              button below. The free plan includes 3,000 emails per month.
            </p>
            <button
              style={{ backgroundColor: "#4263EB" }}
              className="text-white py-2 px-3 rounded-lg mt-3 "
            >
              Get Started &#8594;
            </button>
          </div>
          <IoMdClose className="text-gray-400" />
        </div>
        <Cards />
        <MessageReportsTable />
      </div>
    </div>
  );
}
