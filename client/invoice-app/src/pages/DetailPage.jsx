import React from "react";
import InfoInvoice from "../components/DetailPage/InfoInvoice/InfoInvoice";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import StatusBar from "../components/DetailPage/StatusBar/StatusBar";

function DetailPage() {
  return (
    <Stack>
      <ListItem sx={{ mt: "105px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none", 
            color: "#0C0E16", 
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontWeight:"bold",
            fontSize:"15px",
          }}
        >
          <svg width="8" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.342.886L2.114 5.114l4.228 4.228"
              stroke="#9277FF"
              strokeWidth="2" 
              fill="none"
              fillRule="evenodd" 
            />
          </svg>
          Go Back
        </Link>
      </ListItem>
      <ListItem><StatusBar/></ListItem>
      <ListItem>
        <InfoInvoice />
        {/* Items */}
      </ListItem>
    </Stack>
  );
}

export default DetailPage;
