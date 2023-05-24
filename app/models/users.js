const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom est obligatoire"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (email) {
                const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailRegex.test(email);
            },
            message: 'Veuillez fournir une adresse e-mail valide'
        }
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model(User, userSchema);