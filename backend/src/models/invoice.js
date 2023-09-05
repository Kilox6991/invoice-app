const mongoose = require('mongoose')

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para generar una letra aleatoria
function getRandomLetter() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const InvoiceSchema = new mongoose.Schema({
  
  invoiceNumber: {
    type: String,
    default: () => {
      // Generar el número de factura aleatorio con dos letras y cuatro números
      let invoiceNumber = '';
      for (let i = 0; i < 2; i++) {
        invoiceNumber += getRandomLetter();
      }
      for (let i = 0; i < 4; i++) {
        invoiceNumber += getRandomNumber(0, 9);
      }
      return invoiceNumber;
    },
  },
  date: {
    type: Date, 
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
    default: function () {
      // Calcular el estado en función de la fecha de pago y los días de plazo de pago
      if (!this.paymentDue || !this.termsOfpaymentDays) {
        return 'Draft';
      }
      const currentDate = new Date();
      const dueDate = new Date(this.paymentDue);
      dueDate.setDate(dueDate.getDate() + this.termsOfpaymentDays);

      if (currentDate <= dueDate) {
        return 'Pending';
      } else {
        return 'Paid';
      }
    },
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