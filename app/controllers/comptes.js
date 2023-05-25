const Compte = require('../models/comptes.js');

exports.add = async (req, res) => {
    try {
        const newCompte = new Compte({ ...req.body });
        const insertedCompte = await newCompte.save();
        res.status(201).json(insertedCompte);
    } catch (error) {
        res.status(500).json(error || "serveur error");
    }
}

exports.update = async (req, res) => {
    try {
        const { idUser, idCompte } = req.params;
        let compte = await Compte.findById(idCompte).
            populate({
                path: 'userId',
                match: { _id: idUser }
            })
        if (compte.userId) {
            await Compte.updateOne({ idCompte }, req.body);
            const updatedCompte = await Compte.findById(idCompte);
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