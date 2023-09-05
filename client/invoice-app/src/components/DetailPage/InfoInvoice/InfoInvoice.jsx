
import { Box, Container, styled } from "@mui/material";


function InfoInvoice({invoice, loading}) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        marginTop: "40px",
       gap:"21px"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", marginRight:{xs:"0px", sm:"100px", lg:"200px"},marginLeft:{xs:"0px", sm:"100px", lg:"200px"} }}>
        <Box sx={{ marginTop: "16px" }}>
          <p style={{ fontWeight: "bold", fontSize: "15px" }}>#{invoice.invoiceNumber}</p>
          <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.description}</p>
        </Box>

        <Box>
          <p style={{ color: "#7E88C3", fontSize: "13px" }}>
            {invoice.senderAddress.street}
          </p>
          <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.senderAddress.city}</p>
          <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.senderAddress.postCode}</p>
          <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.senderAddress.country}</p>
        </Box>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>Invoice Date</p>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>{invoice.date}</p>

            <p style={{ color: "#7E88C3", fontSize: "13px" }}>Payment Due</p>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>{invoice.paymentDue}</p>
          </Box>
          <Box>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>Bill To</p>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>{invoice.clientName}</p>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>
            {invoice.clientAddress.street},
            </p>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.clientAddress.city},</p>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.clientAddress.postCode},</p>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>{invoice.clientAddress.country}</p>
          </Box>
          <Box>
            <p style={{ color: "#7E88C3", fontSize: "13px" }}>Sent to</p>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>
            {invoice.clientEmail}
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoInvoice;
