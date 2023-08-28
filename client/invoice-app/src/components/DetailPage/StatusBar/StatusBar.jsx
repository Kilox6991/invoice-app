import React from "react";
import { Box, Button, Typography, Stack, styled } from "@mui/material";

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
    color:"#DFE3FA"
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
    color:"#FFFFFF"
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
//-------- --------//

function StatusBar() {
  return (
    <Box display="flex">
      <Box>
        <Typography sx={{ color: "#858BB2", fontSize: "13px" }}>
          Status
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{
            backgroundColor: "rgba(51, 214, 159, 0.5)",
            width: "104px",
            height: "40px",
            borderRadius: "6px",
            display:"flex",
            justifyContent:"center",  
          }}
        >
          <div
            style={{
              backgroundColor: "#33D69F",
              borderRadius: "50%",
              width: "10px",
              height: "10px",
            }}
          ></div>
          <Typography variant="body2" sx={{}}>Paid</Typography>
        </Stack>
      </Box>
      <Box>
        <CustomButton1 variant="outlined">Edit</CustomButton1>
        <CustomButton2 variant="outlined">Delete</CustomButton2>
        <CustomButton3 variant="contained" color="primary">
          Mark as Paid
        </CustomButton3>
      </Box>
    </Box>
  );
}

export default StatusBar;
