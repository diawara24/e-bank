const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compteSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: [true, "le nom est obligatoire"],
    },
    customName: {
        type: String,
        required: true,
    },
    lastUpdated: {
        type: Date
    },
    userId: { type: Schema.Types.ObjectId, ref: User }
});

const User = mongoose.model(Compte, compteSchema);