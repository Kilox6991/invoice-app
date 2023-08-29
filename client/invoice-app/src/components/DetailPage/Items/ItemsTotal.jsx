import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

function ItemsTotal() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 0, margin: 0 }}>
      <List sx={{ borderRadius: '6px 6px 0 0', background: "#F9FAFE" }}>
        <ListItem sx={{}}>
          <ListItemText sx={{
            display: { xs: "none", sm: "inline", lg: "inline" }
          }} primary={`Item Name:`} />
          <ListItemText primary={'$name'} />
          <ListItemText sx={{
            display: { xs: "none", sm: "inline", lg: "inline" }
          }} primary={`QTY:`} />
          <ListItemText primary={'$qty'} />
          <ListItemText sx={{
            display: { xs: "none", sm: "inline", lg: "inline" }
          }} primary={`Price:`} />
          <ListItemText primary={'$price'} />
          <ListItemText sx={{
            display: { xs: "none", sm: "inline", lg: "inline" }
          }} primary={`Total:`} />
          <ListItemText primary={'$total'} />
        </ListItem>
      </List>
      <div style={{ backgroundColor: "#373B53", color: "#FFFFFF", padding: '10px', p: 0, m: 0, borderRadius: '0 0 6px 6px' }}>
        <Typography>Amount Due: $totalAmount</Typography>
      </div>
    </Box>
  );
}

export default ItemsTotal;
