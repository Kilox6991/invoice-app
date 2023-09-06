import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';



function ItemsTotal({invoice, loading}) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!loading && invoice && invoice.items) {
      const calculatedTotal = invoice.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      setTotalAmount(calculatedTotal);
    }
  }, [invoice, loading]);
 
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(invoice)
  return (
    <Box sx={{ display: "flex", flexDirection: "column", p: 0, margin: 0 }}>
      <List sx={{ borderRadius: '6px 6px 0 0', background: "#F9FAFE" }}>
        {invoice.items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              sx={{
                display: { xs: "none", sm: "inline", lg: "inline" },
              }}
              primary={`Item ${index + 1}`}
            />
            <ListItemText primary={item.name} />
            <ListItemText
              sx={{
                display: { xs: "none", sm: "inline", lg: "inline" },
              }}
              primary={`Quantity:`}
            />
            <ListItemText primary={item.quantity} />
            <ListItemText
              sx={{
                display: { xs: "none", sm: "inline", lg: "inline" },
              }}
              primary={`Price:`}
            />
            <ListItemText primary={item.price +'€'} />
            <ListItemText
              sx={{
                display: { xs: "none", sm: "inline", lg: "inline" },
              }}
              primary={`Total:`}
            />
            <ListItemText primary={item.price * item.quantity + '€'} /> {/* Calcular el total aquí */}
          </ListItem>
        ))}
      </List>
      <div style={{ backgroundColor: "#373B53", color: "#FFFFFF", padding: '10px', p: 0, m: 0, borderRadius: '0 0 6px 6px', display:"flex", justifyContent:"space-around", gap:"100px" }}>
        <Typography>Amount Due:</Typography>
        <Typography>{totalAmount + '€'}</Typography>
      </div>
    </Box>
  );
}

export default ItemsTotal;
