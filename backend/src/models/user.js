const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const {
  pick
} = require('lodash');

const {
  ObjectId
} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value) => value.length >= 8,
      message: 'La contraseña debe tener al menos 8 caracteres',
    },
  },
  invoices: [{
    type: ObjectId,
    ref: "Invoice"
  }],
});


userSchema.methods.generateJWT = function () {
  const payload = {
    "_id": this["_id"].toString(),
    ...pick(this, ['email'])
  }


  return jwt.sign(payload, process.env.JWT_SECRET)
}

const User = mongoose.model('User', userSchema)

module.exports = User