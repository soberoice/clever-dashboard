import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  ListItemIcon,
  Radio,
  RadioGroup,
  Snackbar,
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
import { IoCloseCircleOutline } from "react-icons/io5";

export default function PaymentOptions() {
  const { loading, message, initializeTransaction } = useAuth();
  const [checked, setChecked] = React.useState([0]);
  const { amount } = useContext(AmountContext);
  const [selectedValue, setSelectedValue] = useState("a");
  const vertical = "top";
  const horizontal = "right";

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

  function handleClick() {
    initializeTransaction(amount);
  }
  return (
    <div className="mt-8 w-screen md:w-12/12 flex justify-center">
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
      {console.log(amount)}
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
        <span className="flex mx-auto w-full justify-between flex-col md:flex-row">
          <List
            className="bg-white w-full md:w-7/12 shadow-xs flex flex-col justify-evenly rounded-xl"
            sx={{ height: "auto" }}
          >
            {" "}
            {[0, 1, 2].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <Box key={value}>
                  <ListItem className="" disablePadding>
                    <ListItemButton
                      role={undefined}
                      sx={{ height: "92.01px" }}
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Radio checked={checked.includes(value)} />
                      </ListItemIcon>
                      <Stack direction={"row"} className="gap-1 md:gap-8">
                        <img src="/cards.png" alt="" className="" />
                        <span className="text-xs md:text-lg">
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
            style={{ height: "270px" }}
            className="bg-white w-full md:w-4/12 flex items-center justify-center flex-col rounded-xl shadow-sm mt-4 md:mt-0"
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
            <button
              className="w-10/12 text-white rounded-xl mt-8"
              style={{
                backgroundColor: "#4263EB",
                height: "45px",
              }}
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress
                  size="20px"
                  className="my-auto"
                  color="inherit"
                />
              ) : (
                "Proceed"
              )}
            </button>
          </div>
        </span>
      </div>
    </div>
  );
}
