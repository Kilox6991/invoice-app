import AppBar from "@mui/material/AppBar";
import { Avatar, Container } from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid"
import logo from "../../assets/logo.png"
import CssBaseline from '@mui/material/CssBaseline';


function Navbar() {
  return (
    <>
    <CssBaseline />
    <Box sx={{ flexGrow: 1, display:"flex"}}>
      <AppBar sx={{ backgroundColor: "#373B53", height:"72px"}}>
        <Toolbar>
          <Container sx={{height:"100%", pl:0}}>
          <IconButton
            edge="start"
            color="white"
            sx={{ pl: 0, pr: 0, pt: 0 }}
          >
          <img src={logo} alt="logo-web" style={{ height: "72px", width: "72px"}}/>
          </IconButton>
          </Container>
          <IconButton
            size="large"
            edge="end"
            color="white"
            aria-label="menu"
            sx={{ml:"auto",pr:"0px", mr:"24.01px",pl: "20px",pt:"20px", pb:"20px"}}
          >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z"
                fill="#7E88C3"
                fillRule="nonzero"
              />
            </svg>
          </IconButton>
          <Grid sx={{ borderLeft: "1px solid #494E6E", pl: "20px",pt:"20px", height:"100%"}}>
          <Avatar alt="Remy Sharp" src={avatar} sx={{height:32, width:32}}/>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}

export default Navbar;
