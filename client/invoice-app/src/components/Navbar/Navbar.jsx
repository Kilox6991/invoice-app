
import React, { useState, useContext } from 'react';
import { AppBar, Avatar, Container, CssBaseline, IconButton, Toolbar, Grid, Modal, Button } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";

import authService from "../../services/isAuth-service"
import LogoutPage from '../../pages/users/LogoutPage';
import { useAuth } from '../../hooks/isAuth';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [user, dispatch] = useAuth()
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    authService.logout()

	  dispatch({ type: 'logout' })
    
    handleCloseModal();
    navigate("/signin")
  };
  return (
    <>
      <CssBaseline />
        <AppBar sx={{left:0, backgroundColor: "#373B53", height: { xs: "72px", lg: "100%" }, width:{xs:"100%", lg:"72px"}, pl:"0px"}}>
          <Toolbar sx={{pl:{xs:"0px",lg:"0px"},pr:{xs:"0px",lg:"0px"},display:"flex", flexDirection:{lg:"column"}, height:{lg:"100%"}}}>
            <Container sx={{ height: "100%", p:{xs:"0px",lg:"0px"}, m:{xs:"0px", lg:"0px"}}}>
              <IconButton
                edge="start"
                color="white"
                sx={{margin:{xs:"0px",lg:"0px"}, p:{xs:"0px",lg:"0px"}}}
              >
                <img src={logo} alt="logo-web" style={{ height: "72px", width: "72px" }} />
              </IconButton>
            </Container>
            <IconButton
              size="large"
              edge="end"
              color="white"
              aria-label="menu"
              sx={{ ml: "auto", pr: "0px", mr: "24.01px", pl: "20px", pt: "20px", pb: "20px" }}
            >
             <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z"
                fill="#7E88C3"
                fillRule="nonzero"
              />
            </svg>  
            </IconButton>
            <Grid sx={{ borderLeft:{xs:"1px solid #494E6E", lg: "none"},borderTop:{ xs:"none", lg:"1px solid #494E6E"}, pl: { xs: "10px", lg: "20px" }, pt: "20px", pb: "20px", height: {xs:"100%",lg:"100px"}, width:{xs:"100px",lg:"100%"}}}>
            <IconButton onClick={handleOpenModal}>
              <Avatar alt="Remy Sharp" src={avatar} sx={{ height: 32, width: 32 }} />
            </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '4px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <h2 id="simple-modal-title">Cerrar sesión</h2>
          <p id="simple-modal-description">¿Estás seguro de que deseas cerrar sesión?</p>
          <Button onClick={handleCloseModal} sx={{ marginRight: '16px' }}>Cancelar</Button>
          <Button onClick={handleLogout} variant="contained" color="primary">Confirmar</Button>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
