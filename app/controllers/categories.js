const Categorie = require('../models/categories.js');


exports.add = async (req, res) => {
    try {
        const newCategorie = new Categorie(req.body);
        const insertedCategorie = await newCategorie.save();
        res.status(201).json(insertedCategorie);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.update = async (req, res) => {
    try {
        console.log(req.body);
        await Categorie.updateOne({ _id: req.params.id }, req.body);
        const updatedCategorie = await Categorie.findById(req.params.id);
        res.status(200).json(updatedCategorie);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.delete = async (req, res) => {
    try {
        await Categorie.deleteOne({ _id: req.params.id });
        res.status(200).json("Categorie a été supprimé")
    } catch (error) {
        res.status(500).json(error);
    }
}