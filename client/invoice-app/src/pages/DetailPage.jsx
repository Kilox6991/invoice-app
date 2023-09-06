import React from "react";
import InfoInvoice from "../components/DetailPage/InfoInvoice/InfoInvoice";
import Stack from "@mui/material/Stack";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import StatusBar from "../components/DetailPage/StatusBar/StatusBar";
import ItemsTotal from "../components/DetailPage/Items/ItemsTotal";
import { Box } from "@mui/material";

import useInvoice from "../hooks/useInvoice";
import { useParams } from "react-router-dom";



function DetailPage() {
  const { invoiceId } = useParams();
  
  const { invoice, loading, errors } = useInvoice(invoiceId);
  
  
  return (
    <Stack
      direction="column"
      sx={{
        display: "flex",
        justifyContent: "center",
        ml: { xs: "20px", lg: "100px" },
        mr:"40px",
        gap:"30px"
      }}
    >
      <Box sx={{ mt: "105px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#0C0E16",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontWeight: "bold",
            fontSize: "15px",
            marginTop: "0px",
            marginBottom: "32px",
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
      </Box>
      <Box
        sx={{
          background: "white",
        }}
      >
        <StatusBar invoice={invoice} loading={loading} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column",background: "white"  }}>
        <InfoInvoice invoice={invoice} loading={loading}/>
        <ItemsTotal invoice={invoice} loading={loading}></ItemsTotal>
      </Box>
    </Stack>
  );
}

export default DetailPage;
