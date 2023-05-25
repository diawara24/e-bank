const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compteSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: [true, 'le nom de la banque est obligatoire'],
    },
    customName: {
        type: String,
        required: true,
        maxlength: [50, '{VALUE} ne doit pas faire plus de 50 caractères'], 
    },
    lastUpdated: {
        type: Date
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
        require: [true, "l'utilisateur du compte est obligatoire"]
    }
});

const Compte = mongoose.model('Compte', compteSchema);

module.exports = { Compte };