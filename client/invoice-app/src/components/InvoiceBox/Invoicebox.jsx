import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


function InvoiceBox() {
  return (
    <>
      <CssBaseline />
    <Box sx={{width: "327px",
            height: "134px",
            margin:"auto",
            marginBottom:"16px",
            
            backgroundColor:"#FFFFFF"}}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "10px",
        }}
      >
        <div>
          <p>
            #<span style={{ fontWeight: "bold" }}>RT4567</span>
          </p>
          <p style={{ color: "#888EB0" }}>
            Due <span>19 Aug 2021</span>
          </p>
          <p style={{ fontWeight: "bold" }}>
            £<span>1800.90</span>
          </p>
        </div>
        <div>
          <p style={{ color: "#888EB0" }}>Jensen Huang</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
              backgroundColor: "rgba(51, 214, 159, 0.5)",
              width: "104px",
              height: "40px",
            }}
          >
            <div
              style={{
                backgroundColor: "#33D69F",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                marginRight: "8px",
              }}
            ></div>
            <p style={{ color: "#33D69F"}}>Paid</p>
          </div>
        </div>
      </Grid>
      </Box>
    </>
  );
}

export default InvoiceBox;
