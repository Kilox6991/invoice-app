import { useEffect, useState } from 'react'
import invoicesService from '../services/invoice-service'

function useInvoices() {
	const [invoices, setInvoices] = useState([])
	const [loading, setLoading] = useState(true)
	const [errors, setErrors] = useState()

	useEffect(() => {
		invoicesService
			.getAll()
			.then(({ data }) => setInvoices(data))
			.catch(setErrors)
			.finally(() => setLoading(false))
	}, [])
	
	return { invoices, loading, errors,setInvoices }
}

export default useInvoices