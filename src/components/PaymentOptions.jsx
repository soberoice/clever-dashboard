import { Box, Radio, RadioGroup } from "@mui/material";
import { useContext, useState } from "react";
import AmountContext from "../contexts/AmountContext";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function PaymentOptions() {
  const { amount } = useContext(AmountContext);
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="mt-8 w-12/12 flex justify-center">
      <div className="w-11/12 mx-auto">
        <Link to={"/home/wallets"} className="m-4">
          <p
            style={{ width: "90px" }}
            className="flex justify-evenly items-center text-xl"
          >
            <FaArrowLeftLong />
            Back
          </p>
        </Link>
        <span className="flex mx-auto w-full justify-between">
          <Box
            aria-labelledby="product-color-attribute"
            defaultValue="warning"
            sx={{
              gap: 2,
              flexWrap: "wrap",
              flexDirection: "row",
              borderRadius: "8px",
              height: "278px",
              width: "754px",
              backgroundColor: "white",
            }}
            className="shadow-sm"
          >
            <div
              className="gap-8 flex items-center"
              style={{ height: "92px", width: "754px" }}
            >
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-buttons"
                sx={{ marginLeft: "15px" }}
                slotProps={{ input: { "aria-label": "A" } }}
              />
              <img
                src="/cards.png"
                style={{ width: "36px" }}
                alt=""
                className=""
              />
              <span>
                <p>Fund wallet with Flutterwave</p>{" "}
                <p>Make payment using your debit card</p>
              </span>
            </div>
            <div
              className="gap-8 flex items-center"
              style={{ height: "92px", width: "754px" }}
            >
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-buttons"
                sx={{ marginLeft: "15px" }}
                slotProps={{ input: { "aria-label": "A" } }}
              />
              <img
                src="/cards.png"
                style={{ width: "36px" }}
                alt=""
                className=""
              />
              <span>
                <p>Fund wallet with Flutterwave</p>{" "}
                <p>Make payment using your debit card</p>
              </span>
            </div>
            <div
              className="gap-8 flex items-center"
              style={{ height: "92px", width: "754px" }}
            >
              <Radio
                checked={selectedValue === "c"}
                onChange={handleChange}
                value="c"
                name="radio-buttons"
                sx={{ marginLeft: "15px" }}
                slotProps={{ input: { "aria-label": "A" } }}
              />
              <img
                src="/cards.png"
                style={{ width: "36px" }}
                alt=""
                className=""
              />
              <span>
                <p>Fund wallet with Flutterwave</p>{" "}
                <p>Make payment using your debit card</p>
              </span>
            </div>
          </Box>
          <div
            style={{ width: "420px", height: "270px" }}
            className="bg-white flex items-center justify-center flex-col rounded-xl shadow-sm"
          >
            <span
              style={{ width: "290px", height: "48px" }}
              className="flex justify-between items-center"
            >
              <p>SUBTOTAL</p>
              <p className="text-black text-bold">&#x20A6; {amount}</p>
            </span>
            <span
              style={{ width: "290px", height: "48px" }}
              className="flex justify-between items-center"
            >
              <p>SUBTOTAL</p>
              <p className="text-black text-bold">&#x20A6; {amount}</p>
            </span>
            <Link to={"/home/payment-successful"}>
              <button
                className="w-full text-white rounded-xl mt-8"
                style={{
                  backgroundColor: "#4263EB",
                  width: "374px",
                  height: "45px",
                }}
              >
                Proceed
              </button>
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
}
