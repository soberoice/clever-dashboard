import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function RecentTransactions({ transactions }) {
  return (
    <div
      className="h-96 rounded-lg mt-10 mb-10 bg-white w-11/12 mx-auto"
      style={{ border: "1px solid #EAECF0", overflowY: "auto" }}
    >
      <p className="text-2xl text-semibold mb-4 p-4">Recent Transactions</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow className="font-bold text-xl">
              <TableCell sx={{ width: "500px" }}>Transaction ID</TableCell>
              <TableCell sx={{ width: "500px" }} align="right">
                Transactions
              </TableCell>
              <TableCell sx={{ width: "150px" }} align="center">
                Amount
              </TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((item) => {
              const date = new Date(item?.created_at);
              const formattedDate = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              });

              const formattedTime = date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });

              return (
                <TableRow
                  key={item?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item?.id}
                  </TableCell>
                  <TableCell align="right">{item?.transaction_title}</TableCell>
                  <TableCell align="left">
                    <p
                      className="w-20 h-6 rounded-lg mt-auto mx-auto flex items-center justify-center"
                      style={{
                        backgroundColor: "#ECFDF3",
                        color: "green",
                        border: "1px solid #D3F9D8",
                      }}
                    >
                      &#x20A6; {item.amount}
                    </p>
                  </TableCell>
                  <TableCell align="right">
                    <span className="flex flex-col">
                      <span>{formattedDate}</span>
                      <span style={{ color: "#495057" }}>
                        at {formattedTime}
                      </span>
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
