import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import moment from "moment"

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

function InvoiceBox({ invoice }) {

  const items = invoice.items
  let total = 0
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemTotal = item.quantity * item.price;
    total += itemTotal;
  }

  return (
    <>
      <CssBaseline />
      <Box sx={{
        width: { xs: "327px", sm: '672px', lg: '730px' },
        height: { xs: "134px", sm: '134px' },
        margin: "auto",
        marginBottom: "16px",
        backgroundColor: "#FFFFFF",
      }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-around",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: { xs: "block", sm: "flex" }, gap: '20px' }}>
            <p>
              #<span style={{ fontWeight: "bold" }}>{invoice.invoiceNumber}</span>
            </p>
            <p style={{ color: "#888EB0" }}>
              Due <span>{moment(new Date(invoice.date)).format("D MMM YYYY")}</span>
            </p>
            <p style={{ fontWeight: "bold" }}>
              £<span>{total}</span>
            </p>
          </div>
          <div style={{ display: { xs: "block", sm: "flex" }, gap: '20px' }}>
            <p style={{ color: "#888EB0" }}>{invoice.clientName}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                backgroundColor: getStatusColorDiv(invoice.status),
                width: "104px",
                height: "40px",

              }}
            >
              <div
                style={{
                  backgroundColor: getStatusColor(invoice.status),
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  marginRight: "8px",

                }}
              ></div>
              <p style={{ color: getStatusColor(invoice.status) }}>{invoice.status}</p>
            </div>
          </div>
        </Grid>
      </Box>
    </>
  );
}

export default InvoiceBox;
