const express = require("express");

const isAuth = require('../middlewares/isAuth');
const isUserInvoice = require('../middlewares/isUserInvoice')

const {
    getInvoices,
    getInvoiceFiltered,
    getInvoiceById,
    createInvoice,
    updateInvoice,
    markInvoiceAsPaid,
    deleteInvoice,
} = require("../controllers/invoice");

const router = express.Router();

// Rutas para obtener facturas
router.get("/",isAuth, getInvoices); //isAuth,isUserInvoice,
router.get("/filter",isAuth,isUserInvoice, getInvoiceFiltered); 
router.get("/:invoiceId", getInvoiceById); //,isAuth,isUserInvoice

// Rutas para crear facturas
router.post("/",isAuth, createInvoice); //pendingInvoiceSchemaValidation ,isAuth,isUserInvoice
router.post("/draft",isAuth, createInvoice); // draftInvoiceSchemaValidation

// Ruta para actualizar facturas
router.put("/:invoiceId",isAuth, updateInvoice); //pendingInvoiceSchemaValidation,

// Ruta para marcar una factura como pagada
router.put("/paid/:invoiceId",isAuth, markInvoiceAsPaid);

// Ruta para eliminar una factura
router.delete("/:invoiceId",isAuth, deleteInvoice);

module.exports = router;