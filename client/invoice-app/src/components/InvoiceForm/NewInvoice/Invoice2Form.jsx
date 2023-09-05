import Drawer from "@mui/material/Drawer";
import { useState } from 'react'

import Form from "../Form"
import { Delete } from "@mui/icons-material";
import { getFormFields, validationSchema } from './form-fields'

import invoicesService from "../../../services/invoice-service";

function InvoiceForm({ onClose }) {


  const onSubmit = (data) => {
    console.log("esta es la data",data )
    invoicesService.create(data)
  }
  return (
    <Drawer anchor="left" open={true} onClose={onClose} ModalProps={{ sx: {} }}>
      <div style={{ width: 719, padding: 56 }}>
        {/* Contenido del formulario */}


        <Form
          heading="New Invoice"
          buttonLabel="Vamos"
          formFields={getFormFields()}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </div>
    </Drawer>
  );
}

export default InvoiceForm;
