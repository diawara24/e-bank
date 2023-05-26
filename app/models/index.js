require('dotenv').config();
const mongoose = require('mongoose');

connectDB =  () => {
    mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => console.log('MongoDB connected !'))
    .catch(() => console.log('Erreur with MongoDB connection'));
};

module.exports = connectDB;