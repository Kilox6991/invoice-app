const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const register = async (req, res) => {
	const { password: plainTextPassword, ...userDetails } = req.body

	const isUser = await User.findOne({
		$or: [{ email: userDetails.email }],
	})
	if (isUser)
		return res
			.status(400)
			.send('Se ha producido un problema inesperado vuelva a intentarlo')
	console.log(plainTextPassword)
	const salt = await bcrypt.genSalt(10)
	const password = await bcrypt.hash(plainTextPassword, salt)

	const user = await User.create({ email: userDetails.email, password });

	const token = user.generateJWT()

	res.setHeader('Access-Control-Expose-Headers', 'x-auth-token')
	res.setHeader('x-auth-token', token)
	res.send('Usuario registrado y logueado')
}

const login = async (req, res) => {
	const { password: plainTextPassword, email } = req.body
	
	const user = await User.findOne({ email })
	if (!user) return res.status(400).send('El usuario y contraseña no coincide')
	
	const isValidUser = await bcrypt.compare(plainTextPassword, user.password)
	
	if (!isValidUser)
		return res.status(400).send('El usuario y contraseña no coincide')
		
	const token = user.generateJWT()

	res.setHeader('Access-Control-Expose-Headers', 'x-auth-token')
	res.setHeader('x-auth-token', token)
	res.send('Usuario logueado')
}

module.exports = {
	register,
	login,
}
