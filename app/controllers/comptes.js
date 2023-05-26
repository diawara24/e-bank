const Compte = require('../models/comptes.js');

exports.add = async (req, res) => {
    try {
        req.body.userId = req.auth.userId;
        const newCompte = new Compte({ ...req.body });
        const insertedCompte = await newCompte.save();
        res.status(201).json(insertedCompte);
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        let compte = await Compte.findById(id).
            populate({
                path: 'userId',
                match: { _id: req.auth.userId }
            })
        if (compte.userId) {
            req.body.userId = req.auth.userId;
            await Compte.updateOne({ _id: id }, req.body);
            const updatedCompte = await Compte.findById(id);
            res.status(200).json(updatedCompte);
        } else {
            res.status(401).json("vous n'etes pas autoriser à modifer ce comptes");
        }

    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Compte.deleteOne({_id: id});
        res.status(200).json("le compte a été supprimé")
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.get = async (req, res) => {
    try {
        let comptes = await Compte.find({userId: req.auth.userId})
            .select('-userId -__v');
        res.status(200).json(comptes);
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}