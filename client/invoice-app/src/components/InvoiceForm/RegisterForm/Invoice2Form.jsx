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
            const token = await authService.register(data)
            const user = await authService.loginWithToken(token)

            let action = user.isAdmin ? { type: 'admin' } : { type: 'login' }

            action.payload = {
                username: user.username,
            }
            dispatch(action)

            navigate("/signin");
        } catch (error) {
            toast.error('Vuelve a intentarlo')
        }
    }
    return (
        <Form
            heading="Register"
            buttonLabel="Vamos"
            formFields={getFormFields()}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            
        />
    );
}

export default InvoiceForm;
