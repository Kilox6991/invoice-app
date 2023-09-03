import { Box, Container, styled } from "@mui/material";

function InfoInvoice() {
  return (
    <Box fixed
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        marginTop:"40px"
      }}
    >
      <Box>
        <Box sx={{marginTop:"16px"}}>
          <p style={{fontWeight:"bold", fontSize:"15px"}}>#AB4567</p>
          <p style={{color:"#7E88C3", fontSize:"13px"}}>Re-branding</p>
        </Box>

        <Box>
          <p style={{color:"#7E88C3", fontSize:"13px"}}>106 Kendell Street,,</p>
          <p style={{color:"#7E88C3", fontSize:"13px"}}>Sharrington,,</p>
          <p style={{color:"#7E88C3", fontSize:"13px"}}>NR24 5WQ,</p>
          <p style={{color:"#7E88C3", fontSize:"13px"}}>United Kingdom</p>
        </Box>
      </Box>

      <Box>
        <Box>
          <Box>
            <Box>
              <p style={{color:"#7E88C3", fontSize:"13px"}}>Invoice Date</p>
              <p style={{fontWeight:"bold", fontSize:"15px"}}>2021-8-18</p>
            </Box>

            <Box>
              <p style={{color:"#7E88C3", fontSize:"13px"}}>Payment Due</p>
              <p style={{fontWeight:"bold", fontSize:"15px"}}>2021-8-19</p>
            </Box>
          </Box>

          <Box>
            <p style={{color:"#7E88C3", fontSize:"13px"}}>Bill To</p>
            <p style={{fontWeight:"bold", fontSize:"15px"}}>Jensen Huang</p>

            <Box>
              <p style={{color:"#7E88C3", fontSize:"13px"}}>19 Union Terrace,</p>
              <p style={{color:"#7E88C3", fontSize:"13px"}}>London,</p>
              <p style={{color:"#7E88C3", fontSize:"13px"}}>E1 3EZ,</p>
              <p style={{color:"#7E88C3", fontSize:"13px"}}>United Kingdom</p>
            </Box>
          </Box>
        </Box>

        <Box className="info__title-wrap">
          <p style={{color:"#7E88C3", fontSize:"13px"}}>Sent to</p>
          <p style={{fontWeight:"bold", fontSize:"15px"}}>jensenh@mail.com</p>
        </Box>
      </Box>
    </Box>
  );
}

export default InfoInvoice;
