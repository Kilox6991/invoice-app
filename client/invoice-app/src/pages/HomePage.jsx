import { Box, Container } from "@mui/material";

import CssBaseline from '@mui/material/CssBaseline';

function HomePage() {
    return (
        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1, minHeight: "100vh", background: "F8F8FB" }}>
                <Container sx={{ display: "flex", justifyContent: "space-between", pt: "104px" }}>
                    <div>
                        <div>Invoices</div>
                        <div style={{ fontSize: '14px' }}>7 invoices</div>
                    </div>
                    <div>Filter by status </div>
                    <div>Boton New</div>
                </Container>
                <Container sx={{ pt: "32px",background:"FFFFF" }}>
                    <div>Componente de factura</div>
                </Container>
            </Box>
        </>
    )
}

export default HomePage;
