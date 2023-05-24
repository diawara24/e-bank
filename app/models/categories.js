const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'le catégorie est obligatoire']
    }
});

const User = mongoose.model('Categorie', categorieSchema);