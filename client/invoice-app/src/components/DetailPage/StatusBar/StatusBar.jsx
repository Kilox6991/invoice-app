import React, { useState } from "react";

import { Box, Button, Typography, Stack, styled } from "@mui/material";
import Invoice2Form from '../../InvoiceForm/UpdateForm/Invoice2Form'
import invoicesService from '../../../services/invoice-service'
import { useNavigate } from 'react-router-dom'

//Estilos 3 botones//
const CustomButton1 = styled(Button)({
  backgroundColor: "#F9FAFE",
  color: "#979797",
  borderRadius: "24px",
  width: "73px",
  height: "48px",
  gap: "6px",
  padding: "6px 15px 6px 6px",
  textDecoration: "none",
  border: "none",
  fontWeight: "bold",

  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#DFE3FA"
  }
});
const CustomButton2 = styled(Button)({
  backgroundColor: "#EC5757",
  color: "#FFFFFF",
  borderRadius: "24px",
  width: "89px",
  height: "48px",
  gap: "6px",
  padding: "6px 15px 6px 6px",
  textDecoration: "none",
  border: "none",
  margin: "8px",

  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FF9797",
    color: "#FFFFFF"
  }
});
const CustomButton3 = styled(Button)({
  backgroundColor: "#7C5DFA",
  color: "#FFFFFF",
  borderRadius: "24px",
  width: "149px",
  height: "48px",
  gap: "6px",
  padding: "6px 15px 6px 6px",
  textDecoration: "none",
  border: "none",

  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#9277FF",
  }
});
//Estilos condicionados para el status
function getStatusColor(status) {
  switch (status) {
    case "Paid":
      return "#33D69F"; // Verde para "Paid"
    case "Pending":
      return "#F9A52B"; // Amarillo para "Pending"
    case "Draft":
      return "#888EB0"; // Gris para "Draft" 
    default:
      return "#888EB0"; // Gris por defecto para otros estados
  }
}
function getStatusColorDiv(status) {
  switch (status) {
    case "Paid":
      return "rgba(51, 214, 159, 0.7)"; // Verde con opacidad
    case "Pending":
      return "rgba(249, 165, 43, 0.7)"; // Amarillo con opacidad
    case "Draft":
      return "rgba(136, 142, 176, 0.7)"; // Gris con opacidad
    default:
      return "rgba(136, 142, 176, 0.7)"; // Gris por defecto 
  }
}
//-------- --------//


function StatusBar({ invoice, loading, openId }) {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()

  function deleteInvoice() {

    invoicesService.delete(invoice._id)
      .then(() => {

        navigate("/");
      })
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const markAsPaid = () => {
    const updatedInvoice = { ...invoice, status: 'Paid' };
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Box sx={{ display: "flex", gap: "20px", mt: "10px" }}>
        <Typography sx={{
          color: "#858BB2", fontSize: "13px",
          mt: "10px"
        }}>
          Status
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{
            backgroundColor: getStatusColorDiv(invoice.status),
            width: "104px",
            height: "40px",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "#33D69F",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
              backgroundColor: getStatusColor(invoice.status),
            }}
          ></div>
          <Typography variant="body2" sx={{}}>{invoice.status}</Typography>
        </Stack>
      </Box>
      <Box>
        <CustomButton1 variant="outlined" onClick={() => setShowForm(true)}>Edit</CustomButton1>
        {showForm && (
          <div style={{ marginTop: "20px" }}>
            <Invoice2Form onClose={() => setShowForm(false)} />
          </div>
        )}
        <CustomButton2 variant="outlined" onClick={deleteInvoice}>Delete</CustomButton2>
        {invoice.status !== 'Paid' && (
          <CustomButton3 variant="contained" color="primary" onClick={markAsPaid}>
            Mark as Paid
          </CustomButton3>
        )}
      </Box>
    </Box>
  );
}

export default StatusBar;
