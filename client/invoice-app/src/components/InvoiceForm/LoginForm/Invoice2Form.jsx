import Drawer from "@mui/material/Drawer";
import { useState } from 'react'

import Form from "../Form"
import { Delete } from "@mui/icons-material";
import { getFormFields, validationSchema } from './form-fields'
import { toast } from 'react-toastify'

import { useAuth } from '../../../hooks/isAuth'

import authService from '../../../services/isAuth-service'

import { useNavigate } from 'react-router-dom'

function InvoiceForm() {
    const navigate = useNavigate()

    const [, dispatch] = useAuth()

    const onSubmit = async (data) => {
        try {
            const user = await authService.login(data)

            let action = { type: 'login' }

            action.payload = {
                email: user.email,
            }
            dispatch(action)

            navigate("/");
        } catch (error) {
            toast.error('Vuelve a intentarlo')
        }
    }
    return (
        <Form
            heading="Login"
            buttonLabel="Vamos"
            formFields={getFormFields()}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        />
    );
}

export default InvoiceForm;
