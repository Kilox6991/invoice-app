require('express-async-errors')

const express = require('express')

const errors = require('../middlewares/errors.js')
const userRoutes = require('../routes/user.js')
const invoiceRoutes = require('../routes/invoice.js')

module.exports = function (app) {
	app.use(express.json())

	//ENDPOINTS
	app.use('/api/users', userRoutes) //Signup y Login

	app.use('/api/invoices', invoiceRoutes) //Crear, actualizar y borrar productos

	app.use(errors)
}
