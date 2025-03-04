import {
  Box,
  Divider,
  ListItemIcon,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AmountContext from "../contexts/AmountContext";
import { Link } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { useAuth } from "../contexts/authentication";

export default function PaymentOptions() {
  const { loading } = useAuth();
  const [checked, setChecked] = React.useState([0]);
  const { amount } = useContext(AmountContext);
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
          <List
            className="bg-white shadow-xs flex flex-col justify-evenly rounded-xl"
            sx={{ height: "auto", width: "750px" }}
          >
            {" "}
            {[0, 1, 2].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <Box>
                  <ListItem key={value} className="" disablePadding>
                    <ListItemButton
                      role={undefined}
                      sx={{ height: "92.01px" }}
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Radio
                          edge="start"
                          checked={checked.includes(value)}
                          tabIndex={-1}
                          disableRipple
                        />
                      </ListItemIcon>
                      <Stack direction={"row"} gap="20px">
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
                      </Stack>
                    </ListItemButton>
                  </ListItem>
                  {value === 2 ? <span /> : <Divider />}
                </Box>
              );
            })}
          </List>
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
                {loading ? (
                  <CircularProgress size="20px" className="my-auto" />
                ) : (
                  "Proceed"
                )}
              </button>
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
}
