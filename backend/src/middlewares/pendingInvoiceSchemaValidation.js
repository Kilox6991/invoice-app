const { body, validationResult } = require('express-validator');

const pendingInvoiceSchemaValidation = [
  body('email').notEmpty().withMessage('El campo de correo electrónico es requerido'),
  body('invoiceNumber').notEmpty().withMessage('El campo de número de factura es requerido'),
  body('user').notEmpty().withMessage('El campo de usuario es requerido'),
  body('createdAt').notEmpty().withMessage('El campo de fecha de creación es requerido'),
  body('paymentDue').notEmpty().withMessage('El campo de fecha de pago es requerido'),
  body('description').notEmpty().withMessage('El campo de fecha de descripcion es requerido'),
  body('termsOfpaymentDays').notEmpty().withMessage('El campo de terminos de pago es requerido'),
  body('clientName').notEmpty().withMessage('El campo de nombre del Cliente es requerido'),
  body('clientEmail').notEmpty().withMessage('El campo de email del Cliente es requerido'),
  body('clientEmail').notEmpty().withMessage('El campo de email del Cliente es requerido'),
  body('status').notEmpty().withMessage('El campo de status es requerido'),
  body('senderAddress').notEmpty().withMessage('Los campos de la direccion del clientes son requeridos'),
  body('clientAddress').notEmpty().withMessage('Los campos de la direccion del clientes son requeridos'),
  body('items').notEmpty().withMessage('El campo de items es requerido'),
 
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => ({
        field: error.param,
        msg: error.msg,
      }));

      return res.status(400).json(errorMessages);
    }

    next();
  }
];

module.exports = pendingInvoiceSchemaValidation;
