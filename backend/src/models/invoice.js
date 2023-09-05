const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  invoiceNumber: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  paymentDue: {
    type: String
  },
  description: {
    type: String
  },
  termsOfpaymentDays: {
    type: Number
  },
  clientName: {
    type: String
  },
  clientEmail: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  senderAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  items: [{
    name: String,
    quantity: Number,
    price: Number,
  }],
});

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice