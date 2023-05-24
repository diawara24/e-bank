const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        minlength: [2, '{VALUE} ne doit pas faire moin de 2 caractères'],
        maxlength: [50, '{VALUE} ne doit pas faire plus de 50 caractères'],
    },
    type: {
        type: String,
        enum: { values: ['débit', 'crédit'], message: 'type {VALUE} est invalide' },
        required: true
    },
    amount: {
        type: Number,
        required: [true, 'le montant est obligatoire']
    },
    paymentDate: {
        type: Date,
        required: [true, 'le date de paiment est obligatoire']
    },
    paymentMethod: {
        type: String,
        enum: { values: ['cash', 'cheque', 'CB', 'Bank Transfer'], message: 'type {VALUE}  invalid' },
        required: true
    },
    isChecked: {
        type: Boolean,
        required: [true, 'le status de paiement est obligatoire']
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Categorie',
        required: [true, 'la catégorie associée est obligatoire']
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'Compte',
        required: [true, 'le compte associé est obligatoire']
    }
});

const User = mongoose.model('Transaction', transactionSchema);