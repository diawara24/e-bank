const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const User = mongoose.model('Categorie', categorieSchema);