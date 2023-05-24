const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    paymentDate: {
        type: Date,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    isChecked: {
        type: Boolean,
        required: true
    },
    category: { type: Schema.Types.ObjectId, ref: Categorie },
    accountId: { type: Schema.Types.ObjectId, ref: Compte }
});

const User = mongoose.model(transactionSchema, transactionSchema);