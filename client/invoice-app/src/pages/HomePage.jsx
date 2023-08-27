import React, { useState } from "react";
import { Box, Container, styled } from "@mui/material";

import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InvoiceBox from "../components/InvoiceBox/Invoicebox";

//Styles
const CustomButton = styled(Button)({
  backgroundColor: "#7C5DFA",
  color: "#FFFFFF",
  borderRadius: "24px",
  width: "90px",
  height: "44px",
  gap: "6px",
  padding: "6px 15px 6px 6px",
  textDecoration: "none",
  border: "none",
  display: "flex",
  justifyContent: "space-around",

  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#9277FF",
  },
  "& .circle": {
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "32px",
    height: "32px",
  },
});
const CustomCheckbox = styled(Checkbox)(({}) => ({
  "&:hover": {
    color: "#5F3DC4",
  },
  "&.Mui-checked": {
    color: "#7C5DFA",
  },
}));
const CustomLink = styled("a")({
    textDecoration: "none", // Quita la decoración de subrayado
    color: "inherit", // Utiliza el color heredado
    "&:hover": {
      color: "#7C5DFA", // Cambia el color al pasar el mouse
    },
  });

//Estados
const FilterIcon = ({ rotated }) => (
  <svg
    width="11"
    height="7"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotated ? "180deg" : "0"})` }}
  >
    <path
      d="M1 1l4.228 4.228L9.456 1"
      stroke="#7C5DFA"
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
);

function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isIconRotated, setIsIconRotated] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
    setIsIconRotated(!isIconRotated);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsMenuOpen(false);
    setIsIconRotated(!isIconRotated);
  };
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: "100vh", background: "#F8F8FB" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "104px",
            pb: "34px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#0C0E16",
                marginBottom: "0px",
              }}
            >
              Invoices
            </div>
            <div
              style={{ fontSize: "13px", color: "#888EB0", marginTop: "-8px" }}
            >
              7 invoices
            </div>
          </div>
          <div>
            <Button
              aria-controls="filter-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ textTransform: "none", color: "#0C0E16" }}
            >
              <span
                style={{
                  marginRight: "12px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Filter
              </span>
              <FilterIcon rotated={isIconRotated} />
            </Button>
            <Menu
              id="filter-menu"
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleClose}
              keepMounted
            >
              <MenuItem onClick={handleClose}>
                <CustomCheckbox color="primary" />
                <div style={{ fontWeight: "bold" }}>Draft</div>{" "}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomCheckbox color="primary" />
                <div style={{ fontWeight: "bold" }}>Pending</div>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomCheckbox color="primary" />
                <div style={{ fontWeight: "bold" }}>Paid</div>
              </MenuItem>
            </Menu>
          </div>
          <CustomButton href="#text-buttons">
            <div className="circle">
              <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                  fill="#7C5DFA"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            New
          </CustomButton>
        </Container>
        <CustomLink href="/detalle-factura-1">
          <InvoiceBox />
        </CustomLink>
        <CustomLink href="/detalle-factura-1">
          <InvoiceBox />
        </CustomLink>
        <CustomLink href="/detalle-factura-1">
          <InvoiceBox />
        </CustomLink>
        <CustomLink href="/detalle-factura-1">
          <InvoiceBox />
        </CustomLink>
      </Box>
    </>
  );
}

export default HomePage;
