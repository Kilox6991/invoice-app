const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user'); 
const Invoice = require('../models/invoice');

module.exports = async function (req, res, next) {
    const token = req.headers['x-auth-token'];

    if (!token) return res.status(401).send('No hay token');

    try {
        const decoded = jwt.verify(token, process.env.jwtPrivateKey);
        req.user = decoded;

        
        const userId = decoded.userId;

       
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).send('Usuario no encontrado');
        }

        
        const userInvoices = await Invoice.find({ user: userId });

        req.userInvoices = userInvoices;

        next();
    } catch (err) {
        return res.status(400).send('Token inválido');
    }
};


