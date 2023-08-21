const Invoice = require('../models/invoice')

const getInvoices = async (req, res) => {

    const invoices = await Invoice.find({});

    if (!invoices || invoices.length === 0) {
        return res.status(404).json({
            message: "No se encontraron facturas"
        });
    }
    res.status(200).json(invoices);

};
const getInvoiceFiltered = async (req, res) => {
    const {
        status
    } = req.params;
    const filteredInvoice = await Invoice.find({
        status
    });
    res.status(200).json(filteredInvoice);
}
const getInvoiceById = async (req, res) => {
    const idInvoice = req.params.idInvoice
    const oneInvoice = await Invoice.findById(idInvoice)
    res.json(oneInvoice)
}
const createInvoice = async (req, res) => {
    const invoiceData = req.body;
    const newInvoice = new Invoice(invoiceData);
    await newInvoice.save();
    res.status(201).json(newInvoice);
}
const updateInvoice = async (req, res) => {
    const {
        invoiceId
    } = req.params;
    const existingInvoice = await Invoice.findById(invoiceId);
    Object.assign(existingInvoice, req.body);
    await existingInvoice.save();
    res.status(200).json(existingInvoice)
}
const markInvoiceAsPaid = async (req, res) => {
    const {
        invoiceId
    } = req.params;
    const existingInvoice = await Invoice.findById(invoiceId);
    existingInvoice.status = "paid";
    res.status(200).json(existingInvoice);
}
const deleteInvoice = async (req, res) => {
    const {
        invoiceId
    } = req.params;
    const existingInvoice = await Invoice.findById(invoiceId);
    await existingInvoice.remove();
}

module.exports = {
    getInvoices,
    getInvoiceFiltered,
    getInvoiceById,
    createInvoice,
    updateInvoice,
    markInvoiceAsPaid,
    deleteInvoice,
};