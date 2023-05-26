const Transaction = require('../models/transaction.js');

exports.add = async (req, res) => {
    try {
        const newTransaction = new Transaction({ ...req.body });
        const insertedTransaction = await newTransaction.save();
        res.status(201).json(insertedTransaction);
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}