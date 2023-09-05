import Drawer from "@mui/material/Drawer";
import { useState } from 'react'

import Form from "../Form"
import  useInvoice from '../../../hooks/useInvoice'
import { Delete } from "@mui/icons-material";
import { getFormFields, validationSchema } from './form-fields'
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";



function InvoiceForm({ onClose }) {

  const { invoiceId } = useParams()
  const { invoice, loading } = useInvoice(invoiceId)

  const onSubmit = (data) => {
    console.log(data)
  }

  if (loading) return <CircularProgress />
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
          defaultValues={invoice}
        />
      </div>
    </Drawer>
  );
}

export default InvoiceForm;
