const Invoice = require('../models/invoice');
const User = require('../models/user');

const getInvoices = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user || !user.invoices || user.invoices.length === 0) {
            return res.status(404).json({
                message: "No se encontraron facturas para este usuario"
            });
        }

        const invoiceIds = user.invoices;
        console.log(invoiceIds);

        const invoices = await Invoice.find({
            _id: {
                $in: invoiceIds
            }
        });

        if (!invoices || invoices.length === 0) {
            return res.status(404).json({
                message: "No se encontraron facturas para este usuario"
            });
        }

        res.status(200).json(invoices);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error al buscar facturas"
        });
    }
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
    const invoiceId = req.params.invoiceId
    const oneInvoice = await Invoice.findById(invoiceId)
    res.json(oneInvoice)
}
const createInvoice = async (req, res) => {
    const userId = req.user["_id"]
    const invoiceData = req.body;

    const newInvoice = new Invoice(invoiceData);
    await newInvoice.save();

    const invoiceId = newInvoice["_id"]
    const user = await User.findById(userId);
    user.invoices.push(invoiceId)
    await user.save()

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
    const existingInvoice = await Invoice.findByIdAndDelete(invoiceId);


    res.json(existingInvoice)
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