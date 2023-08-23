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
router.get("/api/invoices",isAuth,isUserInvoice, getInvoices); 
router.get("/api/invoices/filter",isAuth,isUserInvoice, getInvoiceFiltered); 
router.get("/api/invoices/:invoiceId",isAuth,isUserInvoice, getInvoiceById); 

// Rutas para crear facturas
router.post("/api/invoices",isAuth,isUserInvoice, createInvoice); //pendingInvoiceSchemaValidation
router.post("/api/invoices/draft",isAuth,isUserInvoice, createInvoice); // draftInvoiceSchemaValidation

// Ruta para actualizar facturas
router.put("/api/invoices/:invoiceId",isAuth,isUserInvoice, updateInvoice); //pendingInvoiceSchemaValidation,

// Ruta para marcar una factura como pagada
router.put("/api/invoices/paid/:invoiceId",isAuth,isUserInvoice, markInvoiceAsPaid);

// Ruta para eliminar una factura
router.delete("/api/invoices/:invoiceId",isAuth,isUserInvoice, deleteInvoice);

module.exports = router;