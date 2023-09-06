import { useEffect, useState } from 'react'
import invoicesService from '../services/invoice-service'

function useInvoice(invoiceId) {
	const [invoice, setInvoice] = useState({})
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		invoicesService
			.getById(invoiceId)
			.then(({ data }) => setInvoice(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [invoiceId])

	return { invoice, loading, errors,setInvoice }
}

export default useInvoice
