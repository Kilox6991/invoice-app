import { Box, Container, styled } from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

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
        
        
    }
});

function HomePage() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, minHeight: "100vh", background: "#F8F8FB" }}>
                <Container sx={{ display: "flex", justifyContent: "space-between", pt: "104px" }}>
                    <div>
                        <div>Invoices</div>
                        <div style={{ fontSize: '14px' }}>7 invoices</div>
                    </div>
                    <div>Filter by status </div>
                    <CustomButton href="#text-buttons">
                        <div className="circle">
                            <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/>
                            </svg>
                        </div>
                        New
                    </CustomButton>
                </Container>
                <Container sx={{ pt: "32px", background: "#FFFFFF" }}>
                    <div>Componente de factura</div>
                </Container>
            </Box>
        </>
    )
}

export default HomePage;
