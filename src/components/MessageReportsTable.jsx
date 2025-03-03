import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MessageReportsTable() {
  return (
    <div
      className="h-96 rounded-lg mt-10 mb-10 bg-white"
      style={{ border: "1px solid #EAECF0", overflowY: "auto" }}
    >
      <p className="text-2xl text-semibold mb-4 p-4">Message Reports</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "#F9FAFB" }}>
            <TableRow>
              <TableCell sx={{ width: "650px" }}>SMS</TableCell>
              <TableCell sx={{ width: "240px" }} align="right">
                Receiver
              </TableCell>
              <TableCell sx={{ width: "90px" }} align="center">
                Status
              </TableCell>
              <TableCell sx={{ width: "130px" }} align="left">
                Time
              </TableCell>
              <TableCell align="right">Pages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                ID2398439843
              </TableCell>
              <TableCell align="right">08069567130 </TableCell>
              <TableCell align="left">
                <p
                  className="w-20 h-6 rounded-lg mt-auto mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  Sent
                </p>
              </TableCell>
              <TableCell align="right">
                <span className="flex flex-col text-left">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </TableCell>
              <TableCell align="right">2 </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                ID2398439843
              </TableCell>
              <TableCell align="right">Automated Email</TableCell>
              <TableCell align="right">
                <p
                  className="w-20 h-6 rounded-lg mt-auto mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  Sent
                </p>
              </TableCell>
              <TableCell align="right">
                <span className="flex flex-col text-left">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </TableCell>
              <TableCell align="right">354 </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                ID2398439843
              </TableCell>
              <TableCell align="right">Automated Email</TableCell>
              <TableCell align="right">
                <p
                  className="w-20 h-6 rounded-lg mt-auto mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: "#ECFDF3",
                    color: "green",
                    border: "1px solid #D3F9D8",
                  }}
                >
                  Sent{" "}
                </p>
              </TableCell>
              <TableCell align="right">
                <span className="flex flex-col text-left">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </TableCell>
              <TableCell align="right">223 </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                ID2398439843
              </TableCell>
              <TableCell align="right">Wallet Credit</TableCell>
              <TableCell align="right">
                <p
                  className="w-20 h-6 rounded-lg mt-auto mx-auto flex items-center justify-center"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Pending
                </p>
              </TableCell>
              <TableCell align="right">
                <span className="flex flex-col text-left">
                  <span>02/03/2024</span>
                  <span style={{ color: "#495057" }}>at 1:35pm</span>
                </span>
              </TableCell>
              <TableCell align="right">23</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
