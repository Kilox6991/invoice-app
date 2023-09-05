import Drawer from "@mui/material/Drawer";
import {useState} from 'react'

import Form from "../Form"
import { Delete } from "@mui/icons-material";
import {getFormFields, validationSchema} from './form-fields'



function InvoiceForm({ onClose }) {

  const [invoiceRows, setInvoiceRows] =  useState([])

  const handleDeleteInvoiceRow = (index) => {
    setInvoiceRows(invoiceRows.filter(row => index !== row.index))
  }




  const handleAddInvoiceRow = (e) => {
    e.preventDefault()

  
    const index = invoiceRows.length

    const labelStyles = {}
    if(index) {
      labelStyles.display = 'none'
    }

    setInvoiceRows([...invoiceRows, 
        {
            index: index,          
            containerStyles: {
            marginTop: "25px",
            display: "flex",
            padding: 0,
          },
          children: [
            {
              name: "name-" + index,
              label: "Name",
              inputStyles: {},
              labelStyles,
            },
            {
              name: "quantity-"+index,
              label: "Quantity",
              inputStyles: { width: "50px" },
              labelStyles,
            },
            {
              name: "price-"+index,
              label: "Price",
              inputStyles: { width: "50px" },
              labelStyles,
            },
            {
              id: "action-" + index,
              type: "action",
              mode: "icon",
              icon: Delete,
              onClick: () => handleDeleteInvoiceRow(index)
            },
          ],
        },
    ])
  }

    const onSubmit = (data) => {


      const transformData = {
        rows: []
      }

      for(const prop in data) {

        const fields = ["name", "quantity", "price"]

        const field = prop.split('-')[0]

        if(!fields.includes(field)) transformData[prop] = data[prop]

        const index = prop.split('-')[1]

        transformData.rows[index] = {...transformData.rows[index], [field]: data[prop]}

      }
        delete transformData.rows.undefined
        console.log(transformData)
    }
  return (
    <Drawer anchor="left" open={true} onClose={onClose} ModalProps={{ sx: {} }}>
      <div style={{ width: 719, padding: 56 }}>
        {/* Contenido del formulario */}
      

        <Form
            heading="New Invoice"
            buttonLabel="Vamos"
            formFields={getFormFields(handleAddInvoiceRow, invoiceRows)}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        />
      </div>
    </Drawer>
  );
}

export default InvoiceForm;
