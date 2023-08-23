const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('config')
const {
	pick
} = require('lodash')


const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		validate: {
			validator: (value) => value.length >= 8,
			message: 'La contraseña debe tener al menos 8 caracteres',
		},
	}
})

userSchema.methods.generateJWT = function () {
	return jwt.sign(pick(this, ['email']), process.env.jwtPrivateKey)
}

const User = mongoose.model('User', userSchema)

module.exports = User